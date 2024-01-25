"use client";
import { useRouter } from "next/navigation";
import TabsAdmin from "./TabsAdmin";
import "./index.css";


import { useEffect, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { getUserByToken, logOut } from "@/utils/auth";
import { checkResponseStatus } from "@/helpers/checkResponses";

function page() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(null);

  async function validateAuth() {
    const token = localStorage.getItem("token");
    // Make the API request to get user information
    const response = await getUserByToken(token);

    if (!response || response.status !== 200) {
      router.push('/pages/login');
    }else{
      const userData = response.message.payload;
      
      if (!userData || userData.rol !== "admin") {
        localStorage.removeItem("token");
        router.push('/pages/login');
      }else{
        setIsAuth(userData);
      }
    }
    
  }


  const handleLogOut = async()=>{
    const token = localStorage.getItem("token")
    let response = await logOut(token);

    response = checkResponseStatus(response,200);

    if (!response) {
      showErrorToast();
    }
    localStorage.removeItem("token");
    router.push('/pages/login');
  }

  useEffect(() => {
    validateAuth();
  }, []);

  return (
    <>
      {!isAuth ? (
        <div className="h-screen grid place-items-center">
          <Spinner label="Cargando..." size="lg" color="warning" />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <Button className="bg-yellow-500 m-auto font-bold p-3 mt-3" onClick={()=>handleLogOut()}>Cerrar sesión</Button>
          <div className="w-full grid place-items-center">
          <TabsAdmin />
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default page;
