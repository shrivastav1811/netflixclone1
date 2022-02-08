import React, { useEffect , useState} from 'react';
// import img from "../image/netflix.jpeg"
const Navbar = () => {

    const [show, handleShow] = useState()
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        })
             return ()=> {
                 window.removeEventListener("scroll");
             }    
    },[]);
  return (
  <>
      <div className={`nav ${show && "nav_black"}`}>
         <img 
         className="nav_logo"
         src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="nav-logo" />
        
          
      </div>
  </>
  )
};

export default Navbar;
