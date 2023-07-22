import React, {useEffect, useRef} from 'react'
import '../styles/Homepage.css'
import '../styles/slider2.css'
// import '../styles/slider22.css'
import {gsap} from 'gsap'

// images
import men_home from '../assets/men_home.webp'
import home_women from '../assets/home_women.webp'
import kids_home from '../assets/kids_home.webp'
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.jpg'
// import img4 from '../assets/img4.jpg'
// import img5 from '../assets/img5.jpg'
import sl2_m from '../assets/sl2_m.webp'
import blog_1 from '../assets/blog_1.jpg'
import blog_2 from '../assets/blog_2.webp'
import blog_3 from '../assets/blog_3.jpeg'
import cardImg from '../assets/card1.webp'
import angle from '../assets/angle.svg'
import cardIm from '../assets/card1.webp'

const Homepage = () => {
    const slideshowRef = useRef(null);
  const timelineRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const imageSlides = document.getElementsByClassName('imageSlides');
    const circles = document.getElementsByClassName('circle');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let counter = 0;

    function hideImages() {
      for (let i = 0; i < imageSlides.length; i++) {
        imageSlides[i].style.opacity = 0;
      }
    }

    function removeDots() {
      for (let i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot');
      }
    }

    function imageLoop() {
      const currentImage = imageSlides[counter];
      const currentDot = circles[counter];
      if (currentImage && currentDot) {
        currentImage.style.opacity = 1;
        removeDots();
        currentDot.classList.add('dot');
      }
      counter++;

      timelineRef.current = gsap.timeline();
      timelineRef.current
        .fromTo(".sl-h6", {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        })
        .fromTo(".sl-h1", {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }, "-=0.5") // Add a delay before setting opacity to 0
        .fromTo(".sl-p", {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }, "-=0.5") // Add a delay before setting opacity to 0
        .fromTo(".sl-btn", {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }, "-=0.5"); // Add a delay before setting opacity to 0
    }

    function arrowClick(e) {
      const target = e.target;
      if (target === leftArrow) {
        clearInterval(slideshowRef.current);
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        hideImages();
        removeDots();
        if (counter === 1) {
          counter = imageSlides.length - 1;
          imageLoop();
          slideshowRef.current = setInterval(slideshow, 8000);
        } else {
          counter--;
          counter--;
          imageLoop();
          slideshowRef.current = setInterval(slideshow, 8000);
        }
      } else if (target === rightArrow) {
        clearInterval(slideshowRef.current);
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        hideImages();
        removeDots();
        if (counter === imageSlides.length) {
          counter = 0;
          imageLoop();
          slideshowRef.current = setInterval(slideshow, 8000);
        } else {
          imageLoop();
          slideshowRef.current = setInterval(slideshow, 8000);
        }
      }
    }

    leftArrow.addEventListener('click', arrowClick);
    rightArrow.addEventListener('click', arrowClick);

    function slideshow() {
      if (counter < imageSlides.length) {
        imageLoop();
      } else {
        counter = 0;
        hideImages();
        imageLoop();
      }
    }

    slideshowRef.current = setInterval(slideshow, 8000);

    // IntersectionObserver Configuration
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('hide-left')) {
            entry.target.classList.add('show-left');
          }
          if (entry.target.classList.contains('hide-right')) {
            entry.target.classList.add('show-right');
          }
          if (entry.target.classList.contains('hide-top')) {
            entry.target.classList.add('show-top');
          }
          if (entry.target.classList.contains('hide-bottom')) {
            entry.target.classList.add('show-bottom');
          }
        } else {
          if (entry.target.classList.contains('hide-left')) {
            entry.target.classList.remove('show-left');
          }
          if (entry.target.classList.contains('hide-right')) {
            entry.target.classList.remove('show-right');
          }
          if (entry.target.classList.contains('hide-top')) {
            entry.target.classList.remove('show-top');
          }
          if (entry.target.classList.contains('hide-bottom')) {
            entry.target.classList.remove('show-bottom');
          }
        }
      });
    }, options);

    const hideRightElements = document.querySelectorAll('.hide-right');
    hideRightElements.forEach((el) => observerRef.current.observe(el));

    const hideLeftElements = document.querySelectorAll('.hide-left');
    hideLeftElements.forEach((el) => observerRef.current.observe(el));

    const hideTopElements = document.querySelectorAll('.hide-top');
    hideTopElements.forEach((el) => observerRef.current.observe(el));

    const hideBottomElements = document.querySelectorAll('.hide-bottom');
    hideBottomElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      clearInterval(slideshowRef.current);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <>
    {/* <!-- slider 1 --> */}
    <div class="hom-slider1">
        <div class="slideshowContainer">
            {/* <!-- img 1 --> */}
            <div class="imageSlides">
                <div class="sl-det1">
                    <h6 class="sl-h6">Kids</h6>
                    <h1 class="sl-h1">Black <br/> Friday</h1>
                    <p class="sl-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui assumenda doloremque non dignissimos recusandae suscipit expedita aliquid, vel explicabo inventore.</p>
                    <a href="#" class="sl-btn">Visit Store</a>
                </div>
            </div>

            {/* <!-- img 2 --> */}
            <div class="imageSlides">
                <div class="sl-det2">
                    <h6 class="sl-h6">Kids</h6>
                    <h1 class="sl-h1">Black <br/> Friday</h1>
                    <p class="sl-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui assumenda doloremque non dignissimos recusandae suscipit expedita aliquid, vel explicabo inventore.</p>
                    <a href="#" class="sl-btn">Visit Store</a>
                </div>
            </div>
            
            
            {/* <!-- navigating arrows --> */}
            <span id ="leftArrow" class="slideshowArrow">&#8249;</span>
            <span id ="rightArrow" class="slideshowArrow">&#8250;</span>
            
            <div class="slideshowCircles">
            {/* <!-- Filled 'dot' class is set to first image in slideshow, and then via Javascript the filled 'dot' class follows the current image.
            Make sure you match the number of these 'circle' span elements to the number of images in your slideshow. --> */}
                <span class="circle dot"></span>
                <span class="circle"></span>
            </div>
            
        </div>
    </div>

    {/* slider 2 */}
    <div className="slider2">
      <div className="sl2-main1">
        <h1>Women's</h1>
        <a href="#">Discover More</a>
      </div>
      <div class="pic-ctn1">
        <h1>CLOTHING</h1>
      <div class="pic-ctn">
        {/* <center><h1>Test</h1></center> */}
        <div class="pic-cont">
          <img src="https://picsum.photos/200/300?t=1" alt="" class="pic"/>
          <h4>Category</h4>
          <h2>Product</h2>
          <h3>Rs. 300 /-</h3>
        </div>
        <div class="pic-cont">
          <img src="https://picsum.photos/200/300?t=2" alt="" class="pic"/>
          <h4>Category</h4>
          <h2>Product</h2>
          <h3>Price</h3>
        </div>
        <div class="pic-cont">
          <img src="https://picsum.photos/200/300?t=3" alt="" class="pic"/>
          <h4>Category</h4>
          <h2>Product</h2>
          <h3>Price</h3>
        </div>
        <div class="pic-cont">
          <img src="https://picsum.photos/200/300?t=4" alt="" class="pic"/>
          <h4>Category</h4>
          <h2>Product</h2>
          <h3>Price</h3>
        </div>
        <div class="pic-cont">
          <img src="https://picsum.photos/200/300?t=5" alt="" class="pic"/>
          <h4>Category</h4>
          <h2>Product</h2>
          <h3>Price</h3>
        </div>
      </div>
      </div>
    </div>

    {/* slider22 */}
    



    

    {/* <!-- phase 2 --> */}
    <div class="container ph-2">
        <h1>PRODUCTS</h1>
        {/* <div class="fade_rule"></div>   */}
        {/* <div class="brand-container--titleBox"><h1 class="brand-container--title">PRODUCTS</h1></div> */}
        <div class="row">

            <div class="column">
                <img src={men_home} alt="" width="100%"/>
                <div class="img-content">
                    <button>Men's</button>
                </div>
            </div>

            <div class="column">
                <img src={home_women} alt="" width="100%"/>
                <div class="img-content">
                    <button>Women's</button>
                </div>
            </div>
           
            
            <div class="column">
                <img src={kids_home} alt="" width="100%"/>
                <div class="img-content">
                    <button>Kid's</button>
                </div>
            </div>
        </div>
    </div>

    {/* <div class="conatiner_2">
        <div class="row_2">
            <div class="column-2">
                <img src={img_1} alt="" width="100%"/>
            </div>
            <div class="column-2">
                <img src={img_2} alt=""  width="100%"/>
            </div>
            <div class="column-2">
                <img src={img_3}  alt=""  width="100%"/>
            </div>
            <div class="column-2">
                <img src={img_4}  alt="" width="100%"/>
            </div>
            <div class="column-2">
                <img src={img_5} alt="" width="100%"/>
            </div>
            <div class="column-2">
                <img src={img_6}  alt="" width="100%"/>
            </div>
        </div>
    </div> */}

    <section id="blog">
        <div class="blog_heading">
            <span><h1>From The Blog</h1></span>    
        </div>
        
        <div class="blog-container">
            {/* <!-- BOX 1 --> */}
            <div class="blog-box">
                <div class="blog-img">
                    <img src={blog_1} alt=""/>
                </div>

                <div class="blog-text">
                    <span>15 July 2021</span>
                    <a href="#" class="blog-title">The Best Street From London Fashion Week</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ajbfgy .</p>
                    {/* <!-- <a href="#">Read More</a> --> */}
                    <span class="blog-btn"><a href="#">Read More</a></span>
                </div>
            </div>
            {/* <!-- BOX 2 --> */}
            <div class="blog-box">
                <div class="blog-img">
                    <img src={blog_2} alt="" height="auto"/>
                </div>

                <div class="blog-text">
                    <span>10 July 2021</span>
                    <a href="#" class="blog-title">The Best Street From London Fashion Week</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ajbfgy .</p>
                    {/* <!-- <a href="#">Read More</a> --> */}
                    <span class="blog-btn"><a href="#">Read More</a></span>
                </div>
            </div>

            {/* <!-- BOX 3 --> */}
            <div class="blog-box">
                <div class="blog-img">
                    <img src={blog_3} alt=""/>
                </div>

                <div class="blog-text">
                    <span>8 July 2021</span>
                    <a href="#" class="blog-title">The Best Street From London Fashion Week</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit ajbfgy .</p>
                    {/* <!-- <a href="#">Read More</a> --> */}
                    <span class="blog-btn"><a href="#">Read More</a></span>                
                </div>
            </div>
        </div>



    </section>
    {/* <!-- /phase2 --> */}

    {/* <!-- phase3 --> */}
    <div class="brand-container">
        <div class="brand-container--titleBox hide-bottom">
            <h1 class="brand-container--title"> Our Brands </h1>
            <div class="separator"></div>
            <p class="brand-container--subtitle"> Enhance your Personality with Comfort and Vibrant Designs, Discover
                the Joy of Clothing</p>
        </div>
        <div class="brand-container--body">
            <div class="brand-container--body-card brand-container--body-card1 ">
                <div class="brand-container--body-card-bg">
                    <div class="brand-container--body-card-title">
                        <h2>Monk For Men</h2>
                        <p>Comfort crafted on our clothes for the strong and charismatic men</p>
                    </div>
                </div>
            </div>
            <div class="brand-container--body-card brand-container--body-card2 ">
                <div class="brand-container--body-card-bg">
                    <div class="brand-container--body-card-title">
                        <h2>Hylex for Women</h2>
                        <p>Reflects the dreams and tenderness of the enlightened women</p>
                    </div>
                </div>
            </div>
            <div class="brand-container--body-card brand-container--body-card3 ">
                <div class="brand-container--body-card-bg">
                    <div class="brand-container--body-card-title">
                        <h2> Hylex Premium for family </h2>
                        <p> Relaxing wear with vibrant styles for all members of the family </p>
                    </div>
                </div>
            </div>
            <div class="brand-container--body-card brand-container--body-card4 ">
                <div class="brand-container--body-card-bg">
                    <div class="brand-container--body-card-title">
                        <h2> Third Party White Labels
                        </h2>
                        <p>Comfort crafted on our clothes for the strong and charismatic men</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="eob"><span class="brand-container--btn hide-top"> Explore OUR Brands </span></div>
    </div>

    <div class="product-container-overlay">
        <div class="product-container">
            <div class="product-container--top">
                <div class="product-container--top-left">
                    <h2 class=""> Our Products </h2>
                    <p> We deliver the highest quality fabrics & garments </p>
                </div>
                <div class="product-container--top-right">
                    <p> We specialize in supplying our customers with wide variety of garments through a quality assured
                        procurement and production process. </p>
                    <div class="product-container--top-right-btn">Explore Our Products</div>
                </div>
            </div>
            <div class="product-container--bottom">
                <div class="product-container--bottom-card hide-right product-container--bottom-card1 hpc">
                    <div class="product-overlay"></div>
                    <div class="product-container--bottom-card-content">
                        <img src={cardImg} alt=""/>
                        <h2>Fabric</h2>
                        <p>Superior quality fabrics, sourced globally or our discerning customers</p>
                        <a href="#">Explore Our Fabric Store <img src={angle}/> </a>
                    </div>
                </div>
                <div class="product-container--bottom-card hide-right product-container--bottom-card2 hpc">
                    <div class="product-overlay"></div>
                    <div class="product-container--bottom-card-content">
                        <img src={cardIm} alt=""/>
                        <h2>Wearables</h2>
                        <p>Superior quality fabrics, sourced globally or our discerning customers</p>
                        <a href="#">Explore Our Wearables<img src={angle}/> </a>
                    </div>
                </div>
                <div class="product-container--bottom-card hide-right product-container--bottom-card2 hpc">
                    <div class="product-overlay"></div>
                    <div class="product-container--bottom-card-content">
                      <img src={cardImg} alt=""/>
                      <h2>Accessories</h2>
                      <p>Superior quality fabrics, sourced globally or our discerning customers</p>
                      <a href="#">Our Accessories e-Store<img src={angle}/> </a>
                    </div>
                </div>
                {/* <div class="product-container--bottom-card hide-right product-container--bottom-card3 hpc">
                      <img src={cardImg} alt=""/>
                      <h2>Accessories</h2>
                      <p>Superior quality fabrics, sourced globally or our discerning customers</p>
                      <a href="#">Our Accessories e-Store<img src={angle}/> </a>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!-- /phase3 --> */}
    
    </>
  )
}

export default Homepage