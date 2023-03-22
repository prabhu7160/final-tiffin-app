import axios from 'axios'
import DeliveryBoyList from '../../Components/DeliveryBoyList'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNav from '../../Components/AdminNav'

const DeliveryBoyManagement = () => {
  const [DeliveryBoys, setDeliveryBoys] = useState([])
  const getDeliveryBoys = () => {
    const url = `http://localhost:8082/DeliveryBoys`
    axios.post(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        // navigate('/home')
        console.log(result['data'])
        setDeliveryBoys(result['data'])
      } else {
        alert(result.error)
      }
    })
  }

  useEffect(() => {
    if (sessionStorage['loginStatus'] == 1) getDeliveryBoys()
  }, [])
  return (
    <div>
      <AdminNav />
      <Link to='/AddDeliveryBoy'>
        <button type='button' class='btn btn-warning'>
          Add Delivery Boy
        </button>
      </Link>
      <h1 style={{ textAlign: 'center' }}>Delivery Boys List</h1>
      <br />
      <br />
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table class='table  table-dark table-striped'>
            <thead class='table-primary'>
              <th>userId</th>
              <th>userName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Adhar</th>

              <th>Delete</th>
            </thead>
            <tbody>
              {DeliveryBoys.map((user) => {
                return (
                  <DeliveryBoyList
                    user={user}
                    getDeliveryBoys={getDeliveryBoys}
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
export default DeliveryBoyManagement
