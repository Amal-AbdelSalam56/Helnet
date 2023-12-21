import suitcase from "../../assets/images/suitcase.png"
import hospital from "../../assets/images/hospital.png"
import nutrition from "../../assets/images/nutrition.png"
import stethoscope from "../../assets/images/stethoscope.png"
import Vector from "../../assets/images/Vector.png"

import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import Card from "../../components/card/card"

const Provider = () => {


    return (
        <div className="container">
            <div className="row m-5 no-gutters">

                <div className="bg-white p-5" >
                    <h1 className="title" style={{ marginBottom: "66px" }}> من هو مقدم الخدمة؟</h1>

                    <div className="form-style" style={{ textAlign: "center" }}>

                        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "100px", flexFlow: "wrap" }}>


                            <Card imageSrc={Vector} title=" آخر" />
                            <Card imageSrc={suitcase} title=" وظائف" />
                            <Card imageSrc={hospital} title=" أماكن" />
                            <Card imageSrc={nutrition} title=" تغذية" />
                            <Card imageSrc={stethoscope} title=" طبيب" />

                        </div>

                        <ButtonsForm />


                    </div>
                </div>
                {/* <ToastContainer /> */}

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
        </div >
    );
};

export default Provider;