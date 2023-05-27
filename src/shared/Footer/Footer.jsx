import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="page-footer font-small blue pt-4 bg-dark">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase text-white">Chef Hut</h5>
                        <p className="text-white">Visit our website to explore our chefs and food recipes, read our blog for some Q&A, and stay updated with the latest culinary trends. Connect with us on social media to join our vibrant food community and share your love for gastronomy.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase text-white">Information</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                            <li><Link to="/blog" style={{ textDecoration: 'none', color: 'white' }}>Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase text-white">LEGAL</h5>
                        <ul className="list-unstyled">
                            <li><p style={{ textDecoration: 'none', color: 'white' }}>Terms of Use</p></li>
                            <li><p style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</p></li>
                            <li><p style={{ textDecoration: 'none', color: 'white' }}>Cookie Policy</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3 text-white">
                © {currentYear} All rights reserved. <a href="" style={{ textDecoration: 'none', color: 'white' }}>Chef Hut</a>
            </div>
        </footer>
    );
};

export default Footer;
