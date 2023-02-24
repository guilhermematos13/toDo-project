import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Header } from "../Components/Header";
import { NewTask } from "../Components/NewTask";
import { TasksList } from "../Components/TasksList";
import { TaskProps } from "../interface/TaskProps";
import { api } from "../services/api";

export function Home() {
  const [list, setList] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

  function getList() {
    setIsLoading(true);
    api
      .get("/list")
      .then((response) => {
        setList(response.data);
      })
      .catch(() => {
        toast.error("Algo deu errado!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:w-1/2 xs:w-10/12">
          <NewTask getList={getList} />
          <TasksList getList={getList} list={list} isLoading={isLoading} />
          <Toaster />
        </div>
      </div>
    </>
  );
}
