import React, {useContext} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import {Dropdown, DropdownButton, Button} from "react-bootstrap"

function Sidemenu(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user

  const loading = () => {
    if(!user) return <h5>loading...</h5>
  else return null
  }
  return(
        <ul className="nav flex-column bg-primary sidebar text-white p-2">
    <li className="nav-item text-white">
      <a className="nav-link active text-white" href="#">Dashboard</a>
    </li>
    <li className="nav-item text-white">
      <DropdownButton id="dropdown-basic-button" title="Products">
        <Dropdown.Item href="#/action-1"><Link to="/inventory">Inventory</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to="/addnewproduct">Add New Product</Link></Dropdown.Item>
      </DropdownButton>
    </li>
    <li className="nav-item text-white">
    <Link to="/orders"><Button>Orders</Button></Link>
    </li>
    <li className="nav-item text-white">
      <DropdownButton id="dropdown-basic-button" title="Customers">
        <Dropdown.Item href="#/action-1"><Link to="/customers">Customers</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to="/addnewuser">Add new User</Link></Dropdown.Item>
      </DropdownButton>
    </li>
    <li className="nav-item text-white">
      <Link to="/reports"><Button>Reports</Button></Link>
    </li>
    <li className="nav-item text-white">
      <Link to="/"><Button>Home</Button></Link>
    </li>
    <li className="nav-item text-white">
      <Link to="/"><Button onClick={signOut}>Sign out</Button></Link>
    </li>

  </ul>
  )
}

export default Sidemenu
