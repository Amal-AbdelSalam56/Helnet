import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function Privacy() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});

  const inputsSelect = [
    {
      name: t("Account Privacy"),
      type: "select",
      select: ["Public", "Private"],
      state: "accountPrivacy",
    },
    {
      name: t("Who can see Your Posts"),
      type: "select",
      state: "accountPosts",
    },
    {
      name: t("Who can see my personal information?"),
      type: "select",
      state: "privacyInformation",
    },
  ];
  const handleButtonClick = () => {
    console.log(formValues);
  };
  return (
    <div className="inputSelect">
      <FormSelect inputs={inputsSelect} setFormValues={setFormValues} />
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default Privacy;
