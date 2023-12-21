import React from "react";
import BoxStore from "../../../components/boxStore/BoxStore";
import { news } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import Posts from "../../../components/posts/Posts";
import { easytouse, personal } from "../../../assets/images/icons";
import {
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
} from "../../../assets/images";
import { testVideo } from "../../../assets/videos";
function ProductDisplay() {
  const [t] = useTranslation();

  const buttons = [
    {
      name: t("Show the new product"),
      icon: news,
      inputs: [
        {
          name: t("Product Name"),
          type: "text",
          state: "pName",
        },
        {
          name: t("Product Type"),
          type: "text",
          state: "sType",
        },
        {
          name: t("Price"),
          type: "text",
          state: "sName",
        },
        { name: t("Quantity"), type: "text", state: "Details" },
        { name: t("Product condition"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
    {
      name: t("View a used product"),
      icon: easytouse,
      inputs: [
        {
          name: t("Product Name"),
          type: "text",
          state: "pName",
        },
        {
          name: t("Product Type"),
          type: "text",
          state: "sType",
        },
        {
          name: t("Price"),
          type: "text",
          state: "sName",
        },
        { name: t("Quantity"), type: "text", state: "Details" },
        { name: t("Product condition"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
    {
      name: t("Service Request"),
      icon: personal,
      inputs: [
        {
          name: t("Service name"),
          type: "text",
          state: "sName",
        },
        { name: t("Details"), type: "textarea", state: "Details" },
        { name: t("Suggested price"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
  ];
  const data = [
    {
      post_id: "1",
      post_data: {
        post_time: "",

        post_images: [],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },

    {
      post_id: "2",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [],
        post_video: testVideo,
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },

    {
      post_id: "3",
      post_data: {
        post_time: "",

        post_images: [],
        post_video: testVideo,
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },

    {
      post_id: "4",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },

    {
      post_id: "5",
      post_data: {
        post_time: "",

        post_images: [testImage1],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },

    {
      post_id: "6",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "7",
      post_data: {
        post_time: "",

        post_images: [testImage1, testImage2],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "8",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2, testImage3],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "9",
      post_data: {
        post_time: "",

        post_images: [testImage1, testImage2, testImage3],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "10",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2, testImage3, testImage4],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "11",
      post_data: {
        post_time: "",

        post_images: [testImage1, testImage2, testImage3, testImage4],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "12",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "13",
      post_data: {
        post_time: "",

        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "14",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
          testImage6,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
    {
      post_id: "15",
      post_data: {
        post_time: "",

        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
          testImage6,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
      category: {
        title: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص",
        desc: "محتاج عربية نيسان للإيجار اليومي بسائق مخصوص محتاج عربية نيسان للإيجار اليومي بسائق مخصوص ",
        price: "1000 جنيه يوميا",
        contact: "0114789563",
      },
    },
  ];
  // console.log(data);
  return (
    <div className="d-flex flex-column gap-4">
      {/* <BoxStore buttons={buttons} /> */}
      <Posts data={data} />
    </div>
  );
}

export default ProductDisplay;
