import axios from 'axios'
import OrderDetails from '../../Components/OrderDetails'
import { useEffect, useState } from 'react'
import AdminNav from '../../Components/AdminNav'

const AssignOrders = () => {
  const [Orders, setdayWiseorder] = useState([])

  const Assignorders = () => {
    const url = `http://localhost:8082/daywiseOrder/ListOfOrders`

    axios.post(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        // navigate('/home')

        setdayWiseorder(result['data'])
      } else {
        alert(result.error)
      }
    })
  }

  useEffect(() => {
    Assignorders()
  }, [])

  return (
    <div>
      <AdminNav />
      <h1 style={{ textAlign: 'center' }}>Orders List</h1>
      <br />
      <br />
      <div class='row'>
        <div class='col'></div>
        <div class='col-10'>
          <table class='table  table-dark table-striped'>
            <thead class='table-primary'>
              <th>userName</th>
              <th>user_address</th>
              <th>Area</th>
              <th>City</th>
              <th>Pincode</th>
              <th>OrderId</th>
              <th>Assign Delivery Boy</th>
            </thead>
            <tbody>
              {Orders.map((order) => {
                return <OrderDetails order={order} />
              })}
            </tbody>
          </table>
        </div>
        <div class='col'></div>
      </div>
    </div>
  )
}
export default AssignOrders
