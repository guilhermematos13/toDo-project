import { ClipboardText } from "phosphor-react";
import { WithoutTasks } from "./WithoutTasks";

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
      <WithoutTasks />
    </div>
  );
}
