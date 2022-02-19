import classNames from 'classnames'
import { KeyboardEvent, useMemo, useState, useEffect } from 'react'
import bannerImage from '../../assets/banner.png'
import { ISearchProps, useClickOutside } from '../core'
import { isEmpty } from '../core/utils'

export default ({ searchText, setSeach, findGameName }: ISearchProps) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(searchText)
  const ref = useClickOutside(() => setShow(false))

  useEffect(() => setValue(searchText), [searchText])

  const gameList = useMemo(() => {
    const list = findGameName(value)

    setShow((_) => false)
    if (isEmpty(value) || !list.length) return []

    setShow((_) => true)
    return list
  }, [value])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') return setSeach(value)
  }

  return (
    <div
      id="search"
      className="object-cover leading-6 text-center text-gray-900 bg-no-repeat"
      style={{
        backgroundImage: `url('${bannerImage}')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: '50%',
        height: '400px',
      }}
    >
      <div
        className="box-border flex flex-col items-center justify-center h-full px-5 py-0 mx-auto my-0 text-center text-white"
        style={{ maxWidth: 793 }}
      >
        <h1 className="m-0 text-4xl font-bold " style={{ lineHeight: '1.2' }}>
          Oynamak istediğin oyunu bul. İstediğin yerde oynamaya başla!
        </h1>
        <span className="mx-0 mt-4 mb-12 text-xl" style={{ lineHeight: '1.3' }}>
          GeForce NOW'ın sürekli yeni oyunlarla güncellenen kütüphanesindeki
          yüzlerce oyun arasından istediğine tek tıkla erişebilirsin. Unutma
          GeForce NOW birçok dijital oyun mağazasıyla entegre olarak çalışır. Bu
          mağazalardaki kütüphanende bulunan oyunları rahatça oynayabilirsin!
        </span>
        <div className="box-border relative w-full text-gray-900">
          <span
            className="mx-0 mt-4 mb-12 text-xl"
            style={{ lineHeight: '1.3' }}
          />

          <svg
            className="absolute z-30 w-6 h-6 left-3 top-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            ref={ref}
            autoComplete="off"
            name="search"
            placeholder="Ara"
            type="text"
            className="relative z-20 block w-full px-3 m-0 overflow-visible text-base font-normal leading-normal text-gray-700 bg-white border-none shadow-2xl cursor-pointer pl-11 py-7 bg-clip-padding focus:bg-white focus:border-blue-300 focus:shadow-xs focus:text-gray-700"
            value={value}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => !!gameList.length && setShow((_) => true)}
            style={{
              fontFamily: 'GreycliffCF',
              height: 'calc(1.5em + 0.75rem + 2px)',
              transition:
                'border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s',
            }}
          />

          {searchText.length ? (
            <svg
              className="absolute z-20 w-6 h-6 cursor-pointer right-3 top-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setSeach('')}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : null}

          <div
            className={classNames(
              'absolute z-10 w-full h-32 p-2 overflow-auto text-left shadow-2xl bg-white',
              {
                hidden: !show,
              },
            )}
          >
            {gameList.map((name, index) => (
              <li key={index} className="block">
                {name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
