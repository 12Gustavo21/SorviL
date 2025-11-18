import { useState } from "react";

const HelpTooltip = ({ text }) => (
  <div className="group relative ml-2">
    <span className="inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white shadow">
      ?
    </span>
    <div
      className="absolute bottom-full left-1/2 z-20 mb-2 w-52 -translate-x-1/2 rounded-lg bg-gray-900 p-2 text-center text-xs text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100"
      role="tooltip"
    >
      {text}
    </div>
  </div>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("perfil");
  const readingProgress = 60;

  const getTabClasses = (tabName) => {
    const isActive = activeTab === tabName;
    return `py-3 px-4 text-sm font-medium border-b-2 cursor-pointer transition-all ease-in-out ${
      isActive
        ? "border-green-600 text-green-700 font-semibold bg-green-50"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100"
    }`;
  };

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-gray-900 tracking-tight">Editar Perfil e Preferências</h1>

      <nav className="mb-6 flex border-b border-gray-200 bg-white rounded-t-lg shadow-sm" aria-label="Seções do Perfil">
        <button className={getTabClasses("perfil")} onClick={() => setActiveTab("perfil")} role="tab">
          Perfil Público
        </button>
        <button className={getTabClasses("preferencias")} onClick={() => setActiveTab("preferencias")} role="tab">
          Preferências
        </button>
        <button className={getTabClasses("seguranca")} onClick={() => setActiveTab("seguranca")} role="tab">
          Privacidade
        </button>
      </nav>

      <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
        {activeTab === "perfil" && (
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <img
                className="h-28 w-28 rounded-full object-cover shadow-md ring-2 ring-green-400"
                src="https://api.dicebear.com/8.x/lorelei/svg?seed=Baby&backgroundColor=00a63e"
                alt="Avatar atual"
              />

              <div className="grow text-center sm:text-left">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Upload de nova foto
                </label>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF até 10MB.</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <label htmlFor="username" className="flex items-center text-sm font-medium text-gray-700">
                  Nome de Usuário
                  <HelpTooltip text="Seu @ público. Pode conter letras, números e _" />
                </label>
                <input
                  type="text"
                  id="username"
                  defaultValue="ana_leitora"
                  className="mt-1 p-1 ps-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Biografia
                </label>
                <textarea
                  id="bio"
                  rows="4"
                  className="mt-1 pt-2 ps-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  defaultValue="Amante de fantasia e ficção científica. Sempre em busca da próxima grande leitura."
                ></textarea>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700">Email associado</span>
                <p className="mt-1 text-sm text-gray-600">ana.silva@email.com (Não pode ser alterado por aqui)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Meta Anual de Leitura (30 de 50 livros)</label>
                <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-green-600 transition-all"
                    style={{ width: `${readingProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
              <button
                type="button"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        )}

        {activeTab === "preferencias" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Preferências de Leitura</h3>
            <p className="mt-2 text-gray-600">Em breve: Configure seus gêneros favoritos, autores e recomendações.</p>
          </div>
        )}

        {activeTab === "seguranca" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Privacidade e Segurança</h3>
            <p className="mt-2 text-gray-600">Em breve: Gerencie quem pode ver sua atividade e altere sua senha.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
