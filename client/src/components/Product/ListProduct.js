import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../Redux/Actions/product';

function ListProduct() {
    const [Search, setSearch] = useState('');
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const {loading, products } =product ;
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
        useEffect(()=>{
            dispatch(getProducts())
        },[])
  return loading||products===null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List Product</h4>
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
                                    <th>Code Product</th>
                                    <th>Famille</th>
                                    <th>P_achat</th>
                                    <th>P_Vente</th>
                                    <th>quantity</th>
                                    <th>Fournisseur</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {products.filter(el =>
                            el.Code.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`product${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.Code}</td>
                                    <td>{x.Famille}</td>
                                 <td>{x.P_achat}</td>
                                 <td>{x.P_Vente}</td>
                                 <td>{x.quantity}</td>
                                 <td>{x.Fournisseur?.LibelleFour    }</td>
                                 <Link to={`/edit-product?_id=${x._id}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteProduct(x._id))}  className='btn btn-danger'>Delete</button></td>
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListProduct