import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { api } from "../services/api";
import { Loading } from "./Loading";
import { TaskItem } from "./TaskItem";
import { WithoutTasks } from "./WithoutTasks";
import { TaskProps } from "../interface/TaskProps";

interface TasksListProps {
  getList: () => void;
  list: TaskProps[];
  isLoading: boolean;
}

export function TasksList({ getList, list, isLoading }: TasksListProps) {
  useEffect(() => {
    getList();
  }, []);

  function handleEditTask(id: string, isComplete: boolean) {
    api.put(`/list/${id}`, { isComplete: !isComplete }).then(() => {
      getList();
    });
  }

  function handleDeleteTask(id: string) {
    api
      .delete(`/list/${id}`)
      .then(() => {
        getList();
        toast.success("Tarefa deletada!");
      })
      .catch(() => toast.error("Algo deu errado!"));
  }

  function isCompleteValidation() {
    let counter = 0;

    list.map((item: any) => {
      if (item.isComplete) {
        counter = counter + 1;
      }
    });
    return counter;
  }

  if (isLoading) {
    return <Loading />;
  }

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
            {isCompleteValidation()} de {list.length}
          </span>
        </p>
      </div>
      {list.map(({ id, title, isComplete }: any) => {
        return (
          <TaskItem
            handleDeleteTask={handleDeleteTask}
            title={title}
            id={id}
            key={id}
            isComplete={isComplete}
            handleEditTask={handleEditTask}
          />
        );
      })}
      {list.length === 0 && <WithoutTasks />}
    </div>
  );
}
