import { Oval } from "react-loader-spinner";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center border-t border-t-gray-400 rounded-lg w-full h-60 mt-16 bg-gray-600">
      <Oval height="30" width="50" color="white" secondaryColor="#4EA8DE" />
    </div>
  );
}
