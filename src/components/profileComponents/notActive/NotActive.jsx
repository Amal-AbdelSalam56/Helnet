import React from "react";

function NotActive({ openModal2 }) {
  return (
    <div className="not__active mb-3  mx-3">
      <div
        style={{
          backgroundColor: "#FB3B3B",
          color: "#ffff",
          marginBottom: "20px",
          height: "30px",
          textAlign: "center",
          margin: "auto",
          borderRadius: "5px",
        }}
      >
        <div
          className="red"
          onClick={openModal2}
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          هذا الحساب غير موثق حتى الآن
        </div>
      </div>
    </div>
  );
}

export default NotActive;
