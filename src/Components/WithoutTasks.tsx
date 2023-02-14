import { ClipboardText } from "phosphor-react";

export function WithoutTasks() {
  return (
    <div className="flex flex-col items-center justify-center border-t border-t-gray-400 rounded-lg w-full h-60 mt-16 bg-gray-600">
      <ClipboardText className="text-gray-300 mb-4" size={64} />
      <p className="text-gray-300 font-bold">
        Você ainda não tem tarefas cadastradas
      </p>
      <p className="text-base text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
