export const getCampers = async () => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/cv`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).json();
    return response.message;
  } catch (error) {
    return null;
  }
};

export const getAllInfoCamper = async (id) => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/cv/user?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const getCampersByFilter = async (data) => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/cv/filter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};

export const getAllFocus = async () => {
  try {
    const response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/enfoque`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).json();
    return response;
  } catch (error) {
    return null;
  }
};
