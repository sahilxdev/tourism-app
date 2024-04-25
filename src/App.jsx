import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppBar from './components/AppBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CabsPage from './pages/CabsPage'
import Trekking from './pages/Trekking'
import WaterSports from './pages/WaterSports'
import FerryTracking from './pages/FerryTracking'
import ShopPage from './pages/ShopPage'
import DiningPage from './pages/DiningPage'
import BusPage from './pages/BusPage'
import Packages from './pages/Packages'
import PgPage from './pages/PgPage'
import Hotels from './pages/Hotels'
import Flights from './pages/Flights'
import Ships from './pages/Ships'
import FormPage from './pages/FormPage'




function App() {


  return (
    <div>
      <AppBar/>


      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/dining' element={<DiningPage/>}  />
          <Route path='/trekking' element={<Trekking/>}  />
          <Route path='/water-sports' element={<WaterSports/>}  />
          <Route path='/ferries' element={<FerryTracking/>}  />
          <Route path='/cabs' element={<CabsPage/>}  />
          <Route path='/shop' element={<ShopPage/>}  /> 
          <Route path='/bus' element={<BusPage/>}  /> 
          <Route path='/packages' element={<Packages/>}  /> 
          <Route path='/pg' element={<PgPage/>}  /> 
          <Route path='/hotels' element={<Hotels/>}  /> 
          <Route path='/' element={<Flights/>}  /> 
          <Route path='/ships' element={<Ships/>}  /> 
          <Route path='/hotel-form' element={<FormPage/>}  /> 
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  )
}

export default App
