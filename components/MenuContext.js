import React, { Component } from  'react'

export const MenuContext = React.createContext(0)

class MenuProvider extends Component{
    constructor(){
        super()

        this.state = {
            menuOpen: false
        }

        this.toggleMenuOpen = this.toggleMenuOpen.bind(this)
    }

    toggleMenuOpen(){
        this.setState({
            menuOpen: this.state.menuOpen ? false : true
        })
    }

    componentDidMount(){
        if (window.innerWidth > 764) {
            this.setState({
                menuOpen: true
            })
        }        
    }

    render() {
        const { children } = this.props
        const { menuOpen } = this.state
        const { toggleMenuOpen } = this

        return (
            <>
                <MenuContext.Provider
                value={{
                    menuOpen,
                    toggleMenuOpen
                }}
                >
                {children}
                </MenuContext.Provider>      
            </>

        )
    }
}

export {MenuProvider}