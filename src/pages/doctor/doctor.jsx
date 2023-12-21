import veterinary from "../../assets/images/veterinary.png";
import pharmacy from "../../assets/images/pharmacy.png";
import floss from "../../assets/images/floss.png";
import stethoscope from "../../assets/images/stethoscope.png";
import painful from "../../assets/images/painful.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";

const Doctor = () => {
  return (
    <div className="container">
      <div className="">
        <div className="bg-white p-5 d-flex align-items-center justify-content-center flex-column h-100vh">
          <h1 className="title" style={{ marginBottom: "66px" }}>
            {" "}
            طبيب{" "}
          </h1>
          <div className="form-style" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // flexFlow: "wrap", height: "256px", overflow: "auto",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <Card imageSrc={painful} title="علاج طبيعي" />
              <Card imageSrc={veterinary} title="طبيب بيطري" />
              <Card imageSrc={pharmacy} title="صيدلي" />
              <Card imageSrc={floss} title="طبيب أسنان " />
              <Card imageSrc={stethoscope} title="طبيب بشري" />

              {/* Add more CardComponent instances with different text */}
            </div>
            <ButtonsForm />
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 538px) {
            .title {
                font-size: 32px;
            }
            .no-gutters{
                margin-left: 0!important;
                margin-right: 0!important;
                padding-left: 0!important;
                padding-right: 0!important;
            }
            .bg-white{
                padding-left: 0!important;
                padding-right: 0!important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Doctor;
