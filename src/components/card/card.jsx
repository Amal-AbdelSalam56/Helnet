// import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title }) => {
  return (
    <div className="card">
      <img
        src={imageSrc}
        alt="Avatar"
        style={{
          height: "auto",
          width: "auto",
          padding: "26px 33px",
          paddingBottom: "0",
        }}
      />
      <div className="card-body" style={{ padding: "10px 1rem" }}>
        <h5
          className="card-title"
          style={{ fontSize: "18px", fontWeight: "600" }}
        >
          {title}
        </h5>
      </div>
    </div>
  );
};
export default Card;
