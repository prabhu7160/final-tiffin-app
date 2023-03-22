import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const Signup=()=>{

 
const navigate = useNavigate()
    const [userName, setusername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [phone, setphone] = useState('')
    const [role, setrole] = useState('user')
    const [aadharNo, setadhar] = useState('')

    const signupUser=()=>{
      setrole('user')
      
        const body={
          userName,email,password,phone,role,aadharNo
        }
        const url=`http://localhost:8082/signup/users`
        if(userName.length==0){
          toast.warning("Please enter username")
        }
       else if(email.length ==0){
          toast.warning("Please enter email")
        }
       else if(password.length ==0 ){
          toast.warning("Please enter password")
        }
       else if(phone.length==0){
          toast.warning("Please enter phone number")
        }
     
       else  if(aadharNo.length ==0){
          toast.warning("Please enter adhar no")
        }
else{
  axios.post(url,body).then((response)=>{
       
    const result=response.data
    if(result['status']=='success'){
        navigate('/home')
    }
    else{
        alert(result.error)
    }
})
}
       
    }
    useEffect(()=>{
      toast.info("Welcome to E-dabba")
    },[])
    return (
        <div style={{backgroundColor:"aliceblue",paddingBottom:300}}>
        <h1 className="title" style={{textAlign:"center", paddingBottom:30}}>SignUp</h1>
  
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  username
                </label>
                <input
                  onChange={(e) => {
                    setusername(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
  
             
  
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                   setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setpassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>
  
              

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  phone
                </label>
                <input
                  onChange={(e) => {
                   setphone (e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
          
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  adharno
                </label>
                <input
                  onChange={(e) => {
                    setadhar(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
  
              <div className="mb-3">
              
                <button onClick={signupUser} className="btn btn-primary">
                  Signup
                </button>
              </div>
              
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
            
    )
}
export default Signup