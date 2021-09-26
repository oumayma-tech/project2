import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/auth";
import img1 from '../Assets/Good team-pana.svg'
import img2 from '../Assets/Knitting-pana.svg'

// import "./register_styles.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {

  // ---------------Test 
  // jQuerycode = () => {
  //   const signUpButton = document.getElementById("signUp");
  //   const signInButton = document.getElementById("signIn");
  //   const container = document.getElementById("container");
  //   signUpButton.addEventListener("click", () => {
  //     container.classList.add("right-panel-active");
  //   });

  //   signInButton.addEventListener("click", () => {
  //     container.classList.remove("right-panel-active");
  //   });
  // };

  // componentDidMount() {
  //   this.jQuerycode();
  // }

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeLocalisation = this.onChangeLocalisation.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      tel: "",
      localisation: "",
      email: "",
      password: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeTel(e) {
    this.setState({
      tel: e.target.value,
    });
  }
  onChangeLocalisation(e) {
    this.setState({
      localisation: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.username, this.state.tel, this.state.localisation,this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
// ------------------------------Test Login Template ---------------------
      // <>
      //   <div>
      //     <div className="container" id="container">
      //       <div className="form-container sign-up-container">
      //         <form >
      //           <h1>انشاء حساب</h1>
      //           <input type="text" placeholder="اسم" name="name" />
      //           <input type="email" placeholder="بريد الالكتروني" name="email" />
      //           <input type="password" placeholder="كلمه السر" name="password" />
      //           <input type="number" placeholder="رقم الهاتف" name="tel" />
      //           {/* <select name="role"  id="pet-select">
      //           <option value="Client"  >حريف</option>
      //           <option value="PP"  >صاحب مشروع</option>
      //           <option value="PH"  >موارد بشرية</option>
      //       </select> */}
      //           <button type="submit" >سجل الأن</button>
      //         </form>
      //       </div>
      //       <div className="form-container sign-in-container">
      //           <form >
      //               <h1>تسجيل الدخول</h1>
      //               <input type="email" name="email" placeholder="بريد الالكتروني"  />
      //               <input type="password" name="password" placeholder="كلمه السر"  />
      //               {/* <a href="#">Forgot your password?</a> */}
      //               <button type="submit">تسجيل الدخول</button>
      //           </form>
      //       </div>
      //       <div className="overlay-container">
      //         <div className="overlay">
      //           <div className="overlay-panel overlay-left">
      //             <h1>نحب نخدم</h1>
      //             <img src={img2} alt="" />
      //             <button className="ghost" id="signIn">
      //               تسجيل الدخول
      //             </button>
      //           </div>
      //           <div className="overlay-panel overlay-right">
      //                   <h1> وين أنت تنجم تخدم</h1>
      //                   <img src={img1} alt="" width="100px" height="100px" />
      //                   <button className="ghost" id="signUp">
      //                       حساب جديد
      //                   </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </>
// ---------------------------------------------




      <div className="col-md-12">
        <div className="card card-container">
          <img
            src={img1}
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">اسم المستخدم</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tel">رقم الهاتف</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="tel"
                    value={this.state.tel}
                    onChange={this.onChangeTel}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="localisation">موقعك</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="localisation"
                    value={this.state.localisation}
                    onChange={this.onChangeLocalisation}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">بريد الالكتروني</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">كلمه السر</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn-primary mt-3">اشتراك الأن</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
