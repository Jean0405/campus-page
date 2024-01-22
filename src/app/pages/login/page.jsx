// /layout.jsx
"use client";
import "../../styles/index.css";

import logo from "../../../../public/img/logoCampus.svg";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useRouter } from "next/navigation";
import { login } from "@/utils/auth";
import Image from "next/image";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const userParse = {
    usuario: username,
    password: password,
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const response = await login(userParse);
    if (response.status === 200) {
      localStorage.setItem("token", response.token);
      router.push("/pages/admin");
    } else {
      toast.error(response.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setUsername("");
      setPassword("");
      console.log(response);
    }
  };
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="flex flex-col items-center justify-center rounded-3xl p-5 gap-10 bg-white">
          <div>
            <Image width={200} src={logo} alt="campus logo"/>
          </div>
          <form onSubmit={handleSignIn} className="flex flex-col gap-5">
            <Input
              size="lg"
              color="primary"
              variant="underlined"
              label="Email"
              placeholder="Enter your email"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              size="lg"
              color="primary"
              label="Password"
              variant="underlined"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button typeof="submit" className="w-full rounded flex items-center justify-center font-bold h-10" style={{ backgroundColor: "#F4B422"}}>GO FOR IT</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
