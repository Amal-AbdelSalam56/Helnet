import cooperation from "../../assets/images/cooperation.png";
import social from "../../assets/images/social.png";
import accounting from "../../assets/images/accounting.png";
import mayor from "../../assets/images/stethoscope.png";
import influencer from "../../assets/images/influencer.png";
import music from "../../assets/images/music.png";
import dubbing from "../../assets/images/dubbing.png";
import paint from "../../assets/images/paint.png";
import camera from "../../assets/images/camera.png";
import developer from "../../assets/images/developer.png";
import law from "../../assets/images/law.png";
import female from "../../assets/images/female.png";
import hat from "../../assets/images/hat.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";

const Jobs = () => {
  return (
    <div className="container">
      <div className="row m-5 no-gutters">
        <div className="bg-white p-5">
          <h1 className="title" style={{ marginBottom: "66px" }}>
            {" "}
            وظائف{" "}
          </h1>
          <div className="form-style" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "wrap",
                height: "256px",
                overflow: "auto",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <Card imageSrc={hat} title="مهندس" />
              <Card imageSrc={female} title="مدرس" />
              <Card imageSrc={law} title="محامي" />
              <Card imageSrc={developer} title="مبرمج " />
              <Card imageSrc={camera} title="مصور " />
              <Card imageSrc={paint} title="فنان " />
              <Card imageSrc={dubbing} title="معلق صوتي " />
              <Card imageSrc={music} title="محتوى ترفيهي" />
              <Card imageSrc={influencer} title="مقدم محتوى عام  " />
              <Card imageSrc={mayor} title="سياسي " />
              <Card imageSrc={accounting} title="محاسب" />
              <Card imageSrc={social} title="مسوق تجاري  " />
              <Card imageSrc={cooperation} title="رواد أعمال " />

              {/* Add more CardComponent instances with different text */}
            </div>
            <ButtonsForm next={"/doctor"} prev={"/user-kind"} />
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
    </div>
  );
};

export default Jobs;
