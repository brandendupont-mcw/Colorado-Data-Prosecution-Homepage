import Logo from '../public/static/images/colorado-logo-branded.svg'

function Header2(){

    return(
        <header>
  <div className="mx-auto bg-primary-500  px-4 py-6 sm:px-6  lg:px-10">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="inline-flex items-center">
        <Logo />
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite px-5 py-3 text-ywhite transition hover:bg-ywhite hover:text-primary-500 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">
 Loyola CCJ </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite text-ywhite px-5 py-3 text-black  transition hover:bg-ywhite hover:text-primary-500  focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">
 PPIS </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ywhite text-ywhite px-5 py-3 text-black transition hover:bg-ywhite hover:text-primary-500 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium">
           The Evaluation Center</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

    )
}

export default Header2