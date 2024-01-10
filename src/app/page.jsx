import NavigationBar from "@/components/NavigationBar";
import { Button } from "@nextui-org/react";

function page() {
  return (
    <>
      <div className="h-screen bg-black flex flex-col justify-center items-center gap-3">
        <h1 className="text-white text-3xl font-bold">PÁGINA <span className="text-sky-500">CAMPUSLANDS</span></h1>
        <div>
          <Button className="bg-neutral-800 text-white rounded">NextJS</Button>
        </div>
      </div>
    </>
  );
}

export default page;