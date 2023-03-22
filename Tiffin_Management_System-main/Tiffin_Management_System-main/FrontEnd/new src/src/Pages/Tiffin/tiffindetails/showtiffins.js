import { useState } from 'react'
import Tiffin from './tiffin'
import axios from 'axios'
import { useEffect } from 'react'
import UserNav from '../../../Components/UserNav'

const ShowTiffins = () => {
  const [tiffins, setTiffins] = useState([])

  const searchTiffins = () => {
    const url = 'http://localhost:8082/tiffin/details'
    axios.get(url).then((response) => {
      const result = response.data
      setTiffins(result['data'])
      console.log(tiffins)
      // if (result!=null) {
      //   setTiffins(result)

      // } else {
      //   alert('something went wrong..')
      // }
    })
  }

  useEffect(() => {
    searchTiffins()
    console.log('getting called')
  }, [])

  return (
    <div>
      <UserNav />
      <div className='row' style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div className='col'>
          <div class='row row-cols-1 row-cols-md-3 g-4'>
            {tiffins.map((tiffin) => {
              console.log(tiffin)
              return (
                <div class='col'>
                  <Tiffin tiffin={tiffin} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTiffins
