import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function UpdateInfo() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});

  const inputsSelect = [
    { name: t("First name"), type: "text", class: "half", state: "fName" },
    { name: t("Last name"), type: "text", class: "half", state: "lName" },
    { name: t("Email address"), type: "email", class: "", state: "email" },
    { name: t("About You"), type: "textarea", class: "", state: "aaboutMe" },
  ];
  const typeUser = [{ name: t("User Type"), type: "select" }];
  const handleButtonClick = () => {
    console.log(formValues);
  };
  return (
    <div className="updateInfo">
      <div className="inputSelect">
        <FormSelect
          inputs={inputsSelect}
          name={t("Save modifications")}
          setFormValues={setFormValues}
        />
        <Button name={t("Save modifications")} onClick={handleButtonClick} />
      </div>
      <div className="inputSelect">
        <FormSelect inputs={typeUser} />
        <Button name={t("Change")} />
      </div>
    </div>
  );
}

export default UpdateInfo;
