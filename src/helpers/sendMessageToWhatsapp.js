export const redirectToWhatsApp = (visitor) => {
  const phoneNumber = visitor.tel;
  const defaultMessage = `Hola, ¿cómo estás ${visitor.nombre}? Tu visita ha sido asignada para el día ${visitor.fecha_visita} 😊`;

  // Format whatsapp number
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const whatsappUrl = `https://api.whatsapp.com/send?phone=57${formattedPhoneNumber}&text=${encodeURIComponent(
    defaultMessage
  )}`;

  // Open WhatsApp on a new window
  const whatsappWindow = window.open(whatsappUrl, "_blank");
};
