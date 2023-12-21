import chef from "../../assets/images/chef.png"
import healthcare from "../../assets/images/healthcare.png"
import therapy from "../../assets/images/therapy.png"
import treadmill from "../../assets/images/treadmill.png"
import nutrition from "../../assets/images/nutrition.png"
import Card from "../../components/card/card"
import ButtonsForm from "../../components/buttonsForm/buttonsForm"

const Nutrition = () => {


    return (

        <div className="container">
            <div className="row m-5 no-gutters">
                <div className="bg-white p-5" >
                    <h1 className="title" style={{ marginBottom: "66px" }}> تغذية </h1>
                    <div className="form-style" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "flex", justifyContent: "center",
                            flexFlow: "wrap", marginBottom: "40px"
                        }}>
                            <Card imageSrc={chef} title="طباخ " />
                            <Card imageSrc={healthcare} title="مدرب صحة " />
                            <Card imageSrc={therapy} title="أخصائي نفسي" />
                            <Card imageSrc={treadmill} title="مدرب رياضي  " />
                            <Card imageSrc={nutrition} title="أخصائي تغذية " />



                            {/* Add more CardComponent instances with different text */}
                        </div>
                        <ButtonsForm />
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

export default Nutrition;