import { Button } from "/src/components/ui";
import { adImage, Polygon } from "/src/assets/images";
import { profile1, plus } from "/src/assets/images/icons";
import { Link } from "react-router-dom";
import i18next, { t } from "i18next";
import "./Aside.scss";

export default function Aside() {
  const users = [
    { name: "أحمد يس", job: "مدير تنفيذي", image: profile1 },
    { name: "ريان أحمد", job: "مبرمج", image: profile1 },
    { name: "حسن محمد", job: "مهندس مدني", image: profile1 },
  ];

  const titles = [
    "money",
    "work",
    "commerce",
    "digital",
    "designs",
    "beauty",
    "user experience",
    "medicine",
    "independent",
  ];

  /////////////////////////developing only////////////////////////////
  const lang = localStorage.getItem("i18nextLng");
  const direction = localStorage.getItem("direction");

  const handelLang = () => {
    if (lang === "en") {
      return "ar";
    } else return "en";
  };
  const handelDirection = () => {
    if (direction === "ltr") {
      return "rtl";
    } else return "ltr";
  };
  /////////////////////////developing only////////////////////////////

  const dir = localStorage.getItem("direction");

  return (
    <aside className={`aside ${dir} no-scrollbar overflow-y-scroll`}>
      {/* <div className="devOnly">
        <Button
          className="w-fit"
          children={<p>{t("changeLang(developingOnly)")}</p>}
          onClick={() => {
            i18next.changeLanguage(handelLang());
            localStorage.setItem("direction", handelDirection());
          }}
        />
      </div> */}
      <div className="aside__section ad">
        <h4>{t("This site is completely free for six months")}</h4>
        <p>{"--" + t("Subscription fee is 0 pounds")}</p>
        <Button children={t("Try for free")} />
        <img src={adImage} alt="" />
        <img className="polygon" src={Polygon} alt="" />
      </div>
      <div className="aside__section recommend">
        <h4 className="mb-3">{t("people you may know") + ":"}</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <div className="d-flex gap-2 w-100">
                <img src={user.image} alt="" />
                <div>
                  <p>{user.name}</p>
                  <p
                    className="fs-14 text-gray"
                    style={{ fontSize: "14px", color: "gray" }}
                  >
                    {user.job}
                  </p>
                </div>
              </div>
              <Button
                children={t("add")}
                backgroundColor={"#fff"}
                color={"#A74ED1"}
                border={"1px"}
              />
            </li>
          ))}
          <Link>{t("all")}</Link>
        </ul>
      </div>
      <div className="aside__section tags">
        <div className="tagsHeader">
          <p>{t("followed-up titles") + ":"}</p>
          <img src={plus} alt="" role="button" />
        </div>

        <div className="tagsBody">
          {titles.map((title, index) => (
            <p key={index}>
              <span>#</span>
              {t(title)}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}
