import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="site-footer">
            <div className="inner first">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="widget">
                                <h3 className="heading"><strong>About Tour</strong></h3><hr/>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div className="widget">
                                <ul className="list-unstyled social">
                                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                                    <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                                    <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                    <li><a href="#"><span className="icon-dribbble"></span></a></li>
                                    <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                    <li><a href="#"><span className="icon-apple"></span></a></li>
                                    <li><a href="#"><span className="icon-google"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 pl-lg-5">
                            <div className="widget">
                                <h3 className="heading"><strong>Pages</strong></h3><hr/>
                                <ul className="links list-unstyled">
                                    <li><p className='text-dark'>Blog</p></li>
                                    <li><p className='text-dark'>About</p></li>
                                    <li><p className='text-dark'>Contact</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="widget">
                                <h3 className="heading"><strong>Resources</strong></h3><hr/>
                                <ul className="links list-unstyled">
                                    <li><p className='text-dark'>Blog</p></li>
                                    <li><p className='text-dark'>About</p></li>
                                    <li><p className='text-dark'>Contact</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="widget">
                                <h3 className="heading"><strong>Contact</strong></h3><hr/>
                                <ul className="list-unstyled quick-info links">
                                    <li className="email"><p className='text-dark'>mail@example.com</p></li>
                                    <li className="phone"><p className='text-dark'>+254 222 222 222</p></li>
                                    <li className="address"><p className='text-dark'>43 Raymouth Rd. Nairobi, Kenya 0100</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer