import { useEffect, useState } from "react";

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
                        <h5 className="text-uppercase text-white">Footer Content</h5>
                        <p className='text-white'>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a className='text-white' href="#!">Link 1</a></li>
                            <li><a className='text-white' href="#!">Link 2</a></li>
                            <li><a className='text-white' href="#!">Link 3</a></li>
                            <li><a className='text-white' href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase text-white">Links</h5>
                        <ul className="list-unstyled">
                            <li><a className='text-white' href="#!">Link 1</a></li>
                            <li><a className='text-white' href="#!">Link 2</a></li>
                            <li><a className='text-white' href="#!">Link 3</a></li>
                            <li><a className='text-white' href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3 text-white">
                © {currentYear} All rights reserved. <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
};

export default Footer;
