export enum ISortType {
  asc = 'asc',
  desc = 'desc',
}

export enum IStatus {
  AVAILABLE = 'Oynanabilir',
  MAINTENANCE = 'Güncelleniyor',
  PATCHING = 'Bakımda',
}

export interface IGame {
  id: string
  title: string
  sortName: string
  isFullyOptimized: string
  steamUrl: string
  store: string
  publisher: string
  genres: string[]
  status: keyof typeof IStatus
}

export interface IFilterType {
  genres: string[]
  status: string[]
}

export type IGameListProps = {
  firstCharacters: string[]
  firstCharactersGames: (firstCharacters: string) => IGame[]
}

export type IFilterProps = {
  title: string
  list: any[]
  setSelected: (param: string[]) => void
}

export type ISearchProps = {
  searchText: string
  findGameName: (str: string) => string[]
  setSeach: (text: string) => void
}

export type ISortProps = {
  sortType: keyof typeof ISortType
  setSortType: (type: keyof typeof ISortType) => void
}
