import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import { Select } from "../../components/ui";
import { verify } from "../../assets/images/icons";

function Art() {
  const [t, i18n] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const inputsSelect = [
    {
      name: t("Color"),
      type: "select",
      select: ["red", "blue"],
      state: "color",
    },
  ];

  const handleButtonClick = () => {
    console.log(formValues);
  };

  const selectLabels = ["Red", "Blue", "Purple", "Heavenly", "Black", "orange"];
  const labelsImages = [verify, verify, verify, verify, verify, verify];

  return (
    <div className="inputSelect">
      {/* <FormSelect inputs={inputsSelect} setFormValues={setFormValues} /> */}
      <div className="mb-20">
        <Select
          className="flex flex-row-reverse justify-between items-center w-full px-3 border rounded-lg h-fit py-2 "
          selectLabels={selectLabels}
          hasIndictor={true}
          selectName={t("Color")}
          withImage={true}
          showSelectedImage={false}
          images={labelsImages}
          isJustifyBetween={false}
        />
      </div>
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default Art;
