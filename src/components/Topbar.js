import React from 'react'

const Topbar = () => {
  return (
    <div>
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@adatech.com.tr</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+90 216 392 14 61</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Topbar