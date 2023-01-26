import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import moment from "moment/moment";

function Header() {
  return (
    <>
      <header>
        <div>
          <h1>My Todo</h1>
          <small>{moment().format("dddd, MMMM Do")}</small>
        </div>
        <div className="create">
          <a href="#todo">
            <FontAwesomeIcon icon={faPenToSquare} size={"2xl"} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
