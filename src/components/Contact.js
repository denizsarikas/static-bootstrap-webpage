import React from 'react'

const Contact = () => {
  return (
    <div>
            <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>Varyap Plaza No:61 - Pendik/İstanbul
</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>contact@adatech.com.tr</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bi bi-phone"></i>
              <h3>Call Us</h3>
              <p>+90 216 392 14 61</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6 ">
            {/* <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe> */}
            {/* k<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Esenyal%C4%B1,%20Varyap%20Plaza,%20Esenyal%C4%B1%20Mahallesi,%20Yanyol%20Caddesi,%20Uygar%20Sk.%20No:61%20-%20222,%2034903%20Pendik/%C4%B0stanbul+(Adatech)&amp;t=k&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div> */}
            <iframe
    width="100%"
    height="400"

    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Esenyal%C4%B1,%20Varyap%20Plaza,%20Esenyal%C4%B1%20Mahallesi,%20Yanyol%20Caddesi,%20Uygar%20Sk.%20No:61%20-%20222,%2034903%20Pendik/%C4%B0stanbul+(Adatech)&amp;t=k&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
  </iframe>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Contact