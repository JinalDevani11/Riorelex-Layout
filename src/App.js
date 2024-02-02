import './App.css';
import { FaRegClock, FaMobileAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaCalendarAlt } from "react-icons/fa";
import logo from "./image/logo.png";
import { FaCirclePlay, FaRegCircleCheck, FaStar } from "react-icons/fa6";
import { BsPatchCheck, BsArrowRight } from "react-icons/bs";
import { HiOutlineUserGroup, HiCheck } from "react-icons/hi";
import { BiDish } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { LiaBabySolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { FaSquare, FaLocationArrow } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function App() {
  return (
    <div className="section">
      {/* =========================top header start======================== */}
      <div className="top_bgcolor">
        <div className="container">
          <div className="header_top">
            <div className="top_header">

              <div className="top_info">
                <div className="top_time">
                  <ul>
                    <li><span><FaRegClock /></span>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</li>
                    <li><span><FaMobileAlt /></span>+91 705 210-1786</li>
                  </ul>
                </div>
              </div>
              <div className="top_social_icon">
                <ul>
                  <li><FaFacebookF /></li>
                  <li><FaInstagram /></li>
                  <li><FaTwitter /></li>
                  <li><FaYoutube /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* =========================top header end======================== */}

      {/* ======================= logo header start======================= */}
      <div className="main_header">
        <div className="logo_bgcolor">
          <div className="container">
            <div className="logo_header">

              <div className="logo">
                <img src={logo}></img>
              </div>
              <div className="main_menu">
                <ul>
                  <li><a href="#">Home</a>
                    <ul className="sub_menu">
                      <li>home page 01</li>
                      <li>home page 02</li>
                      <li>home page side menu</li>
                      <li className="last_item">home page full menu</li>
                    </ul>
                  </li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">our rooms</a>
                    <ul className="sub_menu">
                      <li>our room</li>
                      <li className="last_item">room Details</li>
                    </ul>
                  </li>
                  <li><a href="#">facilities</a>
                    <ul className="sub_menu">
                      <li>services</li>
                      <li className="last_item">services Details</li>
                    </ul>
                  </li>
                  <li><a href="#">pages</a>
                    <ul className="sub_menu">
                      <li>gallery</li>
                      <li>faq</li>
                      <li>team</li>
                      <li>team details</li>
                      <li>pricing</li>
                      <li>shop</li>
                      <li className="last_item">shop details</li>
                    </ul>
                  </li>
                  <li><a href="#">blog</a>
                    <ul className="sub_menu">
                      <li>blog</li>
                      <li className="last_item">blog  Details</li>
                    </ul>
                  </li>
                  <li><a href="#">contact</a></li>
                </ul>
              </div>
              <div className="logo_header_btn">
                <div className="hedaer_btn">
                  <a href="#">reservation </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= logo header end======================= */}

      {/* ===================slider section start======================= */}
      <div className='main_slider'>
        <div className="slider_enjoy">
          <div className="slider">
            <h2>Enjoy A Luxuary Experience</h2>
            <p>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida <br></br>lectus non. </p>
            <div className="slider_info">

              <div className="slider_btn">
                <a href="#">Discover More </a>
              </div>

              <div className="intro">
                <span><FaCirclePlay /></span>
                <li>intro more</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================slider section end======================= */}

      {/* =================from section start======================== */}
      <div className="container">
        <div className="from_bgcolor">
          <div className='from_of_slider'>
            <div class="slider_from">
              <div className='part1'>

                <div className="frominfo">
                  <span><BsPatchCheck /></span>
                  <font>check  in date</font>
                </div>
                <input type="date"></input>

                <div className="frominfo">
                  <span><HiOutlineUserGroup /></span>
                  <font>Adults</font>
                </div>
                <input type="text" placeholder='Adults'></input>

                <div className="frominfo">
                  <span><BiDish /></span>
                  <font>Room</font>
                </div>
                <input type="text" placeholder='Room'></input>
              </div>

              <div className='part1'>
                <div className="frominfo">
                  <span><AiOutlineCloseCircle /></span>
                  <font>check  out date</font>
                </div>
                <input type="date"></input>

                <div className="frominfo">
                  <span><LiaBabySolid /></span>
                  <font>child</font>
                </div>
                <input type="text" placeholder='child'></input>

                <div className='frominfo'>
                  <div className='frombtn'>
                    <span><FaCalendarAlt /></span><br></br>
                    <a href="#">check availability</a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* =================from section end======================== */}


      {/* ======================about us section start==================== */}
      <div className='about_most'>
        <div className="container">
          <div className='about_us'>
            <div className='about'>
              <div className='about_section'>

                <div className='about_img'>
                  <img src={require("./image/Capture.PNG")}></img>
                </div>
                <div className='about_info'>
                  <h4>About us</h4>
                  <h1>Most Safe & Rated Hotel In London.</h1>
                  <p>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p><br></br>
                  <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.</p>

                  <div className='aboutright'>
                    <div className='aboutcheck'>
                      <span><HiCheck /></span>
                      <font>24 Month / 24,000km Nationwide Warranty monotone</font>
                    </div>
                    <div className='aboutcheck'>
                      <span><HiCheck /></span>
                      <font>24 Month / 24,000km Nationwide Warranty monotone</font>
                    </div>
                    <div className='aboutcheck'>
                      <span><HiCheck /></span>
                      <font>24 Month / 24,000km Nationwide Warranty monotone</font>
                    </div>
                  </div>

                  <div className='aboutbtn'>
                    <div className='btnab'>
                      <a href="#">Discover More </a>
                    </div>
                    <div className='sign'>
                      <img src={require("./image/signature.png")}></img>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================about us section end==================== */}

      {/* =======================the hotel section start================ */}
      <div className='hotel_bgcolor'>
        <div className="container">
          <div className='hotel'>
            <div className='explore'>
              <h4>Explore</h4>
              <h1>The Hotel</h1>
              <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed<br></br> interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
            </div>
            <div className='hotelinfo'>
              <div className='hotelimg'>
                <div className='firstitem'>
                  <img src={require("./image/qulity.png")}></img>
                  <h3>Qulity room</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>
                <div className='firstitem'>
                  <img src={require("./image/privet.png")}></img>
                  <h3>private beach</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>
                <div className='firstitem'>
                  <img src={require("./image/best.png")}></img>
                  <h3>best accommodation</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>

                <div className='firstitem'>
                  <img src={require("./image/wellness.png")}></img>
                  <h3>wellness & spa</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>

                <div className='firstitem'>
                  <img src={require("./image/bars.png")}></img>
                  <h3>Restaurants & bars</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>

                <div className='firstitem'>
                  <img src={require("./image/special.png")}></img>
                  <h3>special offers</h3>
                  <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet</p>
                  <div className='first_read'>
                    <font>read more</font>
                    <span><BsArrowRight /></span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =======================the hotel section end================ */}

      {/* =========================rooms section start================= */}
      <div className='rooms & suites'>
        <div className="container">
          <div className='room'>
            <div className='explore'>
              <h4>The Pleasure Of Luxury</h4>
              <h1>Rooms & Suites</h1>
              <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra,<br></br> sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
            </div>

            <div className='suits_sec '>
              <div className='room_firstitem'>
                <div className='room_img'>
                  <div className='img-room'>
                    <img src={require("./image/classic.png")}></img>
                  </div>
                  <div className='room_img_bg'>
                    <div className='room_line'>
                      <h3>$600/night</h3>
                      <img src={require("./image/Capture1.PNG")}></img>
                    </div>
                    <h4>book now</h4>
                  </div>
                  <div className='room_info'>
                    <h2 className='room_title'>
                      Classic Balcony Room
                    </h2>
                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                  </div>
                </div>
                <div className='imgsec'>
                  <img src={require("./image/odi.png")}></img>
                  <img src={require("./image/wifi.png")}></img>
                  <img src={require("./image/car.png")}></img>
                  <img src={require("./image/cofee.png")}></img>
                  <img src={require("./image/round.png")}></img>
                  <img src={require("./image/tra.png")}></img>

                </div>
              </div>

              <div className='room_firstitem'>
                <div className='room_img'>
                  <div className='img-room'>
                    <img src={require("./image/classic.png")}></img>
                  </div>
                  <div className='room_img_bg'>
                    <div className='room_line'>
                      <h3>$600/night</h3>
                      <img src={require("./image/Capture1.PNG")}></img>
                    </div>
                    <h4>book now</h4>
                  </div>
                  <div className='room_info'>
                    <h2 className='room_title'>
                      Classic Balcony Room
                    </h2>
                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                  </div>
                </div>
                <div className='imgsec'>
                  <img src={require("./image/odi.png")}></img>
                  <img src={require("./image/wifi.png")}></img>
                  <img src={require("./image/car.png")}></img>
                  <img src={require("./image/cofee.png")}></img>
                  <img src={require("./image/round.png")}></img>
                  <img src={require("./image/tra.png")}></img>

                </div>
              </div>

              <div className='room_firstitem'>
                <div className='room_img'>
                  <div className='img-room'>
                    <img src={require("./image/classic.png")}></img>
                  </div>
                  <div className='room_img_bg'>
                    <div className='room_line'>
                      <h3>$600/night</h3>
                      <img src={require("./image/Capture1.PNG")}></img>
                    </div>
                    <h4>book now</h4>
                  </div>
                  <div className='room_info'>
                    <h2 className='room_title'>
                      Classic Balcony Room
                    </h2>
                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                  </div>
                </div>
                <div className='imgsec'>
                  <img src={require("./image/odi.png")}></img>
                  <img src={require("./image/wifi.png")}></img>
                  <img src={require("./image/car.png")}></img>
                  <img src={require("./image/cofee.png")}></img>
                  <img src={require("./image/round.png")}></img>
                  <img src={require("./image/tra.png")}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='roombottom'>
            <img src={require("./image/rooms.PNG")}></img>
          </div>
        </div>
      </div>
      {/* =========================rooms section end================= */}

      {/* ==========================Adriatic section start=============== */}
      <div className='Adriatic_bgcolor'>
        <div className='Adriatic'>
          <div className='Adriatic_img'>
            <img src={require("./image/feature.png")}></img>
          </div>
          <div className='Adriatic_hotel'>
            <h4>Luxury Hotel & Resort</h4>
            <h1>Pearl Of The Adriatic.</h1>
            <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p><br></br>
            <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
            <div className='btnab hotel_btn'>
              <a href="#">Discover More </a>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================Adriatic section end=============== */}

      {/* ====================extra services section start================ */}
      <div className="extra_bgcolor">
        <div className="container">
          <div className='best_prices'>
            <div className='extra_services'>
              <div className='extra'>
                <h4>Best Prices</h4>
                <h1>Extra Services</h1>
                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis ve</p><br></br>
                <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
              </div>
              <div className='room_clean'>
                <h3>Room cleaning</h3>
                <p>Perfect for early-stage startups</p>
                <div className="month">Monthly</div>
                <div className="count">
                  <h2>$39.99</h2>
                </div>
                <hr></hr>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Hotel quis justo at lorem</font>
                </div>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Fusce sodales, urna et tempus</font>
                </div>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Hotel quis justo at lorem</font>
                </div>
                <div className='extra_get'>
                  <a href="#">Get Started</a>
                  <span><IoIosArrowForward /></span>
                </div>
              </div>

              <div className='room_clean'>
                <h3>Drinks included</h3>
                <p>Perfect for early-stage startups</p>
                <div className="month">Monthly</div>
                <div className="count">
                  <h2>$59.99</h2>
                </div>
                <hr></hr>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Hotel quis justo at lorem</font>
                </div>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Fusce sodales, urna et tempus</font>
                </div>
                <div className='extra_icon'>
                  <span><FaRegCircleCheck /></span>
                  <font>Hotel quis justo at lorem</font>
                </div>
                <div className='extra_get'>
                  <a href="#">Get Started</a>
                  <span><IoIosArrowForward /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================extra services section end================ */}

      {/* ======================testimonial sec start====================== */}
      <div className='testimonial_slider'>
        <div className="container">
          <div className='testimonial'>
            <div className='explore'>
              <h4>Testimonial</h4>
              <h1>What Our Clients Says</h1>
              <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed<br></br> interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
              </p>
            </div>
            <div className='client_review'>
              <div className='testimonial_firstitem'>
                <div className='singletest'>
                  <div className='client_review'>
                    <div className='qot'>
                      <img src={require("./image/qot.PNG")}></img>
                    </div>
                    <div className='clientimg'>
                      <img src={require("./image/jina.png")}></img>
                    </div>
                    <div className='clientinfo'>
                      <h2>jina Nilson</h2>
                      <p>Client</p>
                    </div>
                  </div>
                  <div className='test_star'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                </div>
                <div className='singletest'>
                  <div className='client_review'>
                    <div className='qot'>
                      <img src={require("./image/qot.PNG")}></img>
                    </div>
                    <div className='clientimg'>
                      <img src={require("./image/braitly.png")}></img>
                    </div>
                    <div className='clientinfo'>
                      <h2>braitly Dcosta</h2>
                      <p>Client</p>
                    </div>
                  </div>
                  <div className='test_star'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                </div>
                <div className='singletest'>
                  <div className='client_review'>
                    <div className='qot'>
                      <img src={require("./image/qot.PNG")}></img>
                    </div>
                    <div className='clientimg'>
                      <img src={require("./image/roboto.png")}></img>
                    </div>
                    <div className='clientinfo'>
                      <h2>roboto Dose</h2>
                      <p>Client</p>
                    </div>
                  </div>
                  <div className='test_star'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                </div>
              </div>
              <div className='test_icon'>
                <span id="iconf"><FaSquare /></span>
                <span id="icons"><FaSquare /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================testimonial sec end====================== */}

      {/* ========================Appointment sec start======================== */}
      <div className='appointment_bg_color'>
        <div className="container">
          <div className='Appointment_sec'>
            <div className='book_room'>
              <div className='room_from'>
                <h4>make Appointment</h4>
                <h1>Book a room</h1>
                <div className='book_a_room'>
                  <div className='from_book'>
                    <div className='books_form'>
                      <span><BsPatchCheck /></span>
                      <font>check  in date</font>
                    </div>
                    <input type="date"></input>

                    <div className='books_form'>
                      <span><HiOutlineUserGroup /></span>
                      <font>Adults</font>
                    </div>
                    <input type="text" placeholder='Adults'></input>

                  </div>

                  <div className='from_book'>
                    <div className='books_form'>
                      <span><AiOutlineCloseCircle /></span>
                      <font>check  out date</font>
                    </div>
                    <input type="date"></input>

                    <div className='books_form'>
                      <span><BiDish /></span>
                      <font>Room</font>
                    </div>
                    <input type="text" placeholder='Room'></input>
                  </div>
                </div>
                <div className='book_table'>
                  <a href="#">BOOK TABLE NOW</a>
                </div>
              </div>
            </div>
            <div className='book_img'>
              <img src={require("./image/booking-img.png")}></img>
            </div>
          </div>
        </div>
      </div>
      {/* ========================Appointment sec end======================== */}

      {/* =========================take tour sec start======================== */}
      <div className='tour'>
        <div className='tour_btn'>
          <img src={require("./image/play-button.png")}></img>
        </div>
        <h1>Take A tour Of Luxuri</h1>
      </div>
      {/* =========================take tour sec end======================== */}

      {/* ========================our blog sec start========================== */}
      <div className="container">
        <div className='blog'>
          <div className='explore'>
            <h4>our blog</h4>
            <h1>Latest Blog & News</h1>
            <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed<br></br> interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
            </p>
          </div>
          <div className='blog_gallery'>
            <div className='our_blog'>
              <div className='blog_firstitem'>
                <div className='blog_img'>
                  <img src={require("./image/cras.jpg")}></img>
                </div>
                <div className='blog_date'>
                  <a href="#">24th March 2022</a>
                </div>
                <div className='blog_info'>
                  <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
                  <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                  <div className='blog_btn'>
                    <a href="#">Read more</a>
                  </div>
                </div>

              </div>
              <div className='blog_firstitem'>
                <div className='blog_img'>
                  <img src={require("./image/dras.jpg")}></img>
                </div>
                <div className='blog_date'>
                  <a href="#">24th March 2022</a>
                </div>
                <div className='blog_info'>
                  <h2>Dras accumsan nulla nec lacus ultricies placerat.</h2>
                  <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                  <div className='blog_btn'>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className='blog_firstitem'>
                <div className='blog_img'>
                  <img src={require("./image/seas.jpg")}></img>
                </div>
                <div className='blog_date'>
                  <a href="#">24th March 2022</a>
                </div>
                <div className='blog_info'>
                  <h2>Seas accumsan nulla nec lacus ultricies placerat.</h2>
                  <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                  <div className='blog_btn'>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================our blog sec end========================== */}

      {/* ==========================logo slider sec start=================== */}
      <div className='logo_bg_color'>
        <div className="container">
          <div className='logo_img'>
            <div className='logoss'>
              <img src={require("./image/grapik.png")}></img>
            </div>
            <div className='logoss'>
              <img src={require("./image/techi.png")}></img>
            </div>
            <div className='logoss'>
              <img src={require("./image/thepeer.png")}></img>
            </div>
            <div className='logoss'>
              <img src={require("./image/tublogo.png")}></img>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================logo slider sec end=================== */}

      {/* ========================footer section start======================= */}
      <div className='foooter_bgimg'>
        <div className="container">
          <div className='footer_info'>
            <div className='footerlogo'>
              <div className='footer_img'>
                <img src={require("./image/footer.png")}></img>
              </div>
              <div className='footer_call'>
                <div className='iconeshape'>
                  <span><AiOutlinePhone /></span>
                </div>
                <font>1800-121-3637<br></br>+91-7052-101-786</font>
              </div>
              <div className='footer_call'>
                <div className='iconeshape'>
                  <span><AiOutlineMail /></span>
                </div>
                <font>info@gmail.com<br></br>help@gmail.com</font>
              </div>
              <div className='footer_call'>
                <div className='iconeshape'>
                  <span><CiLocationOn /></span>
                </div>
                <font>1247/Plot No. 39, 15th Phase,<br></br>LHB Colony, Kanpur</font>
              </div>
            </div>
            <div className='ourlink'>
              <h2>Our Links</h2>
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Contact Us</p>
              <p>Blog</p>
            </div>
            <div className='our_ser'>
              <h2>Our Services</h2>
              <p>FAQ</p>
              <p>Support</p>
              <p>Privercy</p>
              <p>Term & Conditions</p>
            </div>
            <div className='Subscribe '>
              <h2>Subscribe To Our Newsletter</h2>
              <div className='email'>
                <input type='text' placeholder='Your Email....'></input>
                <div className='arrow'>
                  <span><FaLocationArrow /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================footer section end======================= */}

      {/* =========================last footer start========================= */}
      <div className='last_footer'>
        <div className="container">
          <div className='endfooter'>
            <div className='info_last'>
              <p>Copyright  &#169; Riorelax 2022 . All rights reserved.</p>
            </div>
            <div className='footer_icon'>
              <div className='facebook'>
                <span><FaFacebookF /></span>
              </div>
              <div className='facebook'>
                <span><FaTwitter /></span>
              </div>
              <div className='facebook'>
                <span><FaInstagram /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================last footer end========================= */}
    </div>
  );
}

export default App;
