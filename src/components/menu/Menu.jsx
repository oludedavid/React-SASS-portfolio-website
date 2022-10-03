import "./Menu.scss";
import {
  Home,
  BusinessCenter,
  Contacts,
  Work,
  WbSunny,
} from "@material-ui/icons";
export default function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={() => props.setMenuOpen(false)}>
          <Home className="iconLogo" />
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <BusinessCenter className="iconLogo" />
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <Work className="iconLogo" />
          <a href="#work">Work</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <WbSunny className="iconLogo" />
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <Contacts className="iconLogo" />
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
