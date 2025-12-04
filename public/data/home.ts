import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "../assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "ahmedkhaledkhalef.job@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Cairo, Egypt",
      Link: "https://maps.app.goo.gl/G3dd9nTpreU877Kx9",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 1112985769",
      Link: "tel:+20 1112985769",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Assiut University",
      Link: "https://www.aun.edu.eg/main/ar/home",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's in Computers and Information",
      Link: "https://www.aun.edu.eg/fci/ar/home-2",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/ahmed23121998?tab=repositories",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/ahmed-khaled-khalf/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/ahmd.khald.khlf.91756/",
    },
  ],
};
