import React, { Component } from  'react'
import MenuContext, { MenuConsumer } from './MenuContext'

class MenuButton extends Component{
    static contextType = MenuContext

    constructor({}){
        super()

    }

    render() {    
        const {toggleMenuOpen} = this.context

        return (
            <div className="header__toogle">
                <a href="#" onClick={toggleMenuOpen}><img src="/icons/bars.svg" alt="logo" className="nav__icon"/></a>
            </div>         
        )
    }
}

export default MenuButton