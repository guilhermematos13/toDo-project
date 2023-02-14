import { PlusCircle } from "phosphor-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <>
      <div className="bg-black h-52 flex items-center justify-center">
        <img src={Logo} />
      </div>
    </>
  );
}
