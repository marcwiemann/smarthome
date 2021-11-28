import {Home} from "./../pages/home";

/*Icons */
import {MdLibraryBooks} from "react-icons/md";
import {GiOpenBook} from "react-icons/gi";
import {BiCalendarEvent} from "react-icons/bi";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {BsCalendar} from "react-icons/bs";
import {BsBook} from "react-icons/bs";
import {FiPhone} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      path: "/rooms",
      main: () => <h1>Räume</h1>,
    },
    {
      path: "/devices",
      main: () => <h2>Geräte</h2>,
    },
    {
      path: "/routines",
      main: () => <h2>Routinen</h2>,
    },
    {
      path: "/einstellungen",
      main: () => <h2>Einstellungen</h2>,
    },
    {
      path: "/profile",
      main: () => <h1>Profil</h1>,
    },

  ];
  /*Persönlicher Reiter Navigation Items */
  const persNav = [
    {
      to: "/",
      name: "Überblick",
      icon: <BsFillHouseDoorFill/>,
    },
    {
      to: "/rooms",
      name: "Räume",
      icon: <BsBook/>,
    },
    {
      to: "/devices",
      name: "Geräte",
      icon: <BiCalendarEvent/>,
    },
    {
      to: "/termine",
      name: "Termine",
      icon: <BsCalendar/>,
    },
    {
      to: "/routines",
      name: "Routinen",
      icon: <GiOpenBook/>,
    },
    {
        to: "/einstellungen",
        name: "Einstellungen",
        icon: <IoSettingsOutline/>,
      },
  ];

  export {persNav,routes};