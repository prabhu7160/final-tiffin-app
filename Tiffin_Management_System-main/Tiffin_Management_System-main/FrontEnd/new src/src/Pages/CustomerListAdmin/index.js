import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeliveryBoyList from '../../Components/DeliveryBoyList'
import './style.css'
import AdminNav from '../../Components/AdminNav'

const CustomerListAdmin = () => {
  const [users, setusers] = useState([])

  const getAllCustomers = () => {
    const url = `http://localhost:8082/CustomerList`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setusers(result['data'])
      }
    })
  }

  useEffect(() => {
    if (sessionStorage['loginStatus'] == 1) {
      getAllCustomers()
    }
  }, [])

  return (
    <div>
      <AdminNav />
      <Link to='/ActiveCustomers'>
        <button type='button' class='btn btn-warning mt-4 ms-4'>
          Get Active Customers
        </button>
      </Link>
      <h1 className='title'>Customers List</h1>
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table class='table  table-dark table-striped'>
            <thead class='table-primary'>
              <th>User Id</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Adhar Card No.</th>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <DeliveryBoyList
                    user={user}
                    getAllCustomers={getAllCustomers}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
        <div class='col'></div>
      </div>
    </div>
  )
}
export default CustomerListAdmin
