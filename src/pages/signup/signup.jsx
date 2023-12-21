// import axios from "axios";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const [errors, seterrors] = useState({
    name: null,
    email: null,
    password: null,
    confirmpass: null,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

    if (e.target.name === "name") {
      setData({
        ...data,
        name: e.target.value,
      });
      seterrors({
        ...errors,
        name:
          e.target.value.length < 3
            ? " name should has more than 3 charctricts"
            : null,
      });
    } else if (e.target.name === "password") {
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
    } else if (e.target.name === "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      seterrors({
        ...errors,
        email:
          validEmail.test(e.target.value) === false
            ? "please write a vaild email !"
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
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //     mobile: data.mobile,
  //     college_id: data.college_id,
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
  //                 name: data.name === "" ? "this field is required" : null,
  //                 password: data.password === "" ? "this field is required" : null,
  //                 email: data.email === "" ? "this field is required" : null,
  //                 confirmpass: data.confirmpass === "" ? "this field is required" : null,
  //             });
  //             return 0;
  //         }
  //     }
  // };
    const navigate = useNavigate();


  return (
    <div className="container">
      <div className="row m-md-5 my-5 no-gutters">
        <div className="col-xl-6 col-12 d-none d-xl-block">
          <Logimage />
        </div>
        <div className="col-xl-6 col-12 bg-white p-5 logform">
          <div className="p-md-5 p-2">
            <h1 className="title" style={{ marginBottom: "5px" }}>
              أهلا بعودتك
            </h1>
            <h3
              className="pb-3 "
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#96A0AD",
              }}
            >
              لقد افتقدناك برجاء تسجيل الدخول لمعرفة آخر الأخبار
            </h3>
            <button type="button" className="login-with-google-btn">
              تسجيل الدخول بواسطة جوجل
            </button>
            <h3
              className=""
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#96A0AD",
              }}
            >
              {" "}
              أو{" "}
            </h3>

            <div className="form-style" style={{ textAlign: "end" }}>
              <form
              // onSubmit={submitForm}
              >
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  الاسم بالكامل{" "}
                </label>

                <div className="input-block">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="name"
                    placeholder="ادخل اسمك "
                    required
                    value={data.login}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
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
                    value={data.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <label
                  htmlFor="password"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {" "}
                  كلمة السر
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
                  تأكيد كلمة السر
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
                      marginTop: "0.5rem",
                      border: "none",
                    }}
                    onClick={() => navigate("/check-code")}
                  >
                    التالى
                  </button>
                </div>
              </form>

              <h3
                className="pb-3 "
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                {" "}
                لديك حساب بالفعل؟{" "}
                <Link
                  style={{ color: "#873fa9", fontWeight: "600" }}
                  to="/login"
                >
                  {" "}
                  سجل دخول{" "}
                </Link>{" "}
                الآن وانضم الينا{" "}
              </h3>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}

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
      </div>
    </div>
  );
};

export default Signup;
