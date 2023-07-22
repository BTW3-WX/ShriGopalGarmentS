import React from 'react'
import '../styles/Collections.css'
import '../scripts/collection'
import a22 from '../assets/photo-1617137968427-85924c800a22.jpeg'
import f599 from '../assets/photo-1617114919297-3c8ddb01f599.jpeg'
import b6d7 from '../assets/8b431a8d0fb740d16ce44536d9dbb6d7.jpg'
import pexe from '../assets/pexels-chloe-1043474.jpg'

const Collection_m = () => {
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'></link>
    <div id="wrapper">
        <div id="sidebar">

            <h3>CATEGORIES</h3>
            <div class="checklist categories">
                <ul>
                    <li><a href=""> New Arivals</a></li>
                    <li><a href=""> Accesories</a></li>
                    <li><a href=""> Bags</a></li>
                    <li><a href=""> Dressed</a></li>
                    <li><a href=""> Jackets</a></li>
                    <li><a href=""> jewelry</a></li>
                    <li><a href=""> Shoes</a></li>
                    <li><a href=""> Shirts</a></li>
                    <li><a href=""> Sweaters</a></li>
                    <li><a href=""> T-shirts</a></li>
                </ul>
            </div>
            <h3>SIZES</h3>
            <div class="checklist sizes">
                <ul>
                    <li><a href=""> XS</a></li>
                    <li><a href=""> S</a></li>
                    <li><a href=""> M</a></li>
                </ul>

                <ul>
                    <li><a href=""> L</a></li>
                    <li><a href=""> XL</a></li>
                    <li><a href=""> XXL</a></li>
                </ul>
            </div>

            {/* <!-- <h3>PRICE RANGE</h3> --> */}
            {/* <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/price-range.png" alt="" /> --> */}
            <div class="slidecontainer">
                <input type="range" min="100" max="1000" value="500" class="slider" id="myRange"/>
                <p><span id="demo"></span></p>
            </div>

        </div>
        <div className="col-main">
        <div id="grid-selector">
            <span>Showing 1–12 of 12 results</span>
            <h1>Men's Collection</h1>
            <div id="grid-menu">
                View:
                <ul>
                    <li class="largeGrid"><a href=""></a></li>
                    <li class="smallGrid"><a class="active" href=""></a></li>
                </ul>
            </div>
        </div>
        <div id="grid">
            <div class="product">
                <div class="info-large">
                    <h4>BLUE SUIT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.500</span> Rs.200
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href="" ><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={a22} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.200/-</span>
                                <span class="product_name">BLUE SUIT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={f599} alt="" /></li>
                                <li><img src={pexe} alt="" /></li>
                                <li><img src={pexe} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>GREY COAT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.2000</span> Rs.1500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href="" ><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={f599} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.1500/-</span>
                                <span class="product_name">KHAKI JACKET</span>
                                <p>Winter dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>BLACK SUNGLASSES</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href="" ><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={pexe} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.500/-</span>
                                <span class="product_name">BLACK SUNGLASSES</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={pexe} alt="" /></li>
                                <li><img src={pexe} alt="" /></li>
                                <li><img src={pexe} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>GREY COAT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href="" ><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={b6d7} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.390/-</span>
                                <span class="product_name">GREY COAT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>KHAKI JACKET</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href="" ><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={f599} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.700/-</span>
                                <span class="product_name">KHAKI JACKET</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={f599} alt="" /></li>
                                <li><img src={f599} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>BLUE SUIT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={a22}  alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">BLUE SUIT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={a22}  alt="" /></li>
                                <li><img src={a22}  alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>GREY COAT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={b6d7} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.100/-</span>
                                <span class="product_name">GREY COAT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>GREY COAT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={b6d7} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.550/-</span>
                                <span class="product_name">GREY COAT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>KHAKI JACKET</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={f599} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">KHAKI JACKET</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={f599} alt="" /></li>
                                <li><img src={f599} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>BLUE SUIT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={a22}  alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">BLUE SUIT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={a22}  alt="" /></li>
                                <li><img src={a22}  alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>GREY COAT</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={b6d7} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">GREY COAT</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={b6d7} alt="" /></li>
                                <li><img src={b6d7} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="info-large">
                    <h4>BLACK SUNGLASSES</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div class="price-big">
                        <span>Rs.700</span> Rs.500
                    </div>

                    <h3>COLORS</h3>
                    <div class="colors-large">
                        <ul>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                            <li><a href=""><span></span></a></li>
                        </ul>
                    </div>

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>


                </div>
                <div class="make3D">
                    <div class="product-front">
                        <div class="shadow"></div>
                        <img src={pexe} alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">BLACK SUNGLASSES</span>
                                <p>Summer dress</p>

                                <div class="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div class="colors">
                                        <div class="c-blue"><span></span></div>
                                        <div class="c-red"><span></span></div>
                                        <div class="c-white"><span></span></div>
                                        <div class="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-back">
                        <div class="shadow"></div>
                        <div class="carousel">
                            <ul class="carousel-container">
                                <li><img src={pexe} alt="" /></li>
                                <li><img src={pexe} alt="" /></li>
                            </ul>
                            <div class="arrows-perspective">
                                <div class="carouselPrev">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                                <div class="carouselNext">
                                    <div class="y"></div>
                                    <div class="x"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-back">
                            <div class="cy"></div>
                            <div class="cx"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Collection_m