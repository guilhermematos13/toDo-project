import { useEffect, useState } from "react";
import { TaskProps } from "../interface/TaskProps";
import { api } from "../services/api";
import { TaskItem } from "./TaskItem";
import { WithoutTasks } from "./WithoutTasks";

export function TasksList() {
  const [list, setList] = useState<TaskProps[]>([]);

  useEffect(() => {
    api.get("/list").then((response) => {
      setList(response.data);
    });
  });

  return (
    <div>
      <div className="flex mt-16 items-center justify-between">
        <p className="text-blue font-bold text-sm">
          Tarefas criadas
          <span className="text-gray-100 rounded-xl pl-3 pt-1 pb-1 pr-3 bg-gray-400 ml-2">
            {list.length}
          </span>
        </p>
        <p className="text-purple font-bold text-sm">
          Concluídas
          <span className="text-gray-100 rounded-xl pl-3 pt-1 pb-1 pr-3 bg-gray-400 ml-2">
            0 de {list.length}
          </span>
        </p>
      </div>
      {list.map(({ id, title, isComplete }) => {
        return (
          <TaskItem title={title} id={id} key={id} isComplete={isComplete} />
        );
      })}
      {list.length === 0 && <WithoutTasks />}
    </div>
  );
}
