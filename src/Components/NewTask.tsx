import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className="-mt-7 flex items-center gap-2 justify-center xs:flex-col md:flex-row">
      <input
        placeholder="Adicione uma nova tarefa"
        className="bg-gray-500 text-gray-300 p-4 w-full h-14 rounded-md border border-gray-500 placeholder:text-gray-300 focus:outline-none focus:border focus:border-purpleDark focus:text-gray-100"
      ></input>
      <button
        className="flex items-center justify-center gap-1 bg-blueDark font-bold p-4 rounded-md text-gray-100 h-14 hover:bg-blue transition-colors xs:w-full md:w-auto"
        type="button"
      >
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
