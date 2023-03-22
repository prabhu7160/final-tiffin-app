import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import AdminNav from '../../../Components/AdminNav'

const TiffinDetailsData = () => {
  const [tiffin, setTiffin] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const tf = location.state.tiffinId
  const loadTiffin = () => {
    const id = tf
    console.log(`sasas${id}`)
    const url = `http://localhost:8082/tiffinDetail/${id}`
    const body = {
      tiffinId: tf,
    }

    axios.post(url, body).then((response) => {
      const result = response.data
      if (result['status'] === 'success') {
        setTiffin(result['data'])
        console.log(result['data'])
        sessionStorage.setItem('tiffinId', result.data.tiffinId)
      }
    })
  }

  const nav = () => {
    navigate('/editTiffin', { state: { tiffinId: tf } })
  }

  useEffect(() => {
    loadTiffin()
  }, [])

  return (
    <div class='container'>
      <div class='row'>
        <AdminNav />
        <div class='col'>
          <br />
          <br />
          <br />

          <table
            class='table table-dark table-striped'
            style={{ textAlign: 'center', height: '115%' }}>
            <tbody>
              <tr>
                <td>Tiffin ID</td>
                <td>{tiffin.tiffinId}</td>
              </tr>
              <tr>
                <td>Tiffin Name</td>
                <td>{tiffin.tiffinName}</td>
              </tr>
              {/* <tr>
                                <td>Tiffin Image</td>
                                <td>{tiffin.tiffinImage}</td>
                            </tr> */}
              <tr>
                <td>Tiffin Price</td>
                <td>{tiffin.tiffinPrice}</td>
              </tr>
              <tr>
                <td>Tiffin Description</td>
                <td>{tiffin.description}</td>
              </tr>
            </tbody>
          </table>
          <div className='mb-3' style={{ textAlign: 'center' }}>
            <button onClick={nav} className='btn btn-danger float-center'>
              Edit Tiffin Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiffinDetailsData
