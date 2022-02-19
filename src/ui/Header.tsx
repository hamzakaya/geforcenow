import logo from '../../assets/logo.svg'
import menuHover from '../../assets/menu-hover.svg'

export default () => (
  <header className="bg-white shadow-xl ">
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="flex items-center justify-between space-x-4 lg:space-x-10">
        <div className="flex lg:w-0 lg:flex-1">
          <a
            href="/"
            className="h-full leading-6 bg-transparent cursor-pointer w-80"
          >
            <img src={logo} />
          </a>
        </div>
        <nav className="hidden -mt-1 space-x-8 text-base font-semibold md:flex">
          <a className="relative menu-active before:-bottom-8 before:-inset-1 before:absolute text-green">Games</a>
          <a>Membership</a>
          <a>Download</a>
          <a>Blog</a>
          <a>Support</a>
        </nav>
        <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
          <a
            className="px-16 py-3 text-sm font-semibold text-white bg-green"
            href=""
          >
            LET'S PLAY
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-lg"
            type="button"
          >
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
)
