
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

const Menu = () => {
  return (
    <div className="menu-comp">
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

      <h5>TASKS</h5>
      <ul className="menu-tasks">
        <li>
          <FontAwesomeIcon icon={faAnglesRight} /> Upcoming{" "}
          <div className="count-square">12</div>
        </li>
        <li>
          <FontAwesomeIcon icon={faListCheck} /> Today{" "}
          <div className="count-square">5</div>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDays} /> Calendar{" "}
          <div className="count-square"></div>
        </li>
        <li>
          <FontAwesomeIcon icon={faNoteSticky} /> Sticky Wall{" "}
          <div className="count-square"></div>
        </li>
      </ul>

      <h5>LISTS</h5>
      <ul className="menu-lists">
        <li>
          <div className="list-square"></div>Personal{" "}
          <div className="count-square">3</div>
        </li>
        <li>
          <div className="list-square"></div>Work{" "}
          <div className="count-square">6</div>
        </li>
        <li>
          <div className="list-square"></div>Personal{" "}
          <div className="count-square">3</div>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlus} /> Add New List
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
