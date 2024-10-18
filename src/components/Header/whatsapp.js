import React from "react";
import Image from "next/image";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
      }}
    >
      <Image
        src="/whatsapp-icon.svg" // Add an appropriate WhatsApp icon image in the public folder
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </a>
  );
};

export default WhatsAppButton;
