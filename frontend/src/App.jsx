import React from 'react'

      // Style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bs-stepper/dist/css/bs-stepper.min.css'; 
import './App.css'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

      // screens
import { HomeScreen } from './screens/HomeScreen'
import { AboutScreen } from './screens/AboutScreen'
import { ContactScreen } from './screens/ContactScreen'
import { PackageScreen } from './screens/PackageScreen'
import { PackageDetailScreen } from './screens/PackageDetailScreen'
import { BookingScreen } from './screens/BookingScreen'

import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'


import { BlogNewsCard } from './components/BlogNewsCard'

      // Routes
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute";
        

const App = () => {
  return (
    <div>

        <main>
            <Routes>

              <Route path='/' element={ <HomeScreen /> } />
              <Route path='/about' element={ <AboutScreen /> } />
              <Route path='/contact' element={ <ContactScreen /> } />
              <Route path='/packages' element={ <PackageScreen /> } />
              <Route path="/package-details" element={<PackageDetailScreen />} />
              <Route path='/book' element={ <ProtectedRoute> <BookingScreen /> </ProtectedRoute> } />

              <Route path='/login' element={ <LoginScreen /> } />
              <Route path='/register' element={ <RegisterScreen />} />

              <Route path="/blog/:id" element={ <BlogNewsCard />} />

            </Routes>
        </main>

        <ToastContainer />

    </div>
  )
}

export default App
