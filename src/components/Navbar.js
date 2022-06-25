import React from 'react';

export default function Navbar(){

    const [menu,setMenu]=React.useState({
        toggleMenu:false
    
    })

    let hamMenu = menu.toggleMenu ? "icon-close.svg" : "icon-hamburger.svg"
    
    function Toggle(){
        setMenu(prevMenu => {
            return{
                ...prevMenu,
                toggleMenu:!prevMenu.toggleMenu
            }
        })
    }
    return(
        <header>
            <nav className='navigation'>
                <img src='./images/logo.svg' className='nav-logo'/>
                <div className='menu' onClick={Toggle}>
                    <img src={`./images/${hamMenu}`} className='menu'/>
                </div>
                 <ul className= {menu.toggleMenu ? "nav-list active" : "nav-list"}>
                 <img src='./images/logo.svg' className='mobile-logo'/>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Support</a></li>
                 </ul>
            </nav>
            <section className='header-box'>
                <h2>Immersive<br/>experiences <br/> that deliver</h2>
            </section>
        </header>
    )
}
