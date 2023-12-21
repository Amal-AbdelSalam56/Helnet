import { t } from "i18next";
import { useParams } from "react-router-dom";
import { Aside, MainMenu, Navbar, Posts } from "/src/components";
import { CreatePost, FiltersBar } from "../../components/ui";
import {
  asking,
  easy,
  buy,
  news,
  personal,
  easytouse,
} from "../../assets/images/icons";
import { storeData } from "../../../public/fakeData";
import Buy from "./buy/Buy";
import "./Store.scss";
import { useEffect, useState } from "react";
import StoreForm from "../../components/form/Form";

function Store() {
  const direction = localStorage.getItem("direction");

  const name = useParams().name;

  const mainMenuLabels = [
    { name: t("new"), icon: buy, link: "store/new" },
    { name: t("used"), icon: easy, link: "store/used" },
    { name: t("services"), icon: asking, link: "store/services" },
  ];

  const [newList, setNewList] = useState([]);
  const [usedList, setUsedList] = useState([]);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    const filteredNewList = storeData.filter((item) => item.category === "new");
    setNewList(filteredNewList);

    const filteredUsedList = storeData.filter(
      (item) => item.category === "used"
    );
    setUsedList(filteredUsedList);

    const filteredServicesList = storeData.filter(
      (item) => item.category === "service"
    );
    setServicesList(filteredServicesList);
  }, []);

  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="  container no-scrollbar">
          <div className="2xl:w-4/5  rounded-xl w-full">
            <CreatePost
              placeholder={"Request a service or offer your product now"}
              buttons={[
                {
                  value: "Show the new product",
                  title: "Show the new product",
                  image: news,
                },
                {
                  value: "View a used product",
                  title: "View a used product",
                  image: easytouse,
                },
                {
                  value: "Service Request",
                  title: "Service Request",
                  image: personal,
                },
              ]}
            />

            {name === "services" ? (
              <>
                <FiltersBar />
                <Posts data={servicesList} />
              </>
            ) : name == "used" ? (
              <>
                <FiltersBar />
                <Posts data={usedList} />
              </>
            ) : (
              <div
                className="bg-white p-2 mt-4"
                style={{ borderRadius: "1rem" }}
              >
                <FiltersBar />
                <Buy />
              </div>
            )}
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Store;
