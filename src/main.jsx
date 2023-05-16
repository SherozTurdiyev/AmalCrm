import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import 'antd/dist/antd'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Statistika from './pages/Statistika/index'
import Oquvchilar from './pages/Oquvchilar/index'
import Oqituvchilar from './pages/Oqituvchilar/index'
import Bildirishnoma from './pages/Bildirishnoma/index'
import Moliya from './pages/Moliya/index'
import Guruhlar from './pages/Guruhlar/index'
import Ota_Onalar from './pages/Ota_Onalar/index'
import Habarlar from './pages/Habarlar/index'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ApexCharts from 'apexcharts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/Statistika' element={<Statistika/>}/>
          <Route path='/Oquvchilar' element={<Oquvchilar/>}/>
          <Route path='/Oqituvchilar' element={<Oqituvchilar/>}/>
          <Route path='/Bildirishnoma' element={<Bildirishnoma/>}/>
          <Route path='/Moliya' element={<Moliya/>}/>
          <Route path='/Guruhlar' element={<Guruhlar/>}/>
          <Route path='/Ota_Onalar' element={<Ota_Onalar/>}/>
          <Route path='/Habarlar' element={<Habarlar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
