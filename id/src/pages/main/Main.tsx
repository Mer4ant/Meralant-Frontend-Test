import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import Navbar from '../../components/navbar/navbar'

import './main.scss'

function Main() {
    return (
        <>
            <Navbar />
            
            <main>
                <section className='section-main'>
                    <h2>
                    <TypeAnimation
                        sequence={[
                            'Welcome to Meralant.',
                            5000,
                            'The time to know excellence.',
                            5000,
                            'Discover new things.',
                            5000,
                            'You like cookies???',
                            750,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                    </h2>

                    <p>Revitalizing your view of the ecosystem</p>

                    <img src="/imgs/displayWhite.png" alt="display" className='img'/>
                </section>

                <section className='section-two'>
                    <h2>Unified ecosystem with Meralant ID</h2>
                    <p>A single information space that integrates all Meralant's products and services is necessary to ensure smooth and efficient work of the users. By integrating various digital platforms, such as websites, mobile applications and social media channels, We create a holistic ecosystem that meets the needs of a diverse user base.</p>
                    <img src="/imgs/frameWhite.png" alt="frame" />
                </section>

                <section className='section-tree'>
                    <h2>Connect to Frappe</h2>
                    <img src="/imgs/frappeWhite.png" alt="frappe" />
                    <p>Transfers and management of your funds with Frappe, integration with many services for fastpayment of services and donations, modern interface and easy of use. Thank you for choosing us!</p>
                </section>
            </main>

            <footer>

                <div className="left">
                    <div className='text'>
                        Any copying of team services will be punishable. <br />
                        By using Meralant services, you acknowledge that you<br />
                        agree with Meralant ID Terms and Conditions and Privacy <br />
                        Policy. Ignorance of the rules does not exempt you from liability. <br />
                    </div>
                    <div className='copyright'>Copyright © 2020-2023 Meralant Team. All rights reserved</div>
                </div>
                
                <div className='right'>
                    
                    <div className="links">
                        <div className='services'>
                            <p className='title'>Services</p>
                            <div>
                                <a href='#'>Frappe</a>
                                <a href='#'>Meralant ID</a>
                                <a href='#'>ID login</a>
                                <a href='#'>Secret button</a>
                            </div>
                        </div>
                        <div className='about'>
                            <p className='title'>About</p>
                            <div>
                                <a href='#'>Email</a>
                                <a href='#'>Discord</a>
                                <a href='#'>Team</a>
                                <a href='#'>Report a bug</a>
                            </div>
                        </div>
                        <div className='follow-us'>
                            <p className='title'>Folow Us</p>
                            <div>
                                <a href='#'>Facebook</a>
                                <a href='#'>Twitter</a>
                                <a href='#'>Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className='agreements'>
                        <a href='#'>Terms & Conditions</a>
                        <a href='#'>Privacy policy</a>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Main;