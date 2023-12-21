import React, { useState } from "react";
import "./OpenModal.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormSelect from "../formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button2 from "../../components/button/Button";
import { close1 } from "../../assets/images/icons";

function OpenModal(props) {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const handleButtonClick = () => {
    console.log(formValues);
  };
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100">
          <div className="d-flex align-items-center justify-content-between w-100">
            {" "}
            <div className="d-flex align-items-center gap-2">
              <img src={props?.show?.icon} alt="" />
              {props?.show?.name}
            </div>
            <div
              onClick={() => props.setModalShow(false)}
              className="cursor-pointer"
              style={{
                background: "#fff",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <img src={close1} style={{ width: "20px" }} />
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormSelect
          inputs={props?.show?.inputs}
          name={t("Save modifications")}
          setFormValues={setFormValues}
        />
        <Button2 name={t("Save modifications")} onClick={handleButtonClick} />
      </Modal.Body>
    </Modal>
  );
}

export default OpenModal;
