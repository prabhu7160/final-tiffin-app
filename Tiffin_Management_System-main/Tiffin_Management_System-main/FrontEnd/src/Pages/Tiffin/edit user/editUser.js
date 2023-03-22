import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditUser = () => {
    const [edit, setEdit] = useState([])
    const [user, setUser] = useState([])

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [aadharNo, setAadharNo] = useState('')

    
    const navigate = useNavigate()
const id=sessionStorage['id'] 
    const loadUser = () => {
        const url = `http://localhost:8082/user/${id}`
        const body = {
            userId:id
        }

        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                setUser(result['data'])
                console.log(result['data'])
                setUserId(result.data.userId)
                setUserName(result.data.userName)
                setPassword(result.data.password)
                setPhone(result.data.phone)
                setRole(result.data.role)
                setAadharNo(result.data.aadharNo)
                setEmail(result.data.email)
            }
        })
    }

    const editUser = () => {
        const url = `http://localhost:8082/user/edit`
        
        const body = {
            userId,
            userName,
            email,
            password,
            phone,
            role,
            aadharNo
        }

        axios.put(url, body).then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
                setEdit(result['data'])
                console.log(result['data'])
                navigate("/userProfile")
            }
        })
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <br /><br /><br />

                    <table class="table table-dark table-striped" style={{ textAlign: "center", height: "115%" }}>
                        <tbody>
                            <tr>
                                <td>User ID</td>
                                <td> <input type="number" readOnly="readOnly" value={user.userId}></input></td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td> <input type="text" readOnly="readOnly" value={user.userName}></input></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td> <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder={user.email} ></input></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td> <input type="text" maxLength={10} onChange={(e) => { setPhone(e.target.value) }} placeholder={user.phone} ></input></td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td> <input type="text" readOnly="readOnly" value={user.role} ></input></td>
                            </tr>
                            <tr>
                                <td>Aadhar Number</td>
                                <td> <input type="text" maxLength={12} required="" onChange={(e) => { setAadharNo(e.target.value) }} placeholder={user.aadharNo} ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <button onClick={editUser} className='btn btn-success float-center'>Save User</button>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser