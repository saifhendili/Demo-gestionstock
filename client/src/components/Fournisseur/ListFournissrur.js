import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { deleteFournisseur, getFournisseurs } from '../../Redux/Actions/fournisseur';

function ListFournissrur() {
    const [Search, setSearch] = useState('');

    const dispatch = useDispatch();
    const fournisseur = useSelector((state) => state.fournisseur);
    const {loading, fournisseurs } =fournisseur ;
  
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
       
        useEffect(()=>{
            dispatch(getFournisseurs())
        },[])
  return loading||fournisseurs===null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List fournisseurs</h4>
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
                                    <th>Code fournisseurs</th>
                                    <th>Libelle fournisseurs</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Telephone2</th>
                                    <th>Adresse</th>
                                    <th>Ville</th>
                                    <th>CodePostal</th>
                                    <th>Fax</th>
                                    <th>RIB</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {fournisseurs.filter(el =>
                            el.LibelleFour.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`fournisseurs${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.Code}</td>
                                 <td>{x.LibelleFour}</td>
                                 <td>{x.Email}</td>
                                 <td>{x.Tel}</td>
                                 <td>{x.Tel2}</td>
                                 <td>{x.Adresse}</td>
                                 <td>{x.Ville}</td>
                                 <td>{x.CodePostal}</td>
                                 <td>{x.Fax}</td>
                                 <td>{x.RIB}</td>
                                 <Link to={`/edit-fournisseur?_id=${x._id}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteFournisseur(x._id))}  className='btn btn-danger'>Delete</button></td>

                           
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListFournissrur