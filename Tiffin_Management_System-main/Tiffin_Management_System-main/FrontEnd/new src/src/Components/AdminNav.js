import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const AdminNav = () => {
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage['id'] = null
    console.log(sessionStorage['id'])
    sessionStorage['loginStatus'] = null
    navigate('/signin')
  }
  return (
    <nav
      class='navbar navbar-expand-lg navbar-light bg-light'
      style={{ backgroundColor: 'skyblue' }}>
      <a class='navbar-brand' href='/Admin'>
        Admin Panel
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <Link className='nav-link' to='/DeliveryBoyManagement'>
              Delivery boy management
            </Link>
          </li>
          <li class='nav-item'>
            <Link className='nav-link' to='/CustomerListAdmin'>
              Customers List
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link ' to='/AdminTiffin'>
              Tiffin Management
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link ' to='/AdminDeliveryAddrees'>
              Delivery Address Management
            </Link>
          </li>
        </ul>
      </div>
      <button type='submit' onClick={Logout} class='btn btn-danger'>
        Logout
      </button>
    </nav>
  )
}

export default AdminNav
