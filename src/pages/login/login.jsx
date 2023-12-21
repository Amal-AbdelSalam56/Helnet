// import axios from "axios";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
import { Link } from "react-router-dom";
const Login = () => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const [errors, seterrors] = useState({
    login: null,
    password: null,
  });

  /////////////// login

  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

    if (e.target.name === "email") {
      setData({
        ...data,
        login: e.target.value,
      });
      seterrors({
        ...errors,
        login:
          validEmail.test(e.target.value) === false
            ? "please write a vaild email !"
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
    }
  };

  // const userData = {
  //     login: data.login,
  //     password: data.password
  // };

  // // console.log(JSON.stringify(userData))

  // const customConfig = {
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // };

  // const submitForm = (e) => {
  //     e.preventDefault();

  //     axios
  //         .post(url + "login", userData, customConfig)
  //         .then((response) => {

  //             // console.log(response.data);

  //             localStorage.setItem('accessToken', response.data.token);

  //             toast.success('Welcome back! You have successfully logged in.', {
  //                 position: toast.POSITION.BOTTOM_RIGHT,
  //                 autoClose: 2000
  //             });

  //             // Wait for the toast message to disappear before navigating to the next page
  //             setTimeout(() => {
  //                 // window.location.href = '/home';
  //             }, 2000); // Wait for 2 seconds

  //         })
  //         .catch((error) => {
  //             if (error.response) {
  //                 // console.log(error.response.data.message);
  //                 // alert(error.response.data.message)
  //                 toast.error(error.response.data.message, {
  //                     position: toast.POSITION.BOTTOM_RIGHT,
  //                     autoClose: 2000
  //                 });

  //             } else if (error.request) {
  //                 toast.error("server error", {
  //                     position: toast.POSITION.BOTTOM_RIGHT,
  //                     autoClose: 2000
  //                 });

  //             } else {
  //                 console.log(error);
  //                 toast.error("server error", {
  //                     position: toast.POSITION.BOTTOM_RIGHT,
  //                     autoClose: 2000
  //                 });
  //             }
  //         });

  //     for (var item in data) {
  //         // console.log(item);

  //         if (data[item] === "") {
  //             seterrors({
  //                 ...errors,
  //                 login: data.login === "" ? "this field is required" : null,
  //                 password: data.password === "" ? "this field is required" : null,
  //             });
  //             return 0;
  //         }
  //     }
  // };

  return (
    <div className="container">
      <div className="row m-md-5 my-5  no-gutters flex-wrap">
        <div className="col-xl-6 col-12 d-none d-xl-block">
          <Logimage style={{ minHeight: "100%" }} />
        </div>
        <div className="col-xl-6 col-12 bg-white p-md-5 p-2 logform">
          <h1 className="title" style={{ marginBottom: "5px" }}>
            أهلا بعودتك
          </h1>
          <h3
            className="pb-3 "
            style={{ textAlign: "center", fontSize: "18px", color: "#96A0AD" }}
          >
            لقد افتقدناك برجاء تسجيل الدخول لمعرفة آخر الأخبار
          </h3>
          <button type="button" className="login-with-google-btn">
            تسجيل الدخول بواسطة جوجل
          </button>
          <h3
            className=""
            style={{ textAlign: "center", fontSize: "18px", color: "#96A0AD" }}
          >
            {" "}
            أو{" "}
          </h3>

          <div className="form-style" style={{ textAlign: "end" }}>
            <form
            // onSubmit={(e) => submitForm(e)}
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
                  value={data.login}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="text-danger text-left ">{errors.login}</div>

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
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger">{errors.password}</div>

              <div className="d-flex align-items-center justify-content-between">
                <div style={{ color: "#A74ED1" }}>
                  <Link to="/forget-pass">نسيت كلمة السر؟</Link>
                </div>
                <div className="d-flex align-items-center">
                  <span
                    className="pl-2 font-weight-bold"
                    style={{ fontWeight: "500" }}
                  >
                    {" "}
                    تذكرني
                  </span>
                  <input
                    name=""
                    type="checkbox"
                    value=""
                    className="inpcheck mb-0"
                  />
                </div>
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
                    marginTop: "3.5rem",
                    border: "none",
                  }}
                >
                  تسجيل دخول
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
              ليس لديك حساب بعد؟
              <Link
                to={"/register"}
                style={{ color: "#873fa9", fontWeight: "600" }}
              >
                {" "}
                انشئ حساب الآن{" "}
              </Link>
              وانضم الينا{" "}
            </h3>
          </div>
        </div>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Login;
