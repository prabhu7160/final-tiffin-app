import axios from "axios";
import { useEffect, useState } from "react";
import AdminActiveCustomers from '../../Components/AdminActiveCustomers'
const ActiveCustomers=()=>{
    const [users,setusers]=useState([])
    const getAllCustomers = () => {
        const url = `http://localhost:8082/ActiveCutomers`;
        axios.post(url).then((response) => {
          const result = response.data;
          if (result["status"] == "success") {
            setusers(result["data"]);
            console.log(result['data'])
          }
        });
      };
      useEffect(() => {
        getAllCustomers()
      }, []);
    return(
        <div>
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
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Days</th>
            <th>Total Amount</th>
            <th>TiffinId</th>
            </thead>
            <tbody>

        {users.map((user) => {
                      
                      return <AdminActiveCustomers user={user} />;
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
export default ActiveCustomers