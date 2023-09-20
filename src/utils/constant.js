import Kajian from "../assets/events/kajian_1.JPG";
import Ziarah from "../assets/events/ziarah_1.jpg";
import Pelantikan from "../assets/events/pelantikan_1.jpg";

export const MENU_BAR = ["home", "aspiration", "about us", "contact us"];

export const SOCIAL_MEDIA = [
  {
    name: "instagram",
    link: "https://instagram.com/januramadhan_",
  },
  {
    name: "facebook",
    link: "https://instagram.com/januramadhan_",
  },
  {
    name: "twitter",
    link: "https://instagram.com/januramadhan_",
  },
];

export const EVENTS = [
  {
    title: "Kajian Rutin",
    section: "Discussion",
    photo: [Kajian],
  },
  {
    title: "Ziarah",
    section: "Religion",
    photo: [Ziarah, Kajian, Ziarah],
    description:
      "Ziarah is a routine agenda held by HMPAFI. These activities are under the auspices of the Social and Religious Divisions. This agenda is carried out once a month by visiting the graves of the guardians located around the city of Surabaya, and is free for anyone who wants to join, regardless of HMPAFI members or students from other faculties. Apart from being intended as an effort to commemorate the services of the saints, this agenda is also intended as a reminder that every human being will eventually experience death. So with this reminder, it is hoped that it will be more useful for the wider community in the future.",
  },
  {
    title: "Pelantikan",
    section: "Inauguration",
    photo: [Pelantikan],
  },
];
