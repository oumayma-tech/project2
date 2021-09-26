import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"


function Footer() {
    return (
        <footer className="footer-distributed bg-light">
        <div className="footer-left">
          <h3>نخدم <span>نحب</span></h3>
          <p className="footer-links">
            <Link to ="/home">
                الصفحة الرئيسية
            </Link>
            <br />
            <Link to ="/register">اشتراك</Link>
            {/* // <Link tp ="#">Faq</Link> */}
            <br />
            <Link to ="/contactus">
                اتصل بنا
             </Link>
          </p>
          <p className="footer-company-name">By Go My code © 2021</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p><span></span> تونس</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>+216 50 644 410
            </p>
          </div>
          <div>

            <i className="fa fa-envelope" />
            <p><a href="#">contact@nheb-nekhdem.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>من نحن ؟</span>
            موقع تونسي يهدف الى التعريف بمنتجات أصحاب المشاريع الصغرى و الصناعات اليدوية و ينشر فيه عروض شغل

          </p>
          {/* <div className="footer-icons">
            <Link to ="#"><i className="fa fa-facebook" /></Link>
            <Link to ="#"><i className="fa fa-instagram" /></Link>
            <Link to ="#"><i className="fa fa-linkedin" /></Link>
            <Link to ="#"><i className="fa fa-youtube" /></Link>
          </div> */}
        </div>
      </footer>
    )
}

export default Footer
