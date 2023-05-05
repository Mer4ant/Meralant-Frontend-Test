import React, { useState }from 'react';
import { TypeAnimation } from 'react-type-animation';

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

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

            <Footer />
        </>
    );
}

export default Main;