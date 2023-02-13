import { PlusCircle } from "phosphor-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <>
      <div className="bg-black h-[12.25rem] flex items-center justify-center">
        <img src={Logo} />
      </div>
      <div className="bg-black h-1 flex items-center justify-center">
        <input
          placeholder="Adicione uma nova tarefa"
          className="bg-gray-500 text-gray-300 p-4 h-[3.375rem] w-[40rem] rounded-md border border-gray-500 placeholder:text-gray-300 focus:outline-none focus:border focus:border-purpleDark focus:text-gray-100"
        ></input>
        <button
          className="flex items-center gap-1 bg-blueDark p-4 rounded-md ml-4 text-gray-100 w-[5.625rem] h-[3.375rem] hover:bg-blue transition-colors"
          type="button"
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </div>
    </>
  );
}
