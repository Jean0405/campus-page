"use client";
import { useRouter } from "next/navigation";
import TabsAdmin from "./TabsAdmin";
import "./index.css";

import NavigationBar from "@/components/NavigationBar";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { getUserByToken } from "@/utils/auth";

function page() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(null);

  async function validateAuth(){
    const token = localStorage.getItem("token")
    // Make the API request to get user information
    const response = await getUserByToken(token)
    
    if (response.status === 200){
      const userData = response.message.payload;

      //validate if is user admin
      if(!userData || userData.rol !== "admin"){
        router.push('/pages/login');
      }else{
        setIsAuth(userData);
      }
    }else{
      router.push('/pages/login');
      console.error(response);
    }
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
          <NavigationBar />
          <TabsAdmin />
        </>
      )}
    </>
  );
}

export default page;
