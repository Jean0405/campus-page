export const getVisits = async () => {
  let response = await (
    await fetch(`http://192.168.110.106:5017/cv`, {
      method: "GET",
    })
  ).json();
  return response;
};
