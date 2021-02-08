import React, { Component } from  'react'

const MenuContext = React.createContext(0)

class MenuProvider extends Component{
    constructor({children}){
        super(children)

        this.state = {
            menuOpen: false
        }
        this.toggleMenuOpen = this.toggleMenuOpen.bind(this)
    }

    toggleMenuOpen(){
        this.setState(
            currentState=>{
                return {menuOpen: (currentState.menuOpen) ? false: true}
            }
        )
    }

    toggleMenuClick = (event) =>{
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        this.toggleMenuOpen()
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

export const MenuConsumer = MenuContext.Consumer

export default MenuContext

export {MenuProvider}