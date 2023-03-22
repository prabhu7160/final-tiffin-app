import { useNavigate } from 'react-router'

const UserNav = () => {
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage['id'] = null
    console.log(sessionStorage['id'])
    sessionStorage['loginStatus'] = null
    navigate('/signin')
  }
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand' href='/showTiffin' style={{ fontWeight: 'bold' }}>
        {' '}
        E-dabba
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='/address'>
              Add Address{' '}
            </a>
          </li>
          <li class='nav-item active'>
            <a class='nav-link' href='/userProfile'>
              Edit profile{' '}
            </a>
          </li>
        </ul>
      </div>
      <button type='submit' onClick={Logout} class='btn btn-danger'>
        Logout
      </button>
    </nav>
  )
}
export default UserNav
