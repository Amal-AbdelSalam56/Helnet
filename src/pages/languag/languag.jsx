import language from "../../assets/images/language.png"
import alphabet from "../../assets/images/alphabet.png"
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import Card from "../../components/card/card";

const Language = () => {


    return (
        <div className="container">
            <div className="row m-5 no-gutters">

                <div className="bg-white p-5" >
                    <h1 className="title" style={{ marginBottom: "60px" }}> ما هي اللغة التي تود ان ترى بها الموقع؟</h1>


                    <div className="form-style" style={{ textAlign: "center" }}>

                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px", flexFlow: "wrap" }}>


                            <Card imageSrc={language} title=" English" />
                            <Card imageSrc={alphabet} title=" Arabic" />

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

export default Language;