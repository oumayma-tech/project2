import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import imguser from "../Assets/user.svg"
import "./profile.css"

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <>
<aside className="profile-card">
<header>
  {/* here’s the avatar */}
  <a target="_blank" href="#">
    <img src={imguser} className="hoverZoomLink" />
  </a>
  {/* the username */}
  <h1>
  {currentUser.username}
  </h1>
  {/* and role or location */}
  {/* <h2>
  {currentUser.roles &&
  currentUser.roles.map((role, index) => <h2 key={index}>{role}</h2>)}
  </h2> */}

<h2>  <i className="fa fa-map-marker" />  {currentUser.localisation }</h2>
<h2>  <i className="fa fa-phone" />  {currentUser.tel }</h2>
</header>
{/* bit of a bio; who are you? */}
<div className="profile-bio">
  <p>
  مرحبا بيك ! تنجم تتصل بينا في أي وقت و تطلب المنتوج اللي حاشتك بيه و يشرفنا نعرفوا رايك في منتوجنا 
  شكرا ...
  </p>
</div>

{/* some social links to show off */}
<ul className="profile-social-links">
  <li>
    <a target="_blank" href="#">
      <i className="fa fa-facebook" />
    </a>
  </li>
  <li>
    <a target="_blank" href="#">
      <i className="fa fa-instagram" />
    </a>
  </li>
  <li>
    <a target="_blank" href="#">
      <i className="fa fa-github" />
    </a>
  </li>
  <li>
    <a target="_blank" href="#">
      <i className="fa fa-behance" />
    </a>
  </li>
</ul>
</aside>
</>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
