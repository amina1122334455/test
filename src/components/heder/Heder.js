import React from "react"
import img  from  '../../components/img/image.webp'
const Header = () => {
    return (
      <header className='header'>
      <div className="img">
        <img src={img} alt="img"/>
      </div>
      <div className="text">
        <p>это бабочки</p>
      </div>
      
      </header>
    )
  }

  export default Header;