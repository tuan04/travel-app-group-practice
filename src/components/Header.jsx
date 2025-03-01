import {NavLink} from 'react-router-dom'
import airplane from '../img/plane.png'
import '../../css/header.css'
import userLogo from '../img/user.png'
const Header = () => {
    return (
        <div className='header'>
            <nav>
            <NavLink to="/" className='logo'><img src={airplane} alt="" width={40}/>Travel Booking</NavLink>
                <ul>
                    <li>
                        <NavLink to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink>Vé máy bay</NavLink>
                    </li>
                    <li>
                        <NavLink>Vé xe khách</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Liên hệ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='user'>
                <NavLink to="/adminlogin" className="loginLogo"><img src={userLogo} alt="" width={20}/>Đăng nhập</NavLink>
                <NavLink  className="registerLogo">Đăng ký</NavLink>
            </div>
        </div>
    );

}

export default Header;