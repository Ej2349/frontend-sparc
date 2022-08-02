import axios from 'axios'
import React, { Component } from 'react'

class SparcAPIServices extends Component {

     retriveAllServices() {
        return axios.get("http://127.0.0.2:8000/services");
    }

    createAppointment(values) {
        return axios.post("http://127.0.0.2:8000/appointment", values)
    }
   
}

export default new SparcAPIServices;
