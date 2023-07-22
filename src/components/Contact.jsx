import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <>
    <div class="map-container">
    <div class="googlemapp">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3564.428466636758!2d77.8979377!3d26.698755600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQxJzU1LjUiTiA3N8KwNTMnNTIuNiJF!5e0!3m2!1sen!2sin!4v1689492522728!5m2!1sen!2sin"
         width="100%" height="580px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
   </div>
   </div>

    <section class="contact-area">
            <div class="contact-row">
                <div class="contact-col-lg-5">
                    <div class="custom-contact-title">
                        <h4>Contact Us</h4>
                        <br/>
                        <p>Feel free to Contact us for any query.
                            We are here for you to help you explore our world.
                            Enter the details below.</p>
                    </div>
                    <br />
                    <div class="contact-fields">
                        {/* <!-- Address, Phone, and Email sections --> */}
                        <div class="contact-address">
                            <div class="add-icon">
                                <i class="fa-solid fa-location-dot"></i>
                                <div class="add-content">
                                    <p class="add-content-p1" >Address:</p>
                                    <p class="add-content-p2" >Hanuman Tiraha Bata Wali Gali, near hanuman mandir, Dholpur, Rajasthan.</p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-phone">
                            <div class="add-icon">
                                <i class="fa-solid fa-mobile"></i>
                                <div class="add-content">
                                    <p class="add-content-p1">Phone:</p>
                                    {/* <!-- <p style="font: 100% muli,sans-serif;">+91 8278617191</p> --> */}
                                    <a href="tel:8278617191" class="add-content-a">+91 8278617191</a><br />
                                    <a class="add-content-a" href="tel:9413593647" >+91 9413593647</a>
                                </div>
                            </div>
                        </div>
                        <div class="contact-email">
                            <div class="add-icon">
                                <i class="fa-solid fa-envelope"></i>
                                <div class="add-content">
                                    <p class="add-content-p1" >Email:</p>
                                    <p class="add-content-p2">Shrigopalgarments2002@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-col-lg-6 offset-lg-1">
                    <h4>Leave A Comment</h4>
                    <br />
                    <br />
                    <p>Our staff will call back later and answer your questions.</p>
                    <br />
                    <br />
                    <br />
                     
                    <form>
                        {/* <!-- Form fields -->
                        <!-- onsubmit="sendEmail(); reset(); return false;" --> */}
                        <div class="name-email">
                          
                                <div class="con-name">
                             
                              <input class="contact-name" type="text" placeholder="Your name" id="namejs" onkeyup="validateName()" required />
                              <span id="con-name-msg"></span>
                            </div>
                        
                      
                            
                                <div class="con-email">
                             
                              <input class="contact_us-email" type="email" placeholder="Your email" id="emailjs" onkeyup="validateEmail()" required />
                              <span id="con-email-msg"></span>
                            </div>
                        
                        </div>  
                                <div class="con-msg">
                              <textarea class="contact-message" rows="5" placeholder="Your message"></textarea>
                            </div>

                        <br />
                        
                      
                          <button type="submit" class="send-button">SEND MESSAGE</button>
                    </form>
               
                </div>
            </div>
        {/* <!-- </div> --> */}
    </section>
    </>
  )
}

export default Contact