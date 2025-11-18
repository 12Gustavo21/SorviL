const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      id="mobile-menu-container"
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div
        id="menu-overlay"
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      <div
        id="menu-panel"
        className={`relative z-10 flex h-full w-64 flex-col bg-white p-4 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          id="menu-close"
          className="self-end text-gray-500 hover:text-gray-800"
          aria-label="Fechar menu"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-8 flex flex-col space-y-4">
          <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100">
            Minha Estante
          </a>
          <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100">
            Comunidade
          </a>
          <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100">
            Metas de Leitura
          </a>

          <div className="border-t border-gray-200 pt-4">
            <a href="#" className="flex items-center rounded-md px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100">
              <img
                className="h-8 w-8 rounded-full"
                src="https://api.dicebear.com/8.x/lorelei/svg?seed=Baby&backgroundColor=38bdf8"
                alt="Avatar"
              />
              <span className="ml-3">Meu Perfil</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;