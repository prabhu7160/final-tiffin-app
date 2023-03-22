import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import HomeNav from '../../Components/HomeNav'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `http://localhost:8082/user/email`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['data'] != null) {
           toast.success('Welcome to the application')

          // get the data sent by server
          const { userId } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = userId
          console.log(sessionStorage['id'])
          sessionStorage['loginStatus'] = 1
          if (result['data'].role == 'admin') navigate('/Admin')
          else if (result['data'].role == 'delivery') {
            navigate('/Delivery')
          } else navigate('/showTiffin')
          // navigate to home component
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className='bor'>
      <HomeNav />
      <h1 className='title' style={{ textAlign: 'center' }}>
        SignIn
      </h1>
      <br />
      <br />
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form' style={{ border: 1 }}>
            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='' className='label-control'>
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type='password'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <div>
                No account yet? <Link to='/signup'>Signup here</Link>
              </div>
              <button onClick={signinUser} className='btn btn-primary'>
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Signin
