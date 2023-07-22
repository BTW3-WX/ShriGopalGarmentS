import React from 'react'
import '../styles/Collections.css'
import '../scripts/collection'
const Collection_w = () => {
  return (
    <>
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

            {/* <!-- <h3>PRICE RANGE</h3> -->
            <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/price-range.png" alt="" /> --> */}
            <div class="slidecontainer">
                <input type="range" min="100" max="1000" value="500" class="slider" id="myRange" />
                <p><span id="demo"></span></p>
            </div>

        </div>
        <div className="col-main">
        <div id="grid-selector">
            <span>Showing 1–12 of 12 results</span>
            <h1>Women's Collection</h1>
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
                    <h4>FLUTED HEM DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.200/-</span>
                                <span class="product_name">FLUTED HEM DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
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
                    <h4>PLEAT PRINTED DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.1500/-</span>
                                <span class="product_name">PLEAT PRINTED DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
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
                    <h4>FLOWY SHIRT DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.500/-</span>
                                <span class="product_name">FLOWY SHIRT DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
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
                    <h4>DOUBLE LAYER DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.390/-</span>
                                <span class="product_name">RED DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>BEAD DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.700/-</span>
                                <span class="product_name">BEAD DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PLEATED DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">PLEATED DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PRINTED DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.100/-</span>
                                <span class="product_name">PRINTED DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
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
                    <h4>PRINTED DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/8.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.550/-</span>
                                <span class="product_name">PRINTED DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/8.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PLEATED DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">PLEATED DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PLEATED DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">PLEATED DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PLEATED DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">PLEATED DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    <h4>PLEATED DETAIL DRESS</h4>
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
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                        <div class="image_overlay"></div>
                        <div class="view_gallery">View gallery</div>
                        <div class="stats">
                            <div class="stats-container">
                                <span class="product_price">Rs.450/-</span>
                                <span class="product_name">PLEATED DETAIL DRESS</span>
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
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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

export default Collection_w