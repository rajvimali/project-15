import React from 'react'

function Contact() {
    return (
        <>
            <section className="contact_us section-padding p-5" id='contactus'>
                <div className="container">
                    <div className="row">
                        <h3>Get in touch using the form below</h3>
                        <div className="col-md-6 shadow  mt-4 p-4">
                            {/* <div className="errorWrap"><strong>ERROR</strong></div> */}
                            {/* <div className="succWrap"><strong>SUCCESS</strong></div> */}
                            <div className="contact_form ">
                                <form method="post">
                                    <div className="form-group">
                                        <label className="control-label">Full Name <span>*</span></label>
                                        <input type="text" name="fullname" className="form-control white_bg" id="fullname" required />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Email Address <span>*</span></label>
                                        <input type="email" name="email" className="form-control white_bg" id="emailaddress" required />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Phone Number <span>*</span></label>
                                        <input type="text" name="contactno" className="form-control white_bg" id="phonenumber" required maxlength="10" pattern="[0-9]+" />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Message <span>*</span></label>
                                        <textarea className="form-control white_bg" name="message" rows="4" required></textarea>
                                    </div><br />
                                    <div className="form-group">
                                        <button className="btn btn-info text-white form-control fw-bold" type="submit" name="send" >Send Message <span className="angle_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className='ms-4 '>Contact Info</h3>
                            <div className="contact_detail  p-4">
                                <ul>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa-solid fa-location-dot me-3 fs-5"></i></div>
                                        <div className="contact_info_m mb-3 fs-5  ">Contact info</div>
                                    </li>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa fa-phone me-3 fs-5"></i></div>
                                        <div className="contact_info_m mb-3"><a className='text-decoration-none fs-5 text-black' href="tel:61-1234-567-90">contact@gmail.com</a></div>
                                    </li>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa-regular fa-envelope me-3 fs-4"></i></div>
                                        <div className="contact_info_m mb-3"><a className='text-decoration-none fs-5 text-black' href="mailto:contact@exampleurl.com">1234567890</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Contact