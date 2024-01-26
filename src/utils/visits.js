import {
  showErrorFormToast,
  showSuccessToast,
  showErrorToast,
} from "@/helpers/Toasts";

export const getVisits = async () => {
  try {
    let response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const getVisitsByStatus = async (status, company) => {
  try {
    status = !status ? "en espera" : status;
    company = !company ? "" : `&empresa=${company}`;
    let response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/filtro?estado=${status}${company}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const acceptVisit = async (visitorId) => {
  let response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${
        process.env.NEXT_PUBLIC_API_PORT
      }/visitas?id=${Number(visitorId)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          estado: "aceptado",
        }),
      }
    )
  ).json();
  return response;
};

export const reassignVisit = async (reassignDate, visitorId) => {
  let response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas?id=${visitorId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          fecha_visita: reassignDate,
          estado: "reasignado",
        }),
      }
    )
  ).json();
  return response;
};

export const getThisWeekVisits = async () => {
  try {
    let response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/filtro/semana`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const getCounterStatus = async (status, company) => {
  try {
    status = !status ? "en espera" : status;
    company = !company ? "" : `&empresa=${company}`;
    let response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/count?estado=${status}${company}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const sendExistedUserVisit = async (options) => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/antiguos`,
        options
      )
    ).json();
    if (response.status === 200) {
      showSuccessToast();
      setTimeout(() => {
        window.location.reload();
        localStorage.clear();
      }, 1500);
    } else {
      showErrorFormToast(response.message);
    }
    return response;
  } catch (err) {
    showErrorToast();
  }
};
export const sendNewUserVisit = async (options) => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/nuevos`,
        options
      )
    ).json();
    if (response.status === 200) {
      showSuccessToast();
      setTimeout(() => {
        window.location.reload();
        localStorage.clear();
      }, 1500);
    } else {
      showErrorFormToast(response.message);
    }
  } catch (err) {
    showErrorToast();
  }
};
