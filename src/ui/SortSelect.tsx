import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { ISortProps, ISortType, useClickOutside } from '../core'
import UpDownIcon from './UpDownIcon'

const content = {
  [ISortType.asc]: 'Sırala A-Z',
  [ISortType.desc]: 'Sırala Z-A',
}

export default ({ sortType, setSortType }: ISortProps) => {
  const [show, setShow] = useState(false)
  const ref = useClickOutside(() => setShow(false))

  useEffect(() => setShow(false), [sortType])

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full px-6 py-4 text-sm font-medium text-gray-400 border-gray-300 shadow-sm bg-darkgrey focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShow((_) => !_)}
          >
            {content[sortType]}
            <UpDownIcon status={show} />
          </button>
        </div>

        <div
          ref={ref}
          className={classNames(
            'absolute bg-darkgrey w-full focus:outline-none origin-top-right right-0 ring-1 ring-black ring-opacity-5 shadow-lg shadow-black',
            {
              hidden: !show,
            },
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {Object.entries(content).map(([key, title]) => {
              const isActive = key === sortType

              return (
                <a
                  className={classNames('block px-4 py-2 text-sm text-center', {
                    'text-white': isActive,
                    'text-gray-400': !isActive,
                  })}
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  key={key}
                  onClick={() => setSortType(key as keyof typeof ISortType)}
                >
                  {title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
