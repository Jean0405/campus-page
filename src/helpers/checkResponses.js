export const checkResponseStatus = (response, status) => {
  if (response) {
    if (response.status === status) {
      return response;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
