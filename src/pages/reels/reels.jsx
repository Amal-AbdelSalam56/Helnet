import home from "../../assets/images/home.png";
import graduation from "../../assets/images/graduation.png";
import freelance from "../../assets/images/freelance.png";
import cake from "../../assets/images/cake.png";
import link from "../../assets/images/link.png";
import Rectangle from "../../assets/images/Rectangle.png";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import sea from "../../assets/videos/sea.mp4";
import { Fragment } from "react";
import xicon from "../../assets/images/xicon.png";
import Left from "../../assets/images/Left.png";
import right from "../../assets/images/right.png";
import BoxReelComponents from "../../components/boxReelComponents/boxReelComponents";
import FiltersBar from "../../components/ui/filtersBar/FiltersBar";

const Reels = () => {
  // function classNames(...classes) {
  //     return classes.filter(Boolean).join(' ')
  // }

  // let [categories] = useState({
  //     Recent: [
  //         {
  //             id: 1,
  //             title: 'Does drinking coffee make you smarter?',
  //             date: '5h ago',
  //             commentCount: 5,
  //             shareCount: 2,
  //         },
  //         {
  //             id: 2,
  //             title: "So you've bought coffee... now what?",
  //             date: '2h ago',
  //             commentCount: 3,
  //             shareCount: 2,
  //         },
  //     ],
  //     Popular: [
  //         {
  //             id: 1,
  //             title: 'Is tech making coffee better or worse?',
  //             date: 'Jan 7',
  //             commentCount: 29,
  //             shareCount: 16,
  //         },
  //         {
  //             id: 2,
  //             title: 'The most innovative things happening in coffee',
  //             date: 'Mar 19',
  //             commentCount: 24,
  //             shareCount: 12,
  //         },
  //     ],
  //     Trending: [
  //         {
  //             id: 1,
  //             title: 'Ask Me Anything: 10 answers to your questions about coffee',
  //             date: '2d ago',
  //             commentCount: 9,
  //             shareCount: 5,
  //         },
  //         {
  //             id: 2,
  //             title: "The worst advice we've ever heard about coffee",
  //             date: '4d ago',
  //             commentCount: 1,
  //             shareCount: 2,
  //         },
  //     ],
  // })

  const mainMenuLabels = [
    { name: "من المنصورة", icon: home },
    { name: "درس في جامعة المنصورة ", icon: graduation },
    { name: "يعمل في شركة مصر ", icon: freelance },
    { name: "ولد 12 سبتمبر 2002 ", icon: cake },
    { name: " انضم في مارس 2020 ", icon: link },
  ];

  const addresses = [
    { name: "الكل" },
    { name: "العاب" },
    { name: "نادى برشلونة" },
    { name: "متنوع" },
    { name: "موسيقى" },
    { name: "تصميم واجهة مستخدم" },
    { name: "اتحاد الكرة" },
    { name: "شركة سامسونج " },
    { name: "الان" },
    // { name: "موسيقى" },
  ];

  const videos = [
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
    { src: sea },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // const handleCloseModal = () => {
  //     setSelectedVideo(null);
  // };

  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  // مراجعة سطر 225

  return (
    <>
      <div className="bg-white rounded-xl">
        <FiltersBar />
        <div className="reelsComponents ">
          {/* sidebar */}
          {videos.map((video, index) => (
            <BoxReelComponents video={video} index={index} />
          ))}
          {/* <div
        className="profile-card2 myside"
        style={{ textAlign: "right", width: "100%" }}
      >
        <ul className="" style={{ display: "flex" }}>
          {addresses.map((address, index) => (
            <li key={index} role="button">
              <button
                type="submit"
                className="btn btn-dark font-weight-bold reelbutton"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "600",
                  height: "25px",
                  border: "1PX solid #c7c2c2",
                  color: "black",
                  lineHeight: "normal",
                  marginLeft: "10px",
                }}
              >
                {address.name}
              </button>
            </li>
          ))}
        </ul>
      </div> */}

          {/* <style>
          {`
                 @media (max-width: 800px) {
                  
                  li {
                    flex-flow: wrap;
                  }
                  .par {
                     margin-left: 0px!important; 
                  }
                }

                @media (max-width: 800px) {
                  .myside {
                    width:92%!important;
                  }
                  }
                 `}
        </style> */}
        </div>
      </div>
    </>
  );
};

export default Reels;
