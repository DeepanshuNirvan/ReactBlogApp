export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 text-decoration-none" >
            <div className="container">
                <div className="d-flex">
                    <div className="col-md-4">
                        <img src="/logo.jpg" alt="logoHere" height="38"/>
                            <h6 className="pt-2 primary-color">Stock Research Made Easy</h6>
                            <p className="gray pb-4 pt-2 font_16">
                                DistrictD provides first of a kind access to institutional
                                investing resources and tools to everyone
                            </p>

                    </div>
                    <div className="d-flex justify-content-between flex_1 pr-3">
                        <div className="w-25">
                            <p className="white border-bottom pb-3">Company</p>
                            <ul>
                                <li>About Us</li>
                                <li>Our Philosophy</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                        <div className="w-25">
                            <p className="white border-bottom pb-3">Products &amp; Pricing</p>
                            <ul>
                                <li>Features</li>
                                <li>Plans</li>
                            </ul>
                        </div>
                        <div className="w-25">
                            <p className="white border-bottom pb-3">Contact Us</p>
                            <p className="font_14 white m-0"><i className="fa fa-phone"></i> +91 9819486338</p>
                            <p className="font_14 white m-0"><i className="fa fa-envelope-o"></i>support@districtd.co</p>
                            <p className="font_14 white m-0"><i className="fa fa-map-marker"></i> Address</p>
                            <p className="font_14 gray">
                                C-98 First Floor, C Block, Sector 2, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gray mb-0 py-4 border-top d-flex justify-content-between">
                    <div className="">Copyright © DistrictD. All rights reserved.</div>
                    <div>
                        Terms of Use &nbsp; &nbsp;
                        Privacy Policy&nbsp; &nbsp;
                        Refund Policy &nbsp; &nbsp;
                        Cancellation Policy
                    </div>
                </div>
            </div>
        </footer>
    )
}