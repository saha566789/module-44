import { useState } from "react";
import LInk from "../LInk/LInk";
import { AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
 const [open,setOpen] = useState(false)
    const routes = [
        { path: '/', id: '1', name: 'Home' },
        { path: '/about', id: '2', name: 'About' },
        { path: '/services', id: '3', name: 'Services' },
        { path: '/contact', id: '4', name: 'Contact' }, 
        { path: '*', id: '5', name: 'Not Found' }
    ];
   
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="text-2xl md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose>:
                    <AiOutlineMenu></AiOutlineMenu>
                }
               
            </div>
       
           <ul className={`md:flex  duration-1000 absolute md:static
           ${open ? 'top-12' : '-top-60'}
            bg-yellow-200 px-6 `}>
           {
                routes.map(route =><LInk  key={route.id} route={route}></LInk>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;