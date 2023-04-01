import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../Redux/Actions/product';
import { getFournisseurs } from '../../Redux/Actions/fournisseur';

function AddProduct() {
    const [Fournisseur,setFournisseur]=useState("")
    const [Famille,setFamille]=useState("")
    const [Code,setCode]=useState("")
    const [P_achat,setP_achat]=useState("")
    const [P_Vente,setP_Vente]=useState("")
    const [quantity,setquantity]=useState("")
    useEffect(()=>{
        dispatch(getFournisseurs())
    },[])
    const dispatch = useDispatch();
    const fournisseur = useSelector((state) => state.fournisseur);
    const {fournisseurs } =fournisseur ;
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addProduct(Fournisseur,Famille,Code,P_achat,P_Vente,quantity))
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Product</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Product</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">Code</label>
                                        <input type="text" class="form-control" name="Code" value={Code} onChange={(e) => setCode(e.target.value)} placeholder="Code"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Famille</label>
                                      
                                        <select class="form-control" name="Famille" value={Famille} onChange={(e) => setFamille(e.target.value)}>
  <option value=""> </option>
  <option value="Électricité ">Électricité </option>
  <option value="Pinture ">Pinture </option>
  <option value="Pinture decoratif">Pinture decoratif</option>
  <option value="PVC">PVC</option>
  <option value="motocycles ">motocycles </option>
  <option value="Raccords">Raccords </option>
  <option value="Maçon">Maçon</option>
  <option value="Menuiserie">Menuiserie</option>
  <option value="Divers">Divers</option>
</select>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Prix d'achat</label>
                                        <input type="text" class="form-control" name="P_achat" value={P_achat} onChange={(e) => setP_achat(e.target.value)} placeholder="Prix d'achat"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Prix de Vente</label>
                                        <input type="text" class="form-control" name="P_Vente" value={P_Vente} onChange={(e) => setP_Vente(e.target.value)} placeholder="P_Vente"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Quantity</label>
                                        <input type="text" class="form-control" name="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} placeholder="quantity"/>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="form-group">
                                    <label class="form-label">Fournisseur</label><br/>

                                    <select
                                        className=' typeuser'
                                        name='type'

                                onChange={(e) => setFournisseur(e.target.value)}>
                                <option className='option-type-profile'></option>
                                {fournisseurs?.map((x,i)=>
                                    <option key={i} value={x._id} className='option-type-profile'>{x.LibelleFour} telephone :{x.Tel}</option>
                                )}
                                </select>
                                </div>
                              <button type="submit"  class="btn btn-primary">Submit</button>

                                </form>
                            </div>
    </div>            
    </div>
</div>  )
}

export default AddProduct