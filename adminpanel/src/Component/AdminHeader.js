import React from 'react'
import {useContext} from 'react'
import{Link,useNavigate} from 'react-router-dom'
import {AdminLoginContext} from '../AdminLoginContext'
function AdminHeader() {
  const{adminLoginName,setadminLoginName, adminLoginStatus,setadminLoginStatus}=useContext(AdminLoginContext);
  const navigate = useNavigate()
  function handleLogout() {
    setadminLoginName(localStorage.removeItem('adminLoginName'))
    setadminLoginStatus(localStorage.removeItem('adminLoginStatus'))
    
    
    console.log('hello')
    navigate('/')
}
  return (
    <>
    <section id='header'>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">eShop</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                        {adminLoginStatus?
                                            <>
                                            
                                            <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/admindashboard">Welcome {adminLoginName}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <button onClick={handleLogout} className='btn btn-danger text-light nav-link'>Logout</button>
                                                </li>
                                            </>
                                            :
                                            <>
                                            
                                            </>
                                        }
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AdminHeader