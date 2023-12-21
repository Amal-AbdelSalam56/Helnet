import ButtonsForm from "../../components/buttonsForm/buttonsForm";

const Colors = () => {
  return (
    <div className="container">
      <div className="row m-5 no-gutters">
        <div className="bg-white p-5">
          <h1 className="title" style={{ marginBottom: "66px" }}>
            {" "}
            ما هو اللون الذي تود ان ترى به الموقع؟
          </h1>

          <div className="form-style" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "100px",
                flexWrap: "wrap",
              }}
            >
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-black" />
                <label
                  className="colour-box-black"
                  htmlFor="radio-black"
                ></label>
              </div>
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-brown" />
                <label
                  className="colour-box-brown"
                  htmlFor="radio-brown"
                ></label>
              </div>
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-yellow" />
                <label
                  className="colour-box-yellow"
                  htmlFor="radio-yellow"
                ></label>
              </div>
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-green" />
                <label
                  className="colour-box-green"
                  htmlFor="radio-green"
                ></label>
              </div>
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-blue" />
                <label className="colour-box-blue" htmlFor="radio-blue"></label>
              </div>
              <div className="colorcard">
                <input type="radio" name="radio" id="radio-grey" />
                <label className="colour-box-grey" htmlFor="radio-grey"></label>
              </div>
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

            }
            .bg-white{
                padding-left: 0!important;
                padding-right: 0!important;
            }
          }
        `}
        </style>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Colors;
