import axios from "axios";
import { useEffect, useState } from "react";
import DaywiseOrder from "../../Components/DaywiseOrder";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import "./index.css";
import { toast } from "react-toastify";
const AdminHome = () => {
  const [daywiseOrder, setdayWiseorder] = useState([]);
  const [daywisedispatched,setdaywisedispatched]=useState([]);
  const [daywisedelivered,setdaywisedelivered]=useState([]);
  const GetPendingOrders = () => {
    const { id} =sessionStorage
 
    const url = `http://localhost:8082/daywiseOrder/countpending`;
    axios.post(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setdayWiseorder(result["data"]);
        
      }
    });
  };
  const GetDispatched=()=>{
    const url = `http://localhost:8082/daywiseOrder/countDispatched`;
    axios.post(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setdaywisedispatched(result["data"]);
        
      }
    });
  }
  const GetDelivered=()=>{
    const url = `http://localhost:8082/daywiseOrder/countDelivered`;
    axios.post(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setdaywisedelivered(result["data"]);
        
      }
    });
  }
  const fetchOrders=()=>{
    const url = `http://localhost:8082/daywiseOrder/addallorders`;
    axios.post(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        GetPendingOrders();
        GetDispatched();
      }
    });
  }
  const navigate = useNavigate()
  const Logout=()=>{
    sessionStorage['id'] = null
    console.log(sessionStorage['id'] )
      sessionStorage['loginStatus'] = null;
      navigate('/signin')
  }

  useEffect(() => {
    if(sessionStorage['loginStatus'] == 1){
     // toast.success("welcome to the Admin Dashboard");
      console.log(`${sessionStorage['loginStatus']}`)
    GetPendingOrders();
    GetDispatched()
    GetDelivered()
    GetDelivered()
    }
  }, []);
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "skyblue" }}
      >
        <a class="navbar-brand" href="#">
          Admin Panel
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">

         
            <Link className="nav-link"  to="/DeliveryBoyManagement">Delivery boy management</Link>
           
            </li>
            <li class="nav-item">
            <Link className="nav-link"  to="/CustomerListAdmin">Customers List</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to ="/AdminTiffin">
                Tiffin Management
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to ="/AdminDeliveryAddrees">
                Delivery Address Management
              </Link>
            </li>
          </ul>
        
        </div>
        <button  type="submit"   onClick={Logout} class="btn btn-danger">Logout</button>
      </nav>
      <button class="btn btn-warning" onClick={fetchOrders} >Fetch todays Orders</button>
      <br/>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-2">
         
          </div>
          <div class="col-sm">
            <div className="card" style={{  backgroundColor: "#D7DBDD"  }}>
              <h5 class="card-title">Pending Orders</h5>

              <hr />
              {daywiseOrder.length>0 &&
              <div className="card-body">
                <table border="1">
                  <thead>
                    <tr>
                      <th class="bg-success">Tiffin Name</th>

                      <th className="bg-success">Tiffin Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daywiseOrder.map((order) => {
                      <tr></tr>;
                      return <DaywiseOrder order={order} />;
                    })}
                  </tbody>
                </table>
                <Link to="/AssignOrders">
                <button class="btn btn-success" >Assign Delivery Boy</button>
                </Link>
              </div>
}
{
  daywiseOrder.length==0 && <div><span class="badge bg-warning text-dark">No Pending Orders</span>  </div>
}
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>


<hr/>
<br />

<br/>

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-sm">
            <div className="card" style={{ backgroundColor: "#D7DBDD" }}>
              <h5 class="card-title">Dispatched  Orders</h5>

              <hr />
              {daywisedispatched.length>0 && 
              <div className="card-body">
                <table border="1">
                  <thead>
                    <tr>
                      <th class="bg-">Tiffin Name</th>

                      <th className="">Tiffin Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daywisedispatched.map((order) => {
                      <tr></tr>;
                      return <DaywiseOrder order={order} />;
                    })}
                  </tbody>
                </table>
                <Link to="/DispatchedOrders">
                <button class="btn btn-success" >Dispatched Orders</button>
                </Link>
              </div>
}
{daywisedispatched.length==0 && <div><span class="badge bg-warning text-dark">No dispatched Orders</span> </div> }
            </div>
                  
                  
          </div>
          <div class="col-md-2"></div>
        </div>

        <hr/>
<br />

<br/>

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-sm">
            <div className="card" style={{ backgroundColor: "#D7DBDD" }}>
              <h5 class="card-title">Delivered   Orders</h5>

              <hr />
              {daywisedelivered.length>0 && 
              <div className="card-body">
                <table border="1">
                  <thead>
                    <tr>
                      <th class="bg-">Tiffin Name</th>

                      <th className="">Tiffin Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daywisedelivered.map((order) => {
                      <tr></tr>;
                      return <DaywiseOrder order={order} />;
                    })}
                  </tbody>
                </table>
                <Link to="/DeliveredOrders">
                <button class="btn btn-success" >Delivered Orders</button>
                </Link>
              </div>
}
{daywisedelivered.length==0 && <div><span class="badge bg-warning text-dark">No Delivered Orders</span> </div> }
            </div>
                  
                  
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
