export const getVisits = async () => {
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
};

export const getVisitsByStatus = async (status) => {
  let response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas/filtro?estado=${status}`,
      {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    )
  ).json();
  return response;
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
};
