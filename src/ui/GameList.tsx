import { IGameListProps } from '../core'
import polygon from '../../assets/polygon.svg'

export default function GameList({
  firstCharacters,
  firstCharactersGames,
}: IGameListProps) {
  return (
    <div className="box-border leading-6 border-0 border-solid md:flex-grow">
      {firstCharacters.length ? (
        firstCharacters.map((char, index) => (
          <article
            className="relative items-center p-6 mb-4 bg-darkgrey"
            key={index}
          >
            <div className="w-full pb-4 ">
              <span
                className="block w-16 h-12 pt-1 mb-8 text-3xl font-bold text-center text-gray-900 uppercase bg-no-repeat bg-contain -indent-1"
                style={{
                  backgroundImage: `url("${polygon}")`,
                  overflowWrap: 'break-word',
                }}
              >
                {char}
              </span>
            </div>

            <div className="grid w-full grid-cols-2 gap-4 pb-1">
              {firstCharactersGames(char).map((game, index) => (
                <div className="game-item text-greylight" key={index}>
                  {game.title}{' '}
                </div>
              ))}
            </div>
          </article>
        ))
      ) : (
        <NotFoundGame />
      )}
    </div>
  )
}

const NotFoundGame = () => (
  <article className="items-center py-32 mb-4 bg-darkgrey">
    <div className="text-center text-white">Uygun oyun bulunamadı.</div>
  </article>
)
