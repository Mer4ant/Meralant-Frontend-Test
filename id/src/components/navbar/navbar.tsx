import React from 'react';

import './navbar.scss'

function Navbar() {
    return (
		<header>
			<a className="logo">Meralant ID</a>
			<ul>
				<li><a href="#">Register</a></li>
					<li>
                        <div className="frappe">
                            <a href="#">Frappe<span>NEW</span></a>
                        </div>
					</li>
				<li><a href="#">About</a></li>
				<li><a href="#">Discord</a></li>
			</ul>
		</header>
    );
}

export default Navbar;