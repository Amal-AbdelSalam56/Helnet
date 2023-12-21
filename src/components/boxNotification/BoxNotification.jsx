import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import "./BoxNotification.scss";
function BoxNotification() {
  return (
    <>
      <div className="box__notification">
        <div className="box__notification__title">
          <img src={profilePic} alt="profile" />
          <div
            className="box__notification__title__info"
            style={{
              fontWeight: "700",
            }}
          >
            <h4 className=" "> محمد عمرو </h4>
            <span style={{ fontWeight: "400" }} className="w-100 d-block">
              {" "}
              أرسل إليك طلب صداقة
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="submit"
            className="btn btn-dark font-weight-bold logbtn"
            style={{
              background: " linear-gradient(#00ACFF75, #BD00FF58)",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              height: "25px",
              border: "none",
              marginTop: "5px",
              display: "flex",
              padding: "3px 29px",
              marginRight: "46px",
              color: "white",
            }}
          >
            موافقة
          </button>
          <img className="delete" src={delet} alt="profile" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default BoxNotification;
