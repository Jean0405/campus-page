import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showErrorToast = () => {
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
};
