// import React from "react";
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';

// images
import Profile from '../assets/img/profile.jpg'

import { useEffect } from 'react';
import TypedData from '../components/TypedData';

import WOW from 'wowjs'


function Home() {

     useEffect(() => {

          new WOW.WOW({
               live: false
          }).init();
     }, []);
     

     return( 
          <div className="container">
               <div className="row g-5">
                    <div className="col-lg-4 sticky-lg-top vh-100">
                         <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
                              <img
                                   className="w-100 img-fluid mb-4"
                                   src={Profile}
                                   alt="Image"
                              />
                              <h1 className="text-primary mt-2">Nana Ama Ansah</h1>

                              <div className="mb-4" style={{height: '22px'}}>
                                   {/* <h4 className="d-inline-block text-light" ref={jobs}></h4> */}
                                   {/* <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                                   <TypedData data={['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer']}/>
                              </div>   
                              {/* Element to display typing strings */}
                              {/* <span ref={jobs}></span>                   */}

                              <div className="d-flex justify-content-center mt-auto mb-3">
                                   <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                   <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                   <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                   <a className="btn btn-secondary btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                              </div>
                              <div className="d-flex align-items-end justify-content-between border-top">
                                   <a href="" className="btn w-50 border-end">Download CV</a>
                                   <a href="#contact" className="btn w-50 btn-scroll">Contact Me</a>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-8">
                         {/* <!-- About Start --> */}
                         <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                              <h1 className="title pb-3 mb-5">About Me</h1>
                              <p>A passionate Front End Developer having an experience of building Web sites with JavaScript/ React/ Nodejs/ figma and other relatable frameworks. I also have experience Digital Marketing over the last 2 years</p>
                              <div className="row mb-4">
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Name:</span> Nana Ama Ansah
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Birthday:</span> 1 April 1990
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Degree:</span> Master
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Experience:</span> 5 Years
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Phone:</span> +012 345 6789
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Email:</span> info@example.com
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Address:</span> 123 Street, New York, USA
                                   </div>
                                   <div className="col-sm-6 py-1">
                                        <span className="fw-medium text-primary">Freelance:</span> Available
                                   </div>
                              </div>
                              <div className="row g-4">
                                   <div className="col-md-4 col-lg-6 col-xl-4">
                                        <div className="d-flex bg-secondary p-4">
                                             <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">5</h1>
                                             <div className="ps-3">
                                                  <p className="mb-0">Years of</p>
                                                  <h5 className="mb-0">Experience</h5>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-4 col-lg-6 col-xl-4">
                                        <div className="d-flex bg-secondary p-4">
                                             <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">100</h1>
                                             <div className="ps-3">
                                                  <p className="mb-0">Happy</p>
                                                  <h5 className="mb-0">Clients</h5>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-4 col-lg-6 col-xl-4">
                                        <div className="d-flex bg-secondary p-4">
                                             <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">200</h1>
                                             <div className="ps-3">
                                                  <p className="mb-0">Complete</p>
                                                  <h5 className="mb-0">Projects</h5>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* <!-- About End --> */}

                         {/* <!-- Skills Start --> */}
                         <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                              <h1 className="title pb-3 mb-5">Skills</h1>
                              <div className="row">
                                   <div className="col-sm-6">
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">HTML</p>
                                                  <p className="mb-2">95%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-primary" style={{width: '95%'}} role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                             </div>
                                        </div>
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">CSS</p>
                                                  <p className="mb-2">85%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-warning" style={{width: '85%'}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                        </div>
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">PHP</p>
                                                  <p className="mb-2">90%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-danger" style={{width: '90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-sm-6">
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">Javascript</p>
                                                  <p className="mb-2">90%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-danger" style={{width: '90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                        </div>
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">Angular JS</p>
                                                  <p className="mb-2">95%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-success" style={{width: '95%'}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                        </div>
                                        <div className="skill mb-4">
                                             <div className="d-flex justify-content-between">
                                                  <p className="mb-2">Wordpress</p>
                                                  <p className="mb-2">85%</p>
                                             </div>
                                             <div className="progress">
                                                  <div className="progress-bar bg-info" style={{width: '85%'}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         {/* <!-- Skills End --> */}

                         {/* <!-- Expericence Start --> */}
                         <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
                         <h1 className="title pb-3 mb-5">Experience</h1>
                              <div className="border-start border-2 border-light pt-2 ps-5">
                                   <div className="position-relative mb-4">
                                        <span className="bi bi-arrow-right fs-4 text-light position-absolute" style={{top: '-5px', left: '-50px'}}></span>
                                        <h5 className="mb-1">Web Designer</h5>
                                        <p className="mb-2">Soft Company | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                   </div>
                                   <div className="position-relative mb-4">
                                        <span className="bi bi-arrow-right fs-4 text-light position-absolute"  style={{top: '-5px', left: '-50px'}}></span>
                                        <h5 className="mb-1">Web Designer</h5>
                                        <p className="mb-2">Soft Company | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                   </div>
                                   <div className="position-relative mb-4">
                                        <span className="bi bi-arrow-right fs-4 text-light position-absolute"  style={{top: '-5px', left: '-50px'}}></span>
                                        <h5 className="mb-1">Web Designer</h5>
                                        <p className="mb-2">Soft Company | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                   </div>
                              </div>
                         </section>
                         {/* <!-- Expericence End --> */}

                         {/* <!-- Contact Start --> */}
                         <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
                              <h1 className="title pb-3 mb-5">Contact Me</h1>
                              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a></p>
                              <form>
                                   <div className="row g-3">
                                        <div className="col-md-6">
                                             <div className="form-floating">
                                                  <input type="text" className="form-control border-0 bg-secondary" id="name" placeholder="Your Name" />
                                                  <label for="name">Your Name</label>
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="form-floating">
                                                  <input type="email" className="form-control border-0 bg-secondary" id="email" placeholder="Your Email" />
                                                  <label for="email">Your Email</label>
                                             </div>
                                        </div>
                                        <div className="col-12">
                                             <div className="form-floating">
                                                  <input type="text" className="form-control border-0 bg-secondary" id="subject" placeholder="Subject" />
                                                  <label for="subject">Subject</label>
                                             </div>
                                        </div>
                                        <div className="col-12">
                                             <div className="form-floating">
                                                  <textarea className="form-control border-0 bg-secondary text-area-dim" placeholder="Leave a message here" id="message" style={{ height: 200}}></textarea>
                                                  <label for="message">Message</label>
                                             </div>
                                        </div>
                                        <div className="col-12">
                                             <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                   </div>
                              </form>
                         </section>
                         {/* <!-- Contact End --> */}

                         {/* <!-- Footer Start --> */}
                         <section className="wow fadeIn" data-wow-delay="0.1s">
                              <div className="bg-secondary text-light text-center p-5">
                                   <div className="d-flex justify-content-center mb-4">
                                        <a className="btn btn-dark btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-dark btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-dark btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-dark btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                   </div>
                                   <div className="d-flex justify-content-center mb-3">
                                        <a className="text-light px-3 border-end" href="#">Privacy</a>
                                        <a className="text-light px-3 border-end" href="#">Terms</a>
                                        <a className="text-light px-3 border-end" href="#">FAQs</a>
                                        <a className="text-light px-3" href="#">Help</a>
                                   </div>
                                             
                                   {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***--> */}
                                   <p className="m-0"> &copy; All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
                              </div>
                         </section>
                         {/* <!-- Footer End --> */}

                    </div>
               </div>
          </div>
     );
}

export default Home;
