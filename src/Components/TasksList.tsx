import { ClipboardText } from "phosphor-react";

export function TasksList() {
  return (
    <div>
      <div className="flex mt-16 items-center justify-between">
        <p className="text-blue font-bold text-sm">
          Tarefas criadas
          <span className="text-gray-100 rounded-xl pl-3 pt-1 pb-1 pr-3 bg-gray-400 ml-2">
            0
          </span>
        </p>

        <p className="text-purple font-bold text-sm">
          Concluídas
          <span className="text-gray-100 rounded-xl pl-3 pt-1 pb-1 pr-3 bg-gray-400 ml-2">
            0
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-t-gray-400 rounded-lg w-full h-60 mt-16 bg-gray-600">
        <ClipboardText className="text-gray-300 mb-4" size={64} />
        <p className="text-gray-300 font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-base text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
