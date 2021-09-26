import React from 'react'
import "./contactUs.css"

function ContactUs() {
    return (

      <>
      <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">اتصل بنا</h2>
            <h3 className="section-subheading text-muted">فريق نحب نخدم معاكم في كل وقت</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="اسمك *" id="name" required data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="بريدك الالكتروني *" id="email" required data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="هاتفك *" id="phone" required data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="رسالتك *" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button type="submit" className="btn btn-xl">ابعث</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

      </>
    );
}

export default ContactUs
