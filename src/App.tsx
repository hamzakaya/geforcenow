import { useMemo } from 'react'
import { useGeforceNowGames } from './core'
import { Filter, GameList, Header, Footer, Search, SortSelect } from './ui'

export default () => {
  const {
    loading,
    search,
    sort,
    setFilter,
    genres,
    status,
    firstCharacters,
    firstCharactersGames,
  } = useGeforceNowGames()

  const filterOptions = useMemo(
    () => [
      {
        title: 'Oyun Statüsü',
        list: status,
        setSelected: setFilter('status'),
      },
      {
        title: 'Oyun Türü',
        list: genres,
        setSelected: setFilter('genres'),
      },
    ],
    [loading],
  )

  return (
    <>
      <Header />
      <Search {...search} />

      <div className="max-w-screen-xl p-4 mx-auto mb-12">
        <div className="flex ">
          <div className="flex items-center content-center w-1/2 h-32 text-xl font-bold text-gray-100 rounded ">
            <h2
              className="mb-10 text-3xl font-bold text-white"
              style={{ lineHeight: '1.2' }}
            >
              Oyun Ara
            </h2>
          </div>
          <div className="z-10 flex items-center content-center justify-end w-1/2 h-32 text-xl font-bold text-gray-100 rounded ">
            <SortSelect {...sort} />
          </div>
        </div>

        <div className="box-border leading-6 tracking-normal text-gray-900 border-0 border-solid md:flex md:justify-between">
          <aside className="relative md:flex-shrink-0 md:mt-0 md:w-80 md:mr-3">
            <div className="box-border sticky top-0 pb-6 bg-darkgrey">
              {filterOptions.map((props, index) => (
                <Filter key={index} {...props} />
              ))}
            </div>
          </aside>

          <GameList {...{ firstCharacters, firstCharactersGames }} />
        </div>
      </div>

      <Footer />
    </>
  )
}
