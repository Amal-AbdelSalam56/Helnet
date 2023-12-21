import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import {
  search,
  store,
  events,
  video,
  reel,
  friend,
} from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Reels from "../reels/reels";
import Settings from "../settings/Settings";
import Notifcations from "../notifcations/Notifcations";
import Videos from "../videos/Videos";
import { data } from "/public/fakeData";
import { CreatePost } from "../../components/ui";
import Friends from "../Friends/Friends";
import "./MainPage.scss";

export default function MainPage() {
  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  const name = useParams().allroute;
  const mainMenuLabels = [
    { name: t("Search"), icon: search, link: "search" },
    { name: t("Store"), icon: store, link: "store/buy" },
    { name: t("Events"), icon: events, link: "event" },
    { name: t("video"), icon: video, link: "video" },
    { name: t("Reel"), icon: reel, link: "reel" },
    { name: t("Friends"), icon: friend, link: "friends" },
  ];

  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container no-scrollbar">
          {name === "home" || name === undefined ? (
            <div className="grid gap-3">
              <CreatePost />
              <Posts data={data} />
            </div>
          ) : name === "reel" ? (
            <Reels />
          ) : name === "video" ? (
            <Videos />
          ) : name === "friends" ? (
            <Friends />
          ) : name === "globe" ? (
            <Notifcations />
          ) : (
            name === "settings" && <Settings />
          )}
        </div>
        <Aside />
      </main>
    </div>
  );
}
