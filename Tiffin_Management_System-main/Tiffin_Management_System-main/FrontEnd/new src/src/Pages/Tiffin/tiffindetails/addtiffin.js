// import axios from 'axios'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const AddTiffin = () => {
//     const [tiffinName, setTiffinName] = useState('')
//     const [tiffinPrice, setTiffinPrice] = useState('')
//     const [description, setDescription] = useState('')

//     const navigate = useNavigate()

//     const save = () => {
//         if (tiffinName.length == 0) {
//           alert('please enter tiffin name')
//         } else if (tiffinPrice.length == 0) {
//           alert('please enter price')
//         } else if (description.length == 0) {
//           alert('please enter contents')
//         } else {
//           const body = {
//             tiffinName,
//             tiffinPrice,
//             description,
//           }
//           const url = 'http://localhost:8082/tiffin/addTiffin'
//           axios.post(url, body).then((response) => {
//             const result = response.data
//             if (result!=null) {
//               alert('added new Tiffin..')
//               navigate('/showTiffin')
//             } else {
//               alert('tiffin not added..')
//             }
//           })
//         }

//     }

//     return (
//         <div class="row">
//           <div class="col" />
//           <div class="col">
//           <h1 className="title" >Add Tiffin</h1>

//         <div className="form">
//           <div className="mb-3">
//             <label htmlFor="" className="label-control">
//               Tiffin Name
//             </label>
//             <input
//               onChange={(e) => {
//                   setTiffinName(e.target.value)
//               }}
//               type="text"
//               className="form-control"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="" className="label-control">
//               Tiffin Price
//             </label>
//             <input
//               onChange={(e) => {
//                   setTiffinPrice(e.target.value)
//               }}
//               type="text"
//               className="form-control"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="" className="label-control">
//               Description
//             </label>
//             <textarea
//               onChange={(e) => {
//                   setDescription(e.target.value)
//               }}
//               rows="5"
//               className="form-control"
//             ></textarea>
//           </div>

//           <div className="mb-3">
//             <button onClick={save} className="btn btn-success">
//               Add
//             </button>
//             <Link to="/" className="btn btn-danger float-end">
//               Cancel
//             </Link>
//           </div>

//         </div>
//           </div>
//           <div class="col" />
//         </div>

//         )
// }

// export default AddTiffin
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminNav from '../../../Components/AdminNav'

const AddTiffin = () => {
  const [tiffinImage, setTiffinImage] = useState(undefined)
  const [tiffinName, setTiffinName] = useState('')
  const [tiffinPrice, setTiffinPrice] = useState(100)
  const [description, setDescription] = useState('')

  //const navigate = useNavigate()
  const navigate = useNavigate()

  const onFileSelect = (event) => {
    setTiffinImage(event.target.files[0])
  }

  const save = () => {
    if (tiffinName.length == 0) {
      alert('please enter tiffin name')
    } else if (tiffinPrice.length == 0) {
      alert('please enter price')
    } else if (description.length == 0) {
      alert('please enter contents')
    } else {
      const body = {
        tiffinImage,
        tiffinName,
        tiffinPrice,
        description,
      }
      const price = tiffinPrice
      const data = new FormData()

      data.append('tiffinImage', tiffinImage)
      data.append('tiffinName', tiffinName)
      data.append('tiffinPrice', price)
      data.append('description', description)

      console.log(`${tiffinName} ${price} ${description} ${tiffinImage}`)
      const url = 'http://localhost:8082/tiffin/addTiffin'
      axios.post(url, data).then((response) => {
        const result = response.data
        if (result != null) {
          toast('added new Tiffin..')
          // alert('added new Tiffin..')

          navigate('/AdminTiffin')
        } else {
          toast('tiffin not added..')
          //alert('tiffin not added..')
        }
      })
    }
  }

  return (
    <div class='row'>
      <AdminNav />
      <div class='col' />
      <div class='col'>
        <h1 className='title'>Add Tiffin</h1>

        <div className='form'>
          <div className='mb-3'>
            <label htmlFor='' className='label-control'>
              Tiffin Name
            </label>
            <input
              onChange={(e) => {
                setTiffinName(e.target.value)
              }}
              type='text'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='' className='label-control'>
              Tiffin Price
            </label>
            <input
              onChange={(e) => {
                setTiffinPrice(e.target.value)
              }}
              type='text'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <input
              accept='image/*'
              onChange={onFileSelect}
              type='file'
              className='form-control'
            />
            <label htmlFor=''>
              <b>Image</b>
            </label>
          </div>

          <div className='mb-3'>
            <label htmlFor='' className='label-control'>
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              rows='5'
              className='form-control'></textarea>
          </div>

          <div className='mb-3'>
            <button onClick={save} className='btn btn-success'>
              Add
            </button>
            <Link to='/' className='btn btn-danger float-end'>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div class='col' />
    </div>
  )
}

export default AddTiffin
