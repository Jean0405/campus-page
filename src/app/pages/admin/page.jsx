"use client";
import { useRouter } from "next/navigation";
import "./index.css";

import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { getUserByToken } from "@/utils/auth";
import SideBarAdmin from "./SideBarAdmin";

function page() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(null);

  async function validateAuth() {
    const token = localStorage.getItem("token");
    // Make the API request to get user information
    const response = await getUserByToken(token);

    if (!response || response.status !== 200) {
      router.push("/pages/login");
    } else {
      const userData = response.message.payload;

      if (!userData || userData.rol !== "admin") {
        localStorage.removeItem("token");
        router.push("/pages/login");
      } else {
        setIsAuth(userData);
      }
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
          <SideBarAdmin />
        </>
      )}
    </>
  );
}

export default page;
