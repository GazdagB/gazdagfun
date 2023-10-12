import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faAnglesRight,
  faListCheck,
  faCalendarDays,
  faNoteSticky,
  faPlus,
  faSliders,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-comp ">
      <div className="menu-bar">
        <h5>MENU</h5>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="menu-search-bar">
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="tasks-container">
        <h5>TASKS</h5>
        <ul className="menu-tasks">
          <li>
            <div className="tasks-button">
                <FontAwesomeIcon icon={faAnglesRight} /> Upcoming{" "}
            </div>
            <div className="count-square">12</div>
          </li>
          <li className="active">
            <div className="tasks-button">
                <FontAwesomeIcon icon={faListCheck} /> Today{" "}
            </div>
            <div className="count-square-active">5</div>
          </li>
          <li>
            <div className="tasks-button">
                <FontAwesomeIcon icon={faCalendarDays} /> Calendar{" "}
            </div>
            <div className="count-square"></div>
          </li>
          <li>
            <div className="tasks-button">
                <FontAwesomeIcon icon={faNoteSticky} /> Sticky Wall{" "}
            </div>
            <div className="count-square"></div>
          </li>
        </ul>
      </div>

    <div className="lists-container">
      <h5>LISTS</h5>
      <ul className="menu-lists">
        <li>
          <div className="list-button">
              <div className="list-square red"></div>Personal{" "}
          </div>
          <div className="count-square">3</div>
        </li>
        <li>
          <div className="list-button">
              <div className="list-square blue"></div> Work{" "}
          </div>
          <div className="count-square">6</div>
        </li>
        <li>
          <div className="list-button">
              <div className="list-square yellow"></div>Personal{" "}
          </div>
          <div className="count-square">3</div>
        </li>
        <li>
          <div className="list-button">
              <FontAwesomeIcon icon={faPlus} /> Add New List
          </div>
        </li>
      </ul>

      <h5>TAGS</h5>
      <div className="tag-container">
        <div className="tag">Tag 1</div>
        <div className="tag">Tag 1</div>
        <div className="add-tag">
          <FontAwesomeIcon icon={faPlus} />
          Add tags
        </div>
      </div>
      </div>

      <div className="settings-container">
        <div className="settings">
          <FontAwesomeIcon icon={faSliders} /> Settings
        </div>
        <div className="signout">
          <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
        </div>
      </div>
    </div>
  );
};

export default Menu;
