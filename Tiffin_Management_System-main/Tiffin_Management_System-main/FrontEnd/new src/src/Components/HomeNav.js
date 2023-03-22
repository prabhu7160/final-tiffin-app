import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Link } from 'react-router-dom'
import './index.css'

const homeNav = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/Home'>
          E-dabba
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link ' to='/Aboutus'>
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/Signin'
                style={{ 'margin-right': '10px' }}>
                Signin
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Signup'
                className='link btn btn-primary btn-sm'
                style={{ 'margin-right': '10px' }}>
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default homeNav
