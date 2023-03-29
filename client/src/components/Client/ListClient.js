import React,{useEffect,useState} from 'react'
import { deleteClient, getClients } from '../../Redux/Actions/client';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';

function ListClient() {
    const [Search, setSearch] = useState('');

    const dispatch = useDispatch();
    const client = useSelector((state) => state.client);
    const {loading, clients } =client ;
  
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
       
        useEffect(()=>{
            dispatch(getClients())
        },[])
  return loading||clients===null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List clients</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active">Data</li>
        </ol>
    </div>
    <div class="form-inline">
              <input value={Search} className="form-control mr-sm-2" type="text" onChange={(e)=>handleChange(e)} id="main-search" placeholder="Search" />
              </div>
    <hr class="border-light container-m--x "/>

                        <table class="table fixtablelistebooks">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Code Client</th>
                                    <th>LibelleClient</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Telephone2</th>
                                    <th>Adresse</th>
                                    <th>Ville</th>
                                    <th>CodePostal</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {clients.filter(el =>
                            el.Email.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`client${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.Code}</td>
                                    <td>{x.LibelleClient}</td>
                                 <td>{x.Email}</td>

                                 <td>{x.Tel}</td>
                                 <td>{x.Tel2}</td>
                                 <td>{x.Adresse}</td>
                                 <td>{x.Ville}</td>
                                 <td>{x.CodePostal}</td>
                                 <Link to={`/edit-client?_id=${x._id}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteClient(x._id))}  className='btn btn-danger'>Delete</button></td>

                           
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListClient