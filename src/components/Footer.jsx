import '../../css/footer.css'
import airplane from '../img/plane.png'
import { NavLink } from 'react-router-dom';
import fblogo from '../img/facebook.png'
import inslogo from '../img/instagram.png'
import tiktoklogo from '../img/tiktok.png'
import telelogo from '../img/telegram.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className='column'>
                <NavLink to="/" className='logo'><img src={airplane} alt="" width={40}/>Travel Booking</NavLink>
            </div>
            <div className='column'>
                <h3>Sản phẩm</h3>
            </div>
            <div className='column'>
                <h3>Về chúng tôi</h3>
                <div className='socialMedia'>
                    <img src={fblogo} alt="" />
                    <p>Facebook</p>
                </div>
                <div className='socialMedia'>
                    <img src={inslogo} alt="" />
                    <p>Instagram</p>
                </div>
                <div className='socialMedia'>
                    <img src={telelogo} alt="" />  
                    <p>Telegram</p>   
                </div>
                <div className='socialMedia'>
                    <img src={tiktoklogo} alt="" />
                    <p>Tiktok</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;