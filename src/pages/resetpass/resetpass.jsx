// import axios from "axios";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
const Resetpass = () => {
  const [errors, seterrors] = useState({
    password: null,
    confirmpass: null,
  });

  const [data, setData] = useState({
    password: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

    if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      seterrors({
        ...errors,
        password:
          e.target.value.length < 3
            ? "password should have more than 3 charctricts"
            : null,
      });
    } else if (e.target.name === "confirmpass") {
      setData({
        ...data,
        confirmpass: e.target.value,
      });
      seterrors({
        ...errors,
        confirmpass:
          e.target.value.length == data.password
            ? " Not the same password, check again ."
            : null,
      });
    }
  };

  // const userData = {
  //
  //     password: data.password,
  //     confirmpass: data.confirmpass,
  // };
  // // console.log(JSON.stringify(userData))

  // const customConfig = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //     }
  // };

  // const submitForm = (e) => {
  //     e.preventDefault();

  //     axios
  //         .post(url + "register", userData, customConfig)
  //         .then((response) => {
  //             console.log(userData)      //test
  //             console.log(response);

  //             toast.success('Welcome! You have successfully registed .', {
  //                 position: toast.POSITION.BOTTOM_RIGHT,
  //                 autoClose: 5000
  //             });

  //             // Wait for the toast message to disappear before navigating to the next page
  //             setTimeout(() => {

  //                 // window.location.href = '/academy/otp';
  //                 window.location.href = '/home';

  //                 // to send data (mobile)
  //                 // history.push({
  //                 //     pathname: '/academy/otp',
  //                 //     state: { data: userData }
  //                 // });

  //             }, 5000); // Wait for 2 seconds

  //         })
  //         .catch((error) => {
  //             if (error.response) {
  //                 console.log(error.response.data.message);
  //                 console.log("server error");

  //                 toast.error(error.response.data.message, {
  //                     position: toast.POSITION.BOTTOM_RIGHT,
  //                     autoClose: 2000
  //                 });

  //             } else if (error.request) {
  //                 console.log("network error");

  //                 toast.error('network error! ,please check your network ', {
  //                     position: toast.POSITION.BOTTOM_RIGHT,
  //                     autoClose: 2000
  //                 });
  //             } else {
  //                 console.log(error);
  //             }
  //         });

  //     for (var item in data) {
  //         // console.log(item);

  //         if (data[item] === "") {
  //             seterrors({
  //                 ...errors,
  //                 password: data.password === "" ? "this field is required" : null,
  //                 confirmpass: data.confirmpass === "" ? "this field is required" : null,
  //             });
  //             return 0;
  //         }
  //     }
  // };

  return (
    <div className="container">
      <div className="row m-5 no-gutters">
        <div className="col-xl-6 d-none d-xl-block">
          <Logimage />
        </div>
        <div className="col-xl-6 bg-white p-5 logform">
          <div className="p-4">
            <h1 className="title" style={{ marginBottom: "5px" }}>
              {" "}
              إعادة تعيين كلمة السر{" "}
            </h1>
            <h3
              className="pb-3 "
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#96A0AD",
                marginBottom: "95px",
              }}
            >
              {" "}
              استخدم على الاقل 8 رموز تحتوي على ارقام وحروف
            </h3>

            <div className="form-style" style={{ textAlign: "end" }}>
              <form
              // onSubmit={submitForm}
              >
                <label
                  htmlFor="password"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {" "}
                  كلمة سر جديدة
                </label>

                <div className="form-group pb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder=" ادخل كلمة السر"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    value={data.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <label
                  htmlFor="password"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  أعد كتابة كلمة السر
                </label>

                <div className="form-group pb-3">
                  <input
                    type="password"
                    name="confirmpass"
                    placeholder=" تأكيد كلمة السر"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                    value={data.confirmpass}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold logbtn"
                    style={{
                      background: " linear-gradient(#00ACFF75, #BD00FF58)",
                      borderRadius: "16px",
                      fontSize: "24px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      marginTop: "4.5rem",
                      border: "none",
                    }}
                  >
                    تسجيل الدخول
                  </button>
                </div>
              </form>
            </div>
          </div>

          <style>
            {`
          @media (max-width: 1024px) {
            
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
    </div>
  );
};

export default Resetpass;
