import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const EditTiffin = () => {
    const [edit, setEdit] = useState([])
    const [tiffin, setTiffin] = useState([])

    const [tiffinId, setTiffinId] = useState('')
    const [tiffinName, setTiffinName] = useState('')
    const [tiffinImage, setTiffinImage] = useState('')
    const [tiffinPrice, setTiffinPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()
    const location = useLocation();
    const tf=location.state.tiffinId
    const loadTiffin = () => {
        const id=tf
        const url = `http://localhost:8082/tiffinDetail/${id}`
        const body = {
            // tiffinId: sessionStorage.getItem("tiffinId")
            tiffinId:id
            // tiffinId: 2
        }
//console.log(tiffinid)
        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                setTiffin(result['data'])
                
                setTiffinId(result.data.tiffinId)
                setTiffinName(result.data.tiffinName)
                setTiffinImage(result.data.tiffinImage)
                setTiffinPrice(result.data.tiffinPrice)
                setDescription(result.data.description)
            }
        })
    }
    const editTiffin = () => {
        const id=tf
        console.log(tf)
        const url = `http://localhost:8082/tiffin/updateTiffin/${id}`

        const body = {
           tiffinId:id,
            tiffinName,
            tiffinImage, 
            tiffinPrice,
            description
        }
        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                setEdit(result['data'])
                console.log(result['data'])
                navigate("/tiffinDetailsData",{state:{tiffinId:id}})
            }
        })    
    }
    useEffect(() => {
        loadTiffin()
    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <br /><br /><br />
                    <table class="table table-dark table-striped" style={{ textAlign: "center", height: "115%" }}>
                        <tbody>
                            <tr>
                                <td>Tiffin ID</td>
                                <td> <input type="number" readOnly="readOnly" value={tiffin.tiffinId}></input></td>
                            </tr>
                            <tr>
                                <td>Tiffin Name</td>
                                <td> <input type="text" onChange={(e) => { setTiffinName(e.target.value) }} placeholder={tiffin.tiffinName}></input></td>
                            </tr>
                            <tr>
                                <td>Tiffin Image</td>
                            <td><input accept="image/*" onChange={(e) => { setTiffinImage(e.target.value) }} placeholder={tiffin.tiffinImage}></input></td>
                             </tr>
                            <tr>
                                <td>Tiffin Price</td>
                                <td> <input type="number" onChange={(e) => { setTiffinPrice(e.target.value) }} placeholder={tiffin.tiffinPrice} ></input></td>
                            </tr>
                            <tr>
                                <td>Tiffin Description</td>
                                {/* <td> <input type="text" onChange={(e) => { setDescription(e.target.value) }} placeholder={tiffin.description} ></input></td> */}
                                <td>
                                    <textarea
                                        onChange={(e) => {
                                            setDescription(e.target.value)
                                        }}
                                        rows="5"
                                        placeholder={tiffin.description}
                                        className="form-control"
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        
                        <button onClick={editTiffin} className='btn btn-success float-center'>Save Tiffin Details</button>
                        <Link to="/Admin">        <button className="btn btn-success">  Back </button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTiffin