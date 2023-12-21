import { useState } from "react";
import { t } from "i18next";
import { Navbar } from "../../components";
import { ImageSlider, Select } from "../../components/ui";
import {
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
} from "../../assets/images";
import {
  Star,
  arrowDown,
  grayStar,
  whatsapp,
} from "../../assets/images/icons";

export default function SingleProduct({ product }) {
  product = {
    product_id: "1",
    name: "لاب توب ماركة أبل يحتوي على   (13-inch, 8GB RAM, 256GB SSD Storage) ",
    rate: "94",
    isAvailable: true,
    module: "A264671",
    category: "electronics",
    brand: "apple",
    price: 1999,
    newPrice: 1699,
    sizes: ["14 inch displayScreen screen"],
    colors: ["#E0E1E1", "#B1B5B8"],
    storageType: ["SSD"],
    ram: [16, 8],
    images: [
      testImage1,
      testImage2,
      testImage3,
      testImage4,
      testImage5,
      testImage6,
    ],
  };

  const direction = localStorage.getItem("direction");
  const [currentColor, setCurrentColor] = useState(0);

  return (
    <div dir={direction} className="pt-24">
      <Navbar />
      <div className="container rounded-xl bg-white  py-4 text-lg">
        <button className="h-fit">
          <img className="-rotate-90 p-2" src={arrowDown} alt="" />
        </button>

        <div className="grid my-6 lg:grid-cols-2 gap-5 items-center justify-between">
          <div className="">
            <div className="grid gap-3 px-5 py-2">
              <div className="flex">
                <p>
                  {"("}
                  {product.rate / 20}
                  {")"}
                </p>
                <ul className="flex p-2">
                  {[20, 40, 60, 80, 95].map((threshold, index) => (
                    <li key={index}>
                      <img
                        src={product.rate > threshold ? Star : grayStar}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <p>{product.name}</p>

              <div className="sm:grid sm:grid-cols-2">
                <p>
                  {t("Availability")} {": "}
                  <span
                    className={
                      product.isAvailable ? "text-green-500" : "text-red-500"
                    }
                  >
                    {product.isAvailable ? t("Available") : t("not Available")}
                  </span>
                </p>

                <p>{t("Model") + ":" + t(product.module)}</p>
              </div>

              <div className="sm:grid sm:grid-cols-2">
                <p>{t("category") + ":" + t(product.category)}</p>

                <p>{t("Brand") + ":" + t(product.brand)}</p>
              </div>
            </div>

            <hr />

            <div className="grid gap-3 px-5 py-2">
              {product.newPrice === 0 ? (
                <p>{product.price}</p>
              ) : (
                <p className="text-violet-600 text-lg">
                  ${product.newPrice}
                  <span className="text-xs text-black p-1 line-through">
                    ${product.price}
                  </span>
                </p>
              )}

              <div className="grid xl:grid-cols-2 w-full items-center gap-4">
                <Select
                  selectLabels={product.sizes}
                  className="flex rounded h-fit w-full p-2 border items-center"
                  hasIndictor={true}
                  selectName={t("size")}
                />
                <div>
                  <p>{t("Color")}</p>
                  <div>
                    {product.colors && (
                      <div className="flex gap-2">
                        {product.colors.map((color, index) => (
                          <>
                            <input
                              type="radio"
                              name="colors"
                              id={"productColor" + index}
                              value={color}
                              className="hidden"
                              onClick={() => {
                                setCurrentColor(index);
                              }}
                            />
                            <label
                              className={`h-10 w-10 rounded-full ${
                                currentColor === index &&
                                "outline outline-violet-500"
                              }`}
                              htmlFor={"productColor" + index}
                              style={{
                                backgroundColor: color,
                              }}
                            ></label>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Select
                  selectLabels={product.storageType}
                  className="flex rounded h-fit w-full p-2 border items-center"
                  hasIndictor={true}
                  selectName={t("storage")}
                />
                <Select
                  selectLabels={product.ram}
                  className="flex rounded h-fit w-full p-2 border items-center"
                  hasIndictor={true}
                  selectName={t("ram")}
                />

                <button className="flex outline outline-1 outline-green-500  text-green-600 w-fit h-fit py-2 items-center gap-2 px-2">
                  <p>{t("contact now")}</p>
                  <img className="w-7" src={whatsapp} alt="" />
                </button>
              </div>
            </div>
          </div>

          <ImageSlider images={product.images} />
        </div>
      </div>
    </div>
  );
}
