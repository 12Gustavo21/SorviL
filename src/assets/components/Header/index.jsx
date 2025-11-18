const Header = ({ onMenuOpen }) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#" className="text-3xl font-bold text-blue-600">
          SorviL
        </a>
        <nav className="hidden items-center space-x-6 md:flex">
          <a href="#" className="text-base font-medium text-gray-600 hover:text-blue-600">
            Minha Estante
          </a>
          <a href="#" className="text-base font-medium text-gray-600 hover:text-blue-600">
            Comunidade
          </a>
          <a href="#" className="text-base font-medium text-gray-600 hover:text-blue-600">
            Metas de Leitura
          </a>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <button aria-label="Buscar" className="text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button
            aria-label="Avatar"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://api.dicebear.com/8.x/lorelei/svg?seed=Baby&backgroundColor=38bdf8"
              alt="Avatar do Usuário"
            />
          </button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <button aria-label="Buscar" className="text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button id="menu-toggle" aria-label="Abrir menu" className="text-gray-500 hover:text-blue-600" onClick={onMenuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;