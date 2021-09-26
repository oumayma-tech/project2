import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Product from './components/layouts/pp_product.js/Product'
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Cardlist from './components/layouts/pp_product.js/cardlist'
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import ContactUs from "./components/layouts/contactus/contactUs";
import Job from "./components/layouts/jobs/job";
import Addemploi from "./components/layouts/jobs/Addemploi";
import Footer from "./components/layouts/footer/footer";
import Editemploi  from './components/layouts/jobs/Editemploi';
import Productcard from "./components/layouts/pp_product.js/Productcard";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div className="">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Link to={"/"} className="navbar-brand"  id="nhebnkhdem">
                نحب نخدم
              </Link>
              |
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to={"/home"} className="nav-link">
                      الصفحة الرئيسية
                    </Link>
                    
                  </li>
                  
                  {showModeratorBoard && (
                    <li className="nav-item">
                      <Link to={"/mod"} className="nav-link">
                        Moderator Board
                      </Link>
                    </li>
                  )}
                  {showAdminBoard && (
                    <li className="nav-item">
                      <Link to={"/admin"} className="nav-link">
                        المشرف
                      </Link>
                    </li>
                  )}

                  {currentUser && (
                    <li className="nav-item">
                      <Link to={"/user"} className="nav-link">
                        الحريف
                      </Link>
                    </li>
                  )}
                </ul>

                {currentUser ? (
                  <div className="navbar-nav ">
                    
                      <li className="nav-item">
                        <Link to={"/products"} className="nav-link">
                          منتوجات و بضائع
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/emploi"} className="nav-link">
                          عروض شغل
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={this.logOut}>
                        تسجيل خروج
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        تسجيل الدخول
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        اشتراك
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/contactus"} className="nav-link">
                        اتصل بنا
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="">
            <Switch>
              {/* <Route exact path={["/", "/home"]} component={Home} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/emploi" component={Job} />
              <Route path="/Add_emploi" component={Addemploi} />
              <Route path="/Edit_emploi" component={Editemploi} />
              <Route path="/product" component={Product} />
              <Route path="/prod" component={Productcard} />
              {/* <Route path="/list_des_produits" component={Cardlist} /> */}
              <Route path="/products" component={Product} /> 
              {/* <Route path="/contactus" component={ContactUs} /> */}
            </Switch>
          </div>
        </div>

        {/* <Footer /> */}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
