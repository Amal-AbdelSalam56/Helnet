/* eslint-disable react/prop-types */
import React from "react";
import "./BoxStore.scss";
import OpenModal from "../openModal/OpenModal";
// import { Button } from "react-bootstrap";
function BoxStore({ buttons }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box__store  flex-wrap">
        {buttons.map((b, index) => (
          <div
            key={index}
            className="box__store__card d-flex col-xxl-4 col-sm-6 col-12 gap-2 p-2"
            onClick={() => setModalShow(b)}
          >
            <img src={b.icon} alt="" />
            <h4>{b.name}</h4>
          </div>
        ))}
      </div>
      <OpenModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BoxStore;
