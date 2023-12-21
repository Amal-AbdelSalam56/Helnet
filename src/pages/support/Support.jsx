import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function Support() {
  const [t, i18n] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const inputsSelect = [
    {
      name: "اكتب رسالتك ثم ارسلها للدعم الفني",
      type: "textarea",
      state: "message",
    },
  ];
  const handleButtonClick = () => {
    console.log(formValues);
  };
  return (
    <div className="inputSelect">
      <FormSelect inputs={inputsSelect} setFormValues={setFormValues} />
      <Button name={t("Send")} onClick={handleButtonClick} />
    </div>
  );
}

export default Support;
