import React from 'react'
import BlogCart from '../components/BlogCart'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper .home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Blog