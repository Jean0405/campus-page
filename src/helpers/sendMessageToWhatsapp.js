export const redirectToWhatsApp = (visitorTel, message) => {
  const phoneNumber = visitorTel;

  // Format whatsapp number
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const whatsappUrl = `https://api.whatsapp.com/send?phone=57${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp on a new window
  const whatsappWindow = window.open(whatsappUrl, "_blank");
  return;
};
