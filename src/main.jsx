import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApexCharts from 'apexcharts';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PageLoader from './components/shared/PageLoader/PageLoader'

const Login = lazy(() => import('./pages/Login/Login'))
const Statistika = lazy(() => import("./pages/Statistika/index"))
const Oquvchilar = lazy(() => import('./pages/Oquvchilar'))
const Oqituvchilar = lazy(() => import('./pages/Oqituvchilar'))
const Bildirishnoma = lazy(() => import('./pages/Bildirishnoma'))
const Moliya = lazy(() => import('./pages/Moliya'))
const Guruhlar = lazy(() => import('./pages/Guruhlar'))
const Ota_Onalar = lazy(() => import('./pages/Ota_Onalar'))
const Habarlar = lazy(() => import('./pages/Habarlar'))
const StudentInfo = lazy(()=>import('./pages/SingleStudent'))
const SingleTeacher = lazy(()=>import('./pages/Oqituvchilar/SingleTeacher'))
const clientQuery = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/' element={<App />}>
              <Route path='/Statistika' element={<Statistika />} />
              <Route path='/Oquvchilar' element={<Oquvchilar />} />
              <Route path='/Oqituvchilar' element={<Oqituvchilar />} />
              <Route path='/Bildirishnoma' element={<Bildirishnoma />} />
              <Route path='/Moliya' element={<Moliya />} />
              <Route path='/Guruhlar' element={<Guruhlar />} />
              <Route path='/Ota_Onalar' element={<Ota_Onalar />} />
              <Route path='/Habarlar' element={<Habarlar />} />
              <Route path='/student/:id' element={<StudentInfo />} />
              <Route path="/teacher/:id" element={<SingleTeacher />} />
            </Route>
          </Routes>
        </Suspense>

      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
