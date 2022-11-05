import React, { Component } from 'react';
import '../../App.css';

const Header = () => {
    return (
        <div class="header">
            <ul class="nav__links">
                 <li><a><button class="button">Assignment 1</button></a></li>
                 <li><a><button class="button">Assignment 2</button></a></li>
                 <li><a><button class="button">Assignment 3</button></a></li>
                 <li><a><button class="button">Total</button></a></li>
            </ul>
       </div>
    )
}

export default Header

