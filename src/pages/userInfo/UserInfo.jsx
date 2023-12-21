import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function UserInfo() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});

  const inputsSelect = [
    { name: t("Where are you from?"), type: "select", state: "from" },
    { name: t("where do you study?"), type: "select", state: "study" },
    { name: t("Where do you work?"), type: "text", state: "work" },
    { name: t("When were you born?"), type: "date", state: "born" },
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

export default UserInfo;
