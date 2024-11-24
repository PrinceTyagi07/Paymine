import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Services from './Pages/Services'
import Login from './Pages/Login'

import BBPS from './Pages/Software/BBPS'
import MPOS from './Pages/Software/MPOS'
import ABES from './Pages/Software/ABES'
import PANServices from './Pages/Software/PANServices'
import AndroidAppDevelopment from './Pages/Software/Android-App-Development'
import RechargeSoftware from './Pages/Software/Recharge-Software'
import AEPSAPI from './Pages/APIServices/AEPSAPI'
import MoneyTransferApi from './Pages/APIServices/MoneyTransferApi'
import PANApi from './Pages/APIServices/PANApi'
import RechargeApi from './Pages/APIServices/RechargeApi'
import UPICollectionApi from './Pages/APIServices/UPICollectionApi'
import Footer from './Pages/Footer/Footer'
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy'
import RefundPolicy from './Pages/Footer/RefundPolicy'
import TermsConditions from './Pages/Footer/Terms&Conditions'
const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />

      
        <Route path="/aeps" element={<ABES/>} />
        <Route path="/android-App-Development" element={<AndroidAppDevelopment/>} />
        <Route path="/bbps" element={<BBPS />} />
        <Route path="/mpos" element={<MPOS/>} />
        <Route path="/panservices" element={<PANServices/>} />
        <Route path="/Recharge-Software" element={<RechargeSoftware/>} />
        
        <Route path="/apes-api" element={<AEPSAPI/>} />
        <Route path="/moneytransfer-api" element={<MoneyTransferApi/>} />
        <Route path="/pan-api" element={<PANApi/>} />
        <Route path="/recharge-api" element={<RechargeApi/>} />
        <Route path="/upicollection-api" element={<UPICollectionApi/>} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />

      </Routes>
     <div className="">
      <Footer/>
     </div>
     
    </div>
  )
}

export default App