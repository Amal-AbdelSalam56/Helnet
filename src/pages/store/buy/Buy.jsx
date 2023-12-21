import React from "react";
import CardStore from "../../../components/cardStore/CardStore";
import { Image1 } from "/src/assets/images/icons";

function Buy() {
  const products = [
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 3,
      price: "70$",
    },
    {
      name: "مستعمل",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "عرض منتج",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      <CardStore products={products} />
    </div>
  );
}

export default Buy;
