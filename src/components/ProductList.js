import React from 'react'

const ProductList = () => {
  return (
        <>
  <section id="products" className="products">

    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-easel" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Lorem Ipsum
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-gem" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Sed ut perspiciatis
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Magni Dolores
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Nemo Enim
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Nemo Enim
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command" />
              </div>
              <h4 className="title">
                <a href="" className="stretched-link">
                  Nemo Enim
                </a>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default ProductList