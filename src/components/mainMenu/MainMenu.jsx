import { search, store, events, video, reel } from "/src/assets/images/icons";
import "./MainMenu.scss";
import { NavLink } from "react-router-dom";

export default function MainMenu({ mainMenuLabels, header }) {
  // const mainMenuLabels = [
  //   { name: "search", icon: search },
  //   { name: "store", icon: store },
  //   { name: "events", icon: events },
  //   { name: "video", icon: video },
  //   { name: "reel", icon: reel },
  // ];
  return (
    <aside className="mainMenu">
      <div className="mainMenu__All">
        {header && <div className="mainMenu__header">{header}</div>}
        <ul className="mainMenu__List">
          {mainMenuLabels.map((tap, index) => (
            <li key={index} role="button">
              <NavLink to={`/${tap.link}`}>
                <img src={tap.icon} alt="" />
                <p>{tap.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
