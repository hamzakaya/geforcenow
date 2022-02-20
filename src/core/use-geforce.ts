import { useEffect, useMemo, useState } from 'react'
import { IFilterType, IGame, ISortType, IStatus } from './type'
import { gameFilterFunction, getData, isEmpty } from './utils'

export default function useGeforceNowGames() {
  // call data state
  const [allData, setAllData] = useState<IGame[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // state in hook
  const [data, setData] = useState<IGame[]>([])
  const [sortType, setSortType] = useState<keyof typeof ISortType>(
    ISortType.asc,
  )
  const [searchText, setSeachText] = useState<string>('')

  const [selectedFilter, setSelectedFilter] = useState<IFilterType>({
    genres: [],
    status: [],
  })

  useEffect(
    () =>
      void getData()
        .then((response) => setAllData(response))
        .catch(() => setError(true))
        .finally(() => setLoading(false)),
    [],
  )

  useEffect(() => {
    if (isEmpty(searchText)) setData((_) => allData)
    else setData((_) => allData.filter(gameFilterFunction(searchText)))

    const getFilter = Object.entries(selectedFilter).filter(
      ([, filters]) => filters.length,
    )
    if (!getFilter.length) return

    setData((games) =>
      games.filter((game) =>
        getFilter
          .map(([key, filters]: [string, string[]]) => {
            if (key === 'status') return filters.includes(game.status)
            if (key === 'genres')
              return filters.some((genre: string) =>
                game.genres.includes(genre),
              )
          })
          .every(Boolean),
      ),
    )
  }, [searchText, selectedFilter, allData])

  const getLists = useMemo(() => {
    const status = Object.entries(IStatus).map(([key, value]) => ({
      key,
      value,
    }))

    const genres = Array.from(new Set(data.flatMap((game) => game.genres)))
      .map((key) => ({ key, value: key }))
      .sort()

    const firstCharactersGroup = data.reduce(
      (
        group: {
          [x: string]: {
            char: string
            games: IGame[]
          }
        },
        game: IGame,
      ) => {
        let char = game.title.charAt(0).toUpperCase()

        if (!group[char]) group[char] = { char, games: [game] }
        else group[char].games.push(game)

        return group
      },
      {},
    )

    const firstCharacters =
      sortType === ISortType.asc
        ? Object.keys(firstCharactersGroup).sort()
        : Object.keys(firstCharactersGroup).sort().reverse()

    const firstCharactersGames = (firstCharacters: string) =>
      firstCharactersGroup[firstCharacters].games

    return { genres, status, firstCharacters, firstCharactersGames }
  }, [data, sortType])

  const findGameName = (str: string) =>
    allData.filter(gameFilterFunction(str)).map((game) => game.title)

  const setFilter = <K extends keyof IFilterType>(key: K) => (
    param: string[],
  ) => setSelectedFilter((_) => ({ ..._, [key]: param }))

  return {
    data,
    loading,
    error,
    setFilter,
    search: {
      searchText,
      findGameName,
      setSeach: (s: string): void => void setSeachText((_) => s),
    },
    sort: { sortType, setSortType },
    ...getLists,
  } as const
}
