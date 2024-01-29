// /layout.jsx
"use client";
import banner from "../../../../public/img/banner.jpg";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useRouter } from "next/navigation";
import * as authAPI from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    genre: "",
    phone: "",
    email: "",
    city: "",
  });

  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  // User format to submit
  const userSignInFormat = {
    usuario: signIn.username,
    password: signIn.password,
  };

  // User format to submit
  const userSignUpFormat = {
    usuario: signUp.username,
    password: signUp.password,
    genero: signUp.genre,
    telefono: signUp.phone,
    correo: signUp.email,
    ciudad: signUp.city,
  };

  // Handle sign up form submission (REGISTER)
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(userSignUpFormat);
    const response = await authAPI.register(userSignUpFormat);
    if (!response) {
      toast.error("Ups, algo salió mal", {
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
    } else {
      console.log(response);
      if (response.status !== 200) {
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
        setSignIn({
          username: "",
          password: "",
        });
      }
    }
    setSignUp({
      username: "",
      password: "",
      genre: "",
      phone: "",
      email: "",
      city: "",
    });
  };
  // Handle sign in form submission (LOGIN)
  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await authAPI.login(userSignInFormat);

    //Validate if there was an error in the request
    if (!response) {
      toast.error("Ups, algo salió mal", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setSignIn({
        username: "",
        password: "",
      });
    } else {
      // Validate if the status of the response is not correct
      if (response.status !== 200) {
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
      } else {
        const user = await authAPI.getUserByToken(response.token);
        //Validate user status
        if (user.message.payload.estado) {
          //Validate user rol to redirect
          if (user.message.payload.rol === "admin") {
            localStorage.setItem("token", response.token);
            router.push("/pages/admin");
          } else {
            console.log("Eres un " + user.message.payload.rol);//SHOULD BE REFACTORED TO REDIRECT TO CAMPER PAGE 
            return;
          }
        } else {
          toast.info("Tu solicitud de registro está en revisión", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
      setSignIn({
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="relative h-screen grid md:grid-cols-2 place-items-center">
        {/* <------------- LEFT SECTION ------------> */}
        <div className="bg-[#2CA2FF] w-full h-full relative">
          <Image
            className="w-full h-full object-cover"
            src={banner}
            alt="left section image"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              COMUNIDAD{" "}
              <TypeWriter customClass="text-[#F4B422]">CAMPUSLANDS</TypeWriter>
            </h1>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#000087] opacity-50"></div>
        </div>
        {/* <------------- SIGN IN SECTION ----------> */}
        <div
          className={`${
            !isRegistered ? "flex" : "hidden"
          } flex-col items-center justify-center rounded-3xl p-5 gap-10`}
        >
          <div className="text-center">
            {/* <Image width={200} src={logo} alt="campus logo" priority/> */}
            <h1 className="text-3xl text-[#000087] font-bold">
              INICIO DE SESIÓN
            </h1>
            <p className="pt-3">
              Bienvenido de vuelta, identificate y despega con nosotros
            </p>
          </div>
          <form onSubmit={handleSignIn} className="flex flex-col gap-5">
            <Input
              size="lg"
              variant="underlined"
              label="Username"
              placeholder="Enter your username"
              value={signIn.username}
              onChange={(e) =>
                setSignIn({
                  ...signIn,
                  username: e.target.value,
                })
              }
            />
            <Input
              size="lg"
              variant="underlined"
              label="Password"
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
              value={signIn.password}
              onChange={(e) =>
                setSignIn({
                  ...signIn,
                  password: e.target.value,
                })
              }
            />
            <p className="text-small md:text-md">
              ¿No eres un miembro?{" "}
              <span
                onClick={() => setIsRegistered(!isRegistered)}
                className="text-[#000087] font-bold hover:text-black cursor-pointer"
              >
                Registrate
              </span>
            </p>
            <button
              typeof="submit"
              className="w-full rounded flex items-center justify-center font-bold h-10 hover:scale-90 duration-500"
              style={{ backgroundColor: "#F4B422" }}
            >
              ENTRAR
            </button>
            <Link
              href="/"
              className="bg-[#000087] text-white w-full rounded flex items-center justify-center font-bold h-10 hover:scale-90 duration-500"
            >
              INICIO
            </Link>
          </form>
        </div>
        {/* <------------- REGISTER IN SECTION ----------> */}
        <div
          className={`${
            isRegistered ? "flex" : "hidden"
          } flex-col items-center justify-center rounded-3xl p-5 gap-10`}
        >
          <div className="text-center">
            <h1 className="text-3xl text-[#000087] font-bold">REGISTRO</h1>
            <p className="pt-3">
              Bienvenido a nuestra comunidad{" "}
              <span className="font-bold">DEV</span> <br />
              estaremos encantados de tenerte a bordo
            </p>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col gap-5">
            <Input
              size="lg"
              variant="underlined"
              label="Username"
              placeholder="Ingresa tu nombre de usuario"
              isRequired
              value={signUp.username}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  username: e.target.value,
                })
              }
            />
            <Input
              size="lg"
              variant="underlined"
              label="Correo"
              type="email"
              placeholder="Ingresa tu correo"
              isRequired
              value={signUp.email}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  email: e.target.value,
                })
              }
            />
            <Input
              size="lg"
              variant="underlined"
              label="Password"
              placeholder="Ingresa tu contraseña"
              isRequired
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
              value={signUp.password}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  password: e.target.value,
                })
              }
            />
            <RadioGroup
              orientation="horizontal"
              label="Selecciona tu genero"
              isRequired
              value={signUp.genre}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  genre: e.target.value,
                })
              }
            >
              <Radio value="masculino">Hombre</Radio>
              <Radio value="femenino">Mujer</Radio>
            </RadioGroup>
            <Input
              size="lg"
              variant="underlined"
              label="Teléfono"
              placeholder="Ingresa tu teléfono"
              type="tel"
              minLength={8}
              maxLength={10}
              isRequired
              value={signUp.phone}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  phone: e.target.value,
                })
              }
            />
            <Input
              size="lg"
              variant="underlined"
              label="Ciudad"
              placeholder="Ingresa tu ciudad"
              isRequired
              value={signUp.city}
              onChange={(e) =>
                setSignUp({
                  ...signUp,
                  city: e.target.value,
                })
              }
            />
            <p className="text-small md:text-md">
              ¿Ya eres miembro?{" "}
              <span
                onClick={() => setIsRegistered(!isRegistered)}
                className="text-[#000087] font-bold hover:text-black cursor-pointer"
              >
                Inicia sesión
              </span>
            </p>
            <button
              typeof="submit"
              className="w-full bg-[#00AA80] rounded flex items-center justify-center font-bold h-10 hover:scale-90 duration-700"
            >
              REGISTRARSE
            </button>
            <Link
              href="/"
              className="bg-[#000087] text-white w-full rounded flex items-center justify-center font-bold h-10 hover:scale-90 "
            >
              INICIO
            </Link>
          </form>
        </div>
        <span
          className={`${
            isRegistered ? "bg-[#00AA80]" : "bg-[#F4B422]"
          } duration-700 hidden md:flex absolute w-12 h-12 lg:w-16 lg:h-16 rotate-45`}
        ></span>
      </div>
      <ToastContainer />
    </>
  );
}
