import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function Language() {
  const [t, i18n] = useTranslation();
  const [formValues, setFormValues] = useState({});

  const inputsSelect = [
    {
      name: t("Language"),
      state: "lang",
      type: "select",
      select: [t("Arabic"), t("English")],
    },
  ];
  const handleButtonClick = () => {
    console.log(formValues);
    if (formValues.lang === "English" || formValues.lang == "إنجليزي") {
      i18n.changeLanguage("en");
      document.body.classList.add("en");
      localStorage.setItem("lang", "en");
      localStorage.setItem("direction",'ltr');
    } else {
      i18n.changeLanguage("ar");
      document.body.classList.remove("en");
      localStorage.setItem("lang", "ar");
      localStorage.setItem("direction", "rtl");

    }
  };
  return (
    <div className="inputSelect">
      <FormSelect
        inputs={inputsSelect}
        name={t("Save modifications")}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default Language;
