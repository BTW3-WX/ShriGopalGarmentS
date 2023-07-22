import React from 'react'
import '../styles/Blog.css'
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import blog4 from '../assets/blog4.webp'
import blog5 from '../assets/blog5.webp'
import blog6 from '../assets/blog6.webp'
import blog7 from '../assets/blog7.webp'
import blog8 from '../assets/blog8.webp'

const Blog = () => {
  return (
    <>
    <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <a href="#"><i class="fa fa-home"></i> Home</a>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </div>
</div>


 <section class="blog-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
          <div class="blog-sidebar">
            <div class="blog-catagory">
              <h4>Categories of Blogs</h4>
              <ul>
                <li><span>Fashion-</span> all latest trends</li>
                <li><span>Travel-</span> how to dress up?</li>
                <li><span>Worried-</span>How to know the correct fashion?</li>
                <li><span>Present-</span>Dive into the world of today's fashion.</li>
              </ul>
            </div>
            <div class="recent-post">
              <h4>Recent Post</h4>
              <div class="recent-blog">
                <a href="#" class="rb-item">
                  <div class="rb-pic">
                    <img src={blog1} alt=""/>
                  </div>
                  <div class="rb-text">
                    <h6>Textile Innovations — A New Era of Sustainability</h6>
                    <p class="blg-p">Innovation <span></span></p>
                  </div>
                </a>
                <a href="#" class="rb-item">
                  <div class="rb-pic">
                    <img src={blog2} alt=""/>
                  </div>
                  <div class="rb-text">
                    <h6>Why I Decided to Adopt a Capsule Wardrobe</h6>
                    <p class="blg-p">Fashion <span></span></p>
                  </div>
                </a>
                <a href="#" class="rb-item">
                  <div class="rb-pic">
                    <img src={blog3} alt=""/>
                  </div>
                  <div class="rb-text">
                    <h6>Growing Up in the 80s UK Counter-Culture and Its Influence on the World Today</h6>
                    <p class="blg-p">Present <span></span></p>
                  </div>
                </a>
                <a href="#" class="rb-item">
                  <div class="rb-pic">
                    <img src={blog4} alt=""/>
                  </div>
                  <div class="rb-text">
                    <h6>Inspiration From the AW 22/23 Shows — A Guide to this Season’s Textures</h6>
                    <p class="blg-p">Fashion <span></span></p>
                  </div>
                </a>
              </div>
            </div>
            {/* <!--<div class="blog-tags">
              <h4>Tags</h4>
              <div class="tag-item">
                <a href="#">Towel</a>
                <a href="#">Shoes</a>
                <a href="#">Coat</a>
                <a href="#">Dresses</a>
                <a href="#">Trousers</a>
                <a href="#">Men's hats</a>
                <a href="#">Backpack</a>
              </div>
            </div>--> */}
          </div>
        </div>
        <div class="col-lg-9 order-1 order-lg-2">
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog1} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://medium.com/our-story/textile-innovations-a-new-era-of-sustainability-f7eeb8ba43b">
                    <h4>Textile Innovations — A New Era of Sustainability</h4>
                  </a>
                  <p class="blg-p">Innovation <span>- where creativity meets fashion</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog2} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://medium.com/@sheenabrady/why-i-decided-to-adopt-a-capsule-wardrobe-87be4a248602">
                    <h4>Why I Decided to Adopt a Capsule Wardrobe.</h4>
                  </a>
                  <p class="blg-p">Fashion <span>- know it all</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog3} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="./blog-details.html">
                    <h4>Growing Up in the 80s UK Counter-Culture and Its Influence on the World Today</h4>
                  </a>
                  <p class="blg-p">Present<span>- apply it today</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog4} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://medium.com/bouncin-and-behavin-blogs/inspiration-from-the-aw-22-23-shows-a-guide-to-this-seasons-textures-f49d755d9f40">
                    <h4>Inspiration From the AW 22/23 Shows — A Guide to this Season’s Textures</h4>
                  </a>
                  <p class="blg-p">Fashion <span>- know it all</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog5} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://www.refinery29.com/en-us/2019/11/8662563/leandra-medine-mango-collection-collab">
                    <h4>Leandra Medine On The Importance Of Maintaining Her Personal Style</h4>
                  </a>
                  <p class="blg-p">Model <span>- grab the style</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog6} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://www.refinery29.com/en-us/2018/09/210717/balenciaga-sneaker-track-shoe-launch">
                    <h4>Move Over Triple S, Balenciaga's New "It" Sneaker Is Here</h4>
                  </a>
                  <p class="blg-p">Fashion <span>- know it all</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog7} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://www.refinery29.com/en-us/2018/08/206569/street-style-instagram-looks-not-fashion">
                    <h4>Do We Really Want To Dress Like Street Style Stars Anymore?</h4>
                  </a>
                  <p class="blg-p">Fashion <span>- know it all</span></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog-item">
                <div class="bi-pic">
                  <img src={blog8} alt=""/>
                </div>
                <div class="bi-text">
                  <a href="https://www.refinery29.com/en-us/2018/02/191840/fashion-week-street-style-diversity-controversy">
                    <h4>8 Fashion Photographers On Why Diversity Is Harder Than It Looks</h4>
                  </a>
                  <p class="blg-p">Fashion <span>- know it all</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Blog