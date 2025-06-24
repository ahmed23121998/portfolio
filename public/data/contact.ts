import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "ahmedkhaledkhalef.job@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+20 111 298 5769",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+20 111 298 5769",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "https://github.com/ahmed23121998?tab=repositories",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/ahmed-khaled-khalf/",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "https://www.facebook.com/ahmd.khald.khlf.91756/",
  },

];
