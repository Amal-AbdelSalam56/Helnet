// import axios from "axios";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
import { Link, useNavigate } from "react-router-dom";

const Forgetpass = () => {
  const [email, setEmail] = useState("");

  // const handleSubmit = (event) => {
  //     event.preventDefault();

  //     // Create an object with the form values
  //     const data = {
  //         email: email,
  //     };

  //     // Call the updateData function with the form values
  //      updateData(data);
  // };
  // const updateData = (data) => {
  //     console.log(data);

  //     axios.post(url + 'updatePassword', {
  //         headers: {
  //             'Authorization': `Bearer ${token}`
  //         }
  //     })
  //         .then(function (res) {
  //             // handle success
  //             console.log(res.data.data);
  //             console.log(res.data.message);

  //             toast.success('You have successfully updated .', {
  //                 position: toast.POSITION.BOTTOM_RIGHT,
  //                 autoClose: 2000
  //             });

  //         })
  //         .catch(function (err) {
  //             // handle error
  //             console.log("network error");
  //             console.log(err);
  //         })
  //         .finally(function () {

  //             // alwa44ys executed
  //         });

  // }
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row m-md-5 mt-5 no-gutters">
        <div className="col-lg-6 d-none d-lg-block">
          <Logimage style={{ minHeight: "100%" }} />
        </div>
        <div className="col-lg-6 bg-white p-5 logform">
          <h1 className="title" style={{ marginBottom: "5px" }}>
            {" "}
            نسيت كلمة السر؟{" "}
          </h1>
          <h3
            className="pb-3 "
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#96A0AD",
              marginBottom: "73px",
            }}
          >
            {" "}
            لتعيين كلمة سرجديدة ادخل بريدك الالكتروني{" "}
          </h3>

          <div className="form-style" style={{ textAlign: "end" }}>
            <form
              // onSubmit={(e) => submitForm(e)}
              className="p-2"
            >
              <label
                htmlFor="email"
                className="input-label"
                style={{ marginBottom: "5px", fontWeight: "500" }}
              >
                البريد الإلكتروني
              </label>

              <div className="input-block">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ادخل بريدك الالكتروني"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="pb-2" style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-dark w-70 font-weight-bold logbtn"
                  style={{
                    background: " linear-gradient(#00ACFF75, #BD00FF58)",
                    borderRadius: "16px",
                    padding: ".375rem 4.75rem",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginTop: "4.5rem",
                    border: "none",
                  }}
                  onClick={() => navigate("/reset-pass")}
                >
                  أرسل الكود
                </button>
              </div>
            </form>
          </div>
        </div>
        <style>
          {`
          @media (max-width: 1279px) {
            
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

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Forgetpass;
