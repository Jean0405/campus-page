export const getVisits = async () => {
  let response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitantes`,
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
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitas?id=${visitorId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "aceptada",
        }),
      }
    )
  ).json();
  console.log(response);
  return response;
};

export const reassignVisit = async (reassignDate, visitorId) => {
  let response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/visitanos?id=${visitorId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
