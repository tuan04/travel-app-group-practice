import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import FlightSearchForm from './pages/FlightSearch'
import './App.css'
import Resgister from './pages/Resgister'
import HotelDetail from './pages/HotelDetail'
import BusShuttleForm from './pages/BusShuttle'
function App() {

  return (
    <div className='wrapper'> 
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Resgister/>}/>
          <Route path='/hotel/:id' element={<HotelDetail/>}/>
          <Route path='/flysearch' element={<FlightSearchForm/>}/>
          <Route path='/bus' element={<BusShuttleForm/>}/>
        </Routes>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default App
