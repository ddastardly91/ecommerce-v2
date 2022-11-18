import { SlBag, SlMenu } from "react-icons/sl";

import "./Navbar.scss";

const Navbar = () => {
   return (
      <nav>
         <div className="nav-logo">URBNFSHN</div>
         <div className="nav-right">
            <ul className="nav-links">
               <li className="nav-link">Home</li>
               <li className="nav-link">Contact</li>
               <li className="nav-link">Register</li>
            </ul>

            <div className="nav-cart">
               <SlBag className="nav-icon" /> Cart
            </div>

            <div className="nav-burger">
               <SlMenu />
            </div>
         </div>
      </nav>
   );
};
export default Navbar;
