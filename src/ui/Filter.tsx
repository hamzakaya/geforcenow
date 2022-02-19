import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IFilterProps, useSelections } from '../core'
import UpDownIcon from './UpDownIcon'

export default function Filter({ title, list, setSelected }: IFilterProps) {
  const [show, setShow] = useState(true)
  const { selected, toggle } = useSelections(list)

  useEffect(() => setSelected(selected), [selected])

  return (
    <>
      <div className="p-6 pb-0 text-left text-white ">
        <span
          id="state"
          className="relative block mb-4 text-2xl font-semibold text-gray-500 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {title}

          <div className="absolute top-0 right-0">
            <UpDownIcon status={!show} />
          </div>
        </span>
        <div
          className={classNames('box-border', {
            hidden: !show,
          })}
        >
          {list.map(({ key, value }) => (
            <label className="inline-flex items-center w-full mb-4" key={key}>
              <input
                type="checkbox"
                className="w-5 h-5 mr-4 bg-transparent text-green"
                onChange={() => toggle(key)}
              />
              <span className="ml-2 text-greylight">{value}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}
