import React, { useState } from 'react';
import '../Styles/menu.css'
import menuLogo from '../images/open-menu.png';

const Burger = () => {
    // const [open, setOpen] = useState(false);
    const openMenu = () => {
        console.log('click');
        
    }
    return(
    <>
        <div><img className='menu_logo' src={menuLogo} onClick={() => openMenu()}></img></div>
    </>
    )
}

export default Burger;