
import analysis from "../../assets/images/analysis 1.png"
import restaurant from "../../assets/images/restaurant.png"
import hospital from "../../assets/images/hospital.png"
import clinic from "../../assets/images/clinic 1.png"
import pharmacy from "../../assets/images/pharmacy.png"
import office from "../../assets/images/office.png"
import gym from "../../assets/images/gym.png"
import Card from "../../components/card/card"
import ButtonsForm from "../../components/buttonsForm/buttonsForm"

const Places = () => {


    return (

        <div className="container">
            <div className="row m-5 no-gutters">
                <div className="bg-white p-5" >
                    <h1 className="title" style={{ marginBottom: "66px" }}> أماكن </h1>
                    <div className="form-style" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "flex", justifyContent: "center",
                            flexFlow: "wrap", height: "256px", overflow: "auto", marginBottom: "40px"
                        }}>
                            <Card imageSrc={gym} title="صالة ألعاب" />
                            <Card imageSrc={office} title="شركة" />
                            <Card imageSrc={pharmacy} title="صيدلية" />
                            <Card imageSrc={clinic} title="عيادة " />
                            <Card imageSrc={hospital} title="مستشفى " />
                            <Card imageSrc={analysis} title="أكاديمية تدريب " />
                            <Card imageSrc={restaurant} title=" مطعم " />


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

export default Places;