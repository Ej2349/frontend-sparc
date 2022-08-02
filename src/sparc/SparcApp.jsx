import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutComponent from '../components/about/AboutComponent';
import HomeComponent from '../components/home/HomeComponent';
import ServiceComponent from '../components/services/ServiceComponent';
import NavigationBars from   '../components/navigationBar/NavigationBars';
import './SparcApp.scss';
import AppointmentComponent from '../components/appointment/AppointmentComponent';
import CustomerDetail from '../components/customerDetail/CustomerDetail';

class SparcApp extends Component {
  render() {
    return (
      <div>
        <NavigationBars/>
        <Router>
          <Routes>
            <Route path='/' exact element={<HomeComponent/>}/>
            <Route path='/about' element={<AboutComponent/>}/>
            <Route path='/services' element={<ServiceComponent/>}/>
            <Route path='/appointment' element={<AppointmentComponent/>}/>
            <Route path='/customer' element={<CustomerDetail/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default SparcApp;