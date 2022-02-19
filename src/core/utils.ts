import { IGame } from './type'
import fakeData from './data.json'

export const isEmpty = (str: string) => !str || !str.trim()

// TODO: doesn't do 100% accurate filtering
export const gameFilterFunction = (str: string) => (game: IGame) =>
  game.title
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/\s/g, '')
    .toLowerCase()
    .includes(str.replace(/\s/g, '').toLowerCase())

export const getData = () =>
  new Promise((resolve: (data: IGame[]) => void, reject) => {
    if (!Array.isArray(fakeData))
      return setTimeout(() => reject(new Error('Data not found')), 250)

    setTimeout(() => resolve(fakeData as IGame[]), 500)
  })
