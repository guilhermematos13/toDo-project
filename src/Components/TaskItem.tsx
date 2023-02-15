import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { TaskProps } from "../interface/TaskProps";

export function TaskItem({ id, isComplete, title }: TaskProps) {
  return (
    <div className=" mt-6 w-full bg-gray-500 p-4 rounded-lg flex items-start gap-4 justify-between">
      <Checkbox.Root
        checked={isComplete}
        className="flex items-center gap-3 group focus: outline-none"
      >
        <div className="h-4 w-4 rounded-2xl border-2 border-blue flex items-center justify-center hover:bg-blueDark hover:bg-opacity-20 group-data-[state=checked]:bg-purpleDark group-data-[state=checked]:border-purpleDark group-data-[state=checked]:hover:bg-purple">
          <Checkbox.Indicator>
            <Check size={14} className="text-gray-100" />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>
      <p
        className={`text-left w-full text-sm ${
          isComplete ? "text-gray-300 line-through" : "text-gray-100"
        }`}
      >
        {title}
      </p>
      <div className="flex justify-center items-center h-6 w-6 text-gray-300 cursor-pointer hover:bg-gray-400 hover:text-red hover:rounded">
        <Trash />
      </div>
    </div>
  );
}
