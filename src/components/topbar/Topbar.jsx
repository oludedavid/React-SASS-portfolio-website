import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar(props) {
  return (
    <div className={"top " + (props.menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            olude.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49 176 2017 6480</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>odavidolumide@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.setMenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
