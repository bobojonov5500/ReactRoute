import {React} from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <div className='logo'>
              <Link to='/'>
              
               <img src=".././public/Img/Badiiyat.png" alt="#" />
              </Link> 
            </div>
            <div>
              <ul>
                <li><Link to='/'>Bosh sahifa</Link></li>
                <li><Link to='/nasr'>Nasr</Link></li>
                <li><Link to='/nazm'>Nazm</Link></li>
                <li><Link to='/maqola'>Maqolalar</Link></li>
                <li><Link to='/forum'>Forum</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
