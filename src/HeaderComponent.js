import React from 'react';
import './Header.css'

export function HeaderComponent() {


    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (<div>
        
            <div class="topnav" id="myTopnav">
                <a href="kursevi" class="active">Kursevi</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            <a class="meni" onClick={myFunction}>
                    <i class="fa fa-bars">MENI</i>
                </a>
            </div>
    </div>);
}
