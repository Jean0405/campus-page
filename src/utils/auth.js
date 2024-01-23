export const login = async (user) => {
  const response = await (
    await fetch(
      `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
  ).json();
  return response;
};

export const getUserByToken = async (token) => {
  if (token) {
    let response = await (
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/dataToken`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      )
    ).json();
    return response;
  } else {
    return null;
  }
};
