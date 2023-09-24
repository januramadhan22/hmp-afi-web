// import Kajian from "../assets/events/kajian_1.JPG";
import Z_1 from "../assets/events/ZIARAH/ziarah_1.jpg";
// import Pelantikan from "../assets/events/pelantikan_1.jpg";
import US_1 from "../assets/events/PENGEMBANGAN KOMPETENSI MAHASISWA/IMG_5955.JPG";
import US_2 from "../assets/events/PENGEMBANGAN KOMPETENSI MAHASISWA/IMG_5971.JPG";
import US_3 from "../assets/events/PENGEMBANGAN KOMPETENSI MAHASISWA/IMG_5974.JPG";

import ZS_1 from "../assets/events/ZAKAT DAN SANTUNAN ANAK YATIM/IMG_1147.JPG";

import OJ_1 from "../assets/events/ORIENTASI JURUSAN (OSJUR)/IMG_4769.JPG";
import OJ_2 from "../assets/events/ORIENTASI JURUSAN (OSJUR)/IMG_4881.JPG";
import OJ_3 from "../assets/events/ORIENTASI JURUSAN (OSJUR)/IMG_4943.JPG";

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
    photo: [],
  },
  {
    title: "Ziarah",
    section: "Religion",
    photo: [Z_1],
    description:
      "Ziarah is a routine agenda held by HMPAFI. These activities are under the auspices of the Social and Religious Divisions. This agenda is carried out once a month by visiting the graves of the guardians located around the city of Surabaya, and is free for anyone who wants to join, regardless of HMPAFI members or students from other faculties. Apart from being intended as an effort to commemorate the services of the saints, this agenda is also intended as a reminder that every human being will eventually experience death. So with this reminder, it is hoped that it will be more useful for the wider community in the future.",
  },
  {
    title: "Pelantikan",
    section: "Inauguration",
    photo: [],
  },
  {
    title: "Orientasi Jurusan",
    section: "Student Affairs",
    photo: [OJ_1, OJ_2, OJ_3],
  },
  { title: "Zakat & Santunan", section: "Social Awareness", photo: [ZS_1] },
  {
    title: "Upgrading Skills",
    section: "Interest & Talent",
    photo: [US_1, US_2, US_3],
  },
];
