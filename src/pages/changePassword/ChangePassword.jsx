import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function ChangePassword() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});

  const inputsSelect = [
    { name: t("Old Password"), type: "password", state: "oldPassword" },
    { name: t("New Password"), type: "password", state: "newPassword" },
    { name: t("Confirm Password"), type: "password", state: "confirmPassword" },
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

export default ChangePassword;
