import {
  friends,
  store,
  storeColored,
  reel,
  reelColored,
  video,
  videoColored,
  buy,
  asking,
  easy,
  home,
  homeColored,
  settings,
  globe,
  menu,
  profile1,
  favicon,
  pen,
  info,
  logout,
  support,
  language,
  art,
  mobilephone,
  eye,
} from "/src/assets/images/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { t } from "i18next";
import "./Navbar.scss";

export default function Navbar() {
  const name = window.location.pathname.split("/")[1];
  const mainNavbarList = [
    { name: t("Home"), icon: home, coloredIcon: homeColored, link: "home" },
    { name: t("video"), icon: video, coloredIcon: videoColored, link: "video" },
    { name: t("Reel"), icon: reel, coloredIcon: reelColored, link: "reel" },
    { name: t("Store"), icon: store, coloredIcon: storeColored, link: "store" },
    {
      name: t("friends"),
      icon: friends,
      coloredIcon: friends,
      link: "friends",
    },
  ];
  const mainMenuLabels = [
    { name: t("Update Information"), icon: pen, link: "settings/update-info" },
    { name: t("My Information"), icon: info, link: "settings/user-info" },
    {
      name: t("Edit Password"),
      icon: eye,
      link: "settings/change-pass",
    },
    { name: t("Privacy"), icon: mobilephone, link: "settings/privacy" },
    { name: t("Language"), icon: language, link: "settings/language" },
    { name: t("Color"), icon: art, link: "settings/art" },
    { name: t("Support"), icon: support, link: "settings/support" },
    { name: t("Logout"), icon: logout, link: "login" },
  ];
  const mainMenuLabelsStore = [
    { name: t("Buy"), icon: buy, link: "store/buy" },
    { name: t("Used"), icon: easy, link: "store/used" },
    { name: t("Product display"), icon: asking, link: "store/display" },
  ];

  const userOptionsList = [
    // { name: t("Ebrahim mohamed"), icon: profile1, link: "profile1" },
    // { name: t("Globe"), icon: globe, link: "globe" },
    // { name: "settings/", icon: settings, link: "settings/update-user" },
    { name: t("Settings"), icon: settings, link: "settings/update-user" },
  ];
  const userOptionsListComputer = [
    { name: t("Ebrahim mohamed"), icon: profile1, link: "profile1" },
    { name: t("Globe"), icon: globe, link: "globe" },
    // { name: "settings/", icon: settings, link: "settings/update-user" },
    { name: t("Settings"), icon: settings, link: "settings/update-user" },
  ];

  const navigate = useNavigate();

  const location = useLocation();

  const getCurrentLocationName = () => {
    const currentPath = location.pathname.substring(1);
    return currentPath === "" ? "home" : currentPath;
  };

  const currentPath = getCurrentLocationName();

  const notifications = [
    1, 2, 3, 4, 5,
    // 6, 7, 8, 9
    6, 7, 8, 9, 10,
  ];

  const [isOpened, setIsOpened] = useState(false);

  const direction = localStorage.getItem("direction");

  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current.contains(e.target)) {
        // inside click
        return;
      } else {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuRef]);

  return (
    <nav className={`navbar ${direction} fixed w-100`}>
      <Link className="navbar__logo" to={"/"}>
        <img src={favicon} alt="Helnet logo" />
      </Link>
      <ul className="navbar__list navigation">
        {mainNavbarList.map((tap, index) => (
          <li
            key={index}
            role="button"
            onClick={() => {
              navigate(`/${tap.link}`);
            }}
          >
            {currentPath === tap.name ? (
              <img src={tap.coloredIcon} alt="" />
            ) : (
              <img src={tap.icon} alt="" />
            )}
          </li>
        ))}
      </ul>
      <ul className="navbar__list userOptions">
        <li className="tapButton">
          <img
            src={menu}
            alt=""
            role="button"
            className="utilityButton"
            onClick={() => setIsOpened(!isOpened)}
          />
        </li>
        {userOptionsListComputer.map((tap, index) => (
          <li
            key={index}
            role="button"
            // className={tap.name}
            onClick={() => {
              navigate(`/${tap.link}`);
            }}
          >
            <img src={tap.icon} alt="" />

            {tap.name === "globe" && notifications.length > 0 && (
              <div className="notifications">
                <p>
                  {notifications.length > 9 ? (
                    "9+"
                  ) : (
                    <>{notifications.length}</>
                  )}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar__list mobileButton">
        <div>
          {[...userOptionsList, ...mainMenuLabels, ...mainNavbarList].map(
            (f, index) => (
              <div key={index}>{f.link == currentPath && f.name}</div>
            )
          )}
        </div>
        <img
          src={menu}
          alt=""
          role="button"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      <ul
        ref={menuRef}
        className={`navbar__list mobileMenu p-0 py-4  d-grid  ${isOpened} ${direction} `}
        style={{
          overflowY: "scroll",
          height: "100vh",
          boxShadow: "0px 1px 7px 0px #3D5B5945",
          transition: ".4s",
        }}
      >
        <Link className="p-3 justify-content-end">
          <img src={favicon} alt="Helnet logo" />
        </Link>

        {[...mainNavbarList, ...userOptionsList].map((tap, index) => (
          <li
            key={index}
            role="button"
            className="p-3"
            onClick={() => {
              setIsOpened(false);
              navigate(`/${tap.link}`);
            }}
          >
            <img src={tap.icon} alt="" style={{ width: "30px" }} />
            <p>{t(tap.name)}</p>
          </li>
        ))}
        {name === "settings" &&
          mainMenuLabels.map((tap, index) => (
            <li
              className="p-3"
              key={index}
              role="button"
              onClick={() => {
                setIsOpened(false);
                navigate(`/${tap.link}`);
              }}
            >
              <img src={tap.icon} alt="" />
              <p>{t(tap.name)}</p>
            </li>
          ))}
        {name === "store" &&
          mainMenuLabelsStore.map((tap, index) => (
            <li
              className="p-3"
              key={index}
              role="button"
              onClick={() => {
                setIsOpened(false);
                navigate(`/${tap.link}`);
              }}
            >
              <img src={tap.icon} alt="" />
              <p>{t(tap.name)}</p>
            </li>
          ))}
      </ul>
    </nav>
  );
}
