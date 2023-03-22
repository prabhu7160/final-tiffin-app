import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import DeliveryBoyList from "../../Components/DeliveryBoyList";
const CustomerListAdmin=()=>{
const [users,setusers]=useState([])
const getAllCustomers = () => {
    const url = `http://localhost:8082/CustomerList`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setusers(result["data"]);
        
      }
    });
  };
  useEffect(() => {
    if(sessionStorage['loginStatus'] == 1){

    getAllCustomers()
    }
  }, []);
    return (
        <div>
            <Link  to="/ActiveCustomers">
            <button type="button" class="btn btn-warning">Get Active Customers</button>
            </Link>
            <h1 style={{textAlign:"center"}}>Customers List</h1>
            <br/><br/>
              <div class="row">
    <div class="col">
      
    </div>
    <div class="col-10">
        <table class="table  table-dark table-striped">
     

        <thead class="table-primary">
        <th>userId</th>
            <th>userName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Adhar</th>
            
            </thead>
            <tbody>

        {users.map((user) => {
                      
                      return <DeliveryBoyList user={user} />;
                    })}
                    </tbody>
            </table>

    </div>
    <div class="col">
      
    </div>
  </div>
        </div>
    )
}
export default CustomerListAdmin