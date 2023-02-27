import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCart from '../components/BlogCart'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../Utils/Data'
import home1 from '../Assest/images/home1.jpg'

const Home = () => {
  return (
    <>
    <Meta title={"E-commerce"} />
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-12">
              <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={home1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={home1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={home1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide also.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
             {
              services?.map((i,j)=>{
                return(
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })
             }
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Smart Tv</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Music</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Smart Tv</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Music</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-6">
              <div className="famous-card position-relative">
                <img src="images/images/famous-1.webp" alt="famous img" />
                <div className="famous-content  img-fluid position-absolute">
                  <h5>Big Screen
                  </h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="famous-card position-relative">
                <img src="images/images/famous-1.webp" alt="famous img" />
                <div className="famous-content img-fluid position-absolute">
                  <h5>Big Screen
                  </h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo</p>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
      
      <Container class1="marque-wrapper py-5">
      <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className='d-flex '>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-01.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-02.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-03.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-04.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-05.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-06.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-07.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-08.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
          </div>
      </Container>
      <Meta title={"E-commerce"} />
     
    </>
  )
}

export default Home