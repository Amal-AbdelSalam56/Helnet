import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./i18n";
import Codecheck from "./pages/codecheck/codecheck";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Forgetpass from "./pages/forgetpass/forgetpass";
import Resetpass from "./pages/resetpass/resetpass";
import UserKind from "./pages/userKind/userKind";
import Doctor from "./pages/doctor/doctor";
import Jobs from "./pages/jobs/jobs";
import { MainPage } from "./pages";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/Settings";
import Store from "./pages/store/Store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReelsPage from "./pages/reels/reelsPage/ReelsPage";
import SingleVideo from "./components/singleVideo/SingleVideo";
import { Navbar } from "./components";

import "./App.scss"; /* eslint-disable react/no-children-prop */
import SingleProduct from "./pages/singleProduct/SingleProduct";

function App() {
  const [t,i18n] = useTranslation();
  // const [isVisibleNavbar, setIsVisibleNavbar] = useState(true);
  // const location = useLocation();
  // const pagesWithoutNavbar = ["/login", "register", "forget-pass"];

  useEffect(() => {
    console.log(i18n.language);
    if (i18n.language === "ar") {
      localStorage.setItem("direction", "rtl");
      document.body.classList.remove("en");
    } else {
      localStorage.setItem("direction", "ltr");
      document.body.classList.add("en");
    }
  }, []);

  // useEffect(() => {
  //   if (pagesWithoutNavbar.includes(location.pathname)) {
  //     setIsVisibleNavbar(false);
  //   } else setIsVisibleNavbar(true);
  // }, [location.pathname, setIsVisibleNavbar]);

  return (
    <BrowserRouter>
      {/* {isVisibleNavbar && <Navbar />} */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forget-pass" element={<Forgetpass />} />
        <Route path="/check-code" element={<Codecheck />} />
        <Route path="/reset-pass" element={<Resetpass />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/user-kind" element={<UserKind />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="/reels-page" element={<ReelsPage />} />
        <Route path="/:allroute" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/settings/:name" element={<Settings />} />
        <Route path="/store/:name" element={<Store />} />
        <Route path="/store" element={<Store />} />

        <Route path="/singleVideo" element={<SingleVideo />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
