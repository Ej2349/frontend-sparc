import React, { Component } from 'react'
import axios from 'axios'

class CustomerDetailsAPIServices extends Component {
  
    retriveCustomer() {
        return axios.get("http://127.0.0.2:8080/customerDetails");
    }
    createCustomer(values) {
        return axios.post("http://127.0.0.2:8080/createCustomer", values)
    }
}

export default new CustomerDetailsAPIServices;
