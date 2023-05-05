import React from 'react';

import './footer.scss'

function Footer() {
    return (
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
    );
}

export default Footer;