import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';
import { editProduct, getProduct } from '../../Redux/Actions/product';

function EditProduct() {
    const [Famille,setFamille]=useState("")
    const [Code,setCode]=useState("")
    const [P_achat,setP_achat]=useState("")
    const [P_Vente,setP_Vente]=useState("")
    const [quantity,setquantity]=useState("")
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const myproduct= useSelector((state) => state.product);
    const {loading, product } =myproduct;

    useEffect(()=>{
        dispatch(getProduct(searchParams.get("_id")));
      }, []);
      const onsubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct(searchParams.get("_id"),Famille,Code,P_achat,P_Vente,quantity))
    }
  return loading||product==null?<Spinner/>: (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Edit Product</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                    <div class="form-group">
                                        <label class="form-label">Code</label>
                                        <input type="text" class="form-control" name="Code" value={Code} onChange={(e) => setCode(e.target.value)} placeholder={product.Code}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Famille</label>
                                        <input type="text" class="form-control" name="Famille" value={Famille} onChange={(e) => setFamille(e.target.value)} placeholder={product.Famille}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Prix d'achat</label>
                                        <input type="text" class="form-control" name="P_achat" value={P_achat} onChange={(e) => setP_achat(e.target.value)} placeholder={product.P_achat}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Prix de vente</label>
                                        <input type="text" class="form-control" name="P_Vente" value={P_Vente} onChange={(e) => setP_Vente(e.target.value)} placeholder={product.P_Vente}/>
                                        <div class="clearfix"></div>
                                    </div>    <div class="form-group">
                                        <label class="form-label">quantity</label>
                                        <input type="number" class="form-control" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} placeholder={product.quantity}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
    </div>
</div>
    )
}

export default EditProduct