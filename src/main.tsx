import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";
import { TasksList } from "./Components/TasksList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <div className="flex justify-center w-full">
      <div className="flex flex-col md:w-1/2 xs:w-10/12">
        <NewTask />
        <TasksList />
        <Toaster/>
      </div>
    </div>
  </React.StrictMode>
);
