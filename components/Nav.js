import React, {Component} from 'react'
import {MenuContext} from './MenuContext'

class Nav extends Component{
    static contextType = MenuContext

    constructor(){
        super()
    }

    componentDidUpdate(){
        const { menuOpen } = this.context
        this.showMenu(menuOpen)
    }

    showMenu = (menuOpen) =>{        
        const nav = document.getElementById("nav-bar"),
            bodypd = document.getElementById("body-pd"),
            headerpd = document.getElementById("header")
        // Validate that all variables exist
        if(menuOpen){
            // show navbar
            nav.classList.add('show')
            // change icon
            // toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.add('body-pd')
            // add padding to header
            headerpd.classList.add('body-pd')
        } else{
            // show navbar
            nav.classList.remove('show')
            // change icon
            // toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.remove('body-pd')
            // add padding to header
            headerpd.classList.remove('body-pd')
        }
    }

    render(){
        const { menuOpen } = this.context
        const { toggleMenuOpen } = this.context
        return(         
            <nav className="nav">
                <div>
                    <a href="" className="nav__logo">
                        <img src="/icons/edit.svg" alt="logo" className="nav__icon"/>
                        <span className="nav__logoName">Note app</span>
                    </a>
                    <div className="nav__list">
                    <a href="" className="nav__link">
                        <img src="/icons/plus.svg" alt="note icon" className="nav__icon"/>
                        <span className="nav__name">Add note</span>
                    </a>
                    <a href="" className="nav__link">
                        <img src="/icons/sticky-note.svg" alt="note icon" className="nav__icon"/>
                        <span className="nav__name">Note 1</span>
                    </a>
                    <a href="" className="nav__link">
                        <img src="/icons/sticky-note.svg" alt="note icon" className="nav__icon"/>
                        <span className="nav__name">Note 2</span>
                    </a>
                    <a href="" className="nav__link">
                        <img src="/icons/sticky-note.svg" alt="note icon" className="nav__icon"/>
                        <span className="nav__name">Note 3</span>
                    </a>
                    </div>
                    <p className="nav__smallText">created by <img src="/icons/github.svg" alt="github logo" className="nav__iconSmall"/> edsonlcandido</p>
                </div>
            </nav>           
        )
    }
}

export default Nav