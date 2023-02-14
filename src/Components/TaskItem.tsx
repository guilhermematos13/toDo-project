import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";

export function TaskItem() {
  return (
    <div className=" mt-6 w-full bg-gray-500 p-4 rounded-lg flex items-start gap-4 justify-between">
      <Checkbox.Root className="flex items-center gap-3 group focus: outline-none">
        <div className="h-4 w-4 rounded-2xl border border-blue flex items-center justify-center group-data-[state=checked]:bg-purpleDark group-data-[state=checked]:border-purpleDark">
          <Checkbox.Indicator>
            <Check size={14} className="text-gray-100" />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>
      <p className="text-left w-full text-gray-100 text-sm">
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown
      </p>
      <div className="flex justify-center items-center h-6 w-6 text-gray-300 cursor-pointer hover:bg-gray-400 hover:text-red hover:rounded">
        <Trash />
      </div>
    </div>
  );
}
