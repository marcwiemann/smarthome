import {NavLink } from "react-router-dom";
import {persNav} from "./../list/routing-list";
import {SiHomeassistant} from "react-icons/si";
//Sidebar Komponente -> Routing zwischen verschieden Seiten wird hier durchgefuehrt
export const Sidebar = ({showResponsiveNavigation}) =>  {
    return (
        <div className={`nav ${showResponsiveNavigation}`}>
          
          <SiHomeassistant className="sideBarLogoIcon"/>
          <div className="navDiv">
            <h3>Persönliches</h3>
            {persNav.map((navItem, index) => (
              <NavLink exact activeStyle={{color: 'var(--fomgruen)', fontWeight:"bold"}} to={navItem.to} key={index}>{navItem.icon} {navItem.name} </NavLink>
            ))}
          </div>
        </div>
    );
  }