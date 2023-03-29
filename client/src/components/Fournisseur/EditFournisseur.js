import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';
import {  editFournisseur, getFournisseur } from '../../Redux/Actions/fournisseur';

function EditFournisseur() {
    const [Code,setCode]=useState("")
    const [LibelleClient,setLibelleClient]=useState("")
    const [Email,setEmail]=useState("")
    const [Tel,setTel]=useState("")
    const [Tel2,setTel2]=useState("")
    const [Adresse,setAdresse]=useState("")
    const [Ville,setVille]=useState("")
    const [CodePostal,setCodePostal]=useState("")
    const [searchParams] = useSearchParams();
    const [Fax,setFax]=useState("")
    const [RIB,setRIB]=useState("")
    const dispatch = useDispatch();
    const myfournisseur = useSelector((state) => state.fournisseur);
    const {loading, fournisseur } =myfournisseur ;

    useEffect(()=>{
        dispatch(getFournisseur(searchParams.get("_id")));
      }, []);
      const onsubmit = (e) => {
        e.preventDefault();
        dispatch(editFournisseur(searchParams.get("_id"),Code,LibelleClient,Tel,Tel2,Adresse,Ville,Email,CodePostal,Fax,RIB))
       
    }
  return loading||fournisseur==null?<Spinner/>: (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Edit Client</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                    <div class="form-group">
                                        <label class="form-label">Code</label>
                                        <input type="text" class="form-control" name="Code" value={Code} onChange={(e) => setCode(e.target.value)} placeholder={fournisseur.Code}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Libelle Client</label>
                                        <input type="text" class="form-control" name="LibelleClient" value={LibelleClient} onChange={(e) => setLibelleClient(e.target.value)} placeholder={fournisseur.LibelleClient}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder={fournisseur.Email}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Phone Number</label>
                                        <input type="text" class="form-control" name="Tel" value={Tel} onChange={(e) => setTel(e.target.value)} placeholder={fournisseur.Tel}/>
                                        <div class="clearfix"></div>
                                    </div>    <div class="form-group">
                                        <label class="form-label">Phone Number2</label>
                                        <input type="text" class="form-control" name="Tel2" value={Tel2} onChange={(e) => setTel2(e.target.value)} placeholder={fournisseur.Tel2}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Adresse</label>
                                        <input type="text" class="form-control" name="Adresse" value={Adresse} onChange={(e) => setAdresse(e.target.value)} placeholder={fournisseur.Adresse}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Ville</label>
                                        <input type="text" class="form-control" name="Ville" value={Ville} onChange={(e) => setVille(e.target.value)} placeholder={fournisseur.Ville}/>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label">CodePostal</label>
                                        <input type="text" class="form-control" name="CodePostal" value={CodePostal} onChange={(e) => setCodePostal(e.target.value)} placeholder={fournisseur.CodePostal}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Fax</label>
                                        <input type="text" class="form-control" name="Fax" value={Fax} onChange={(e) => setFax(e.target.value)} placeholder={fournisseur.Fax}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">RIB</label>
                                        <input type="text" class="form-control" name="RIB" value={RIB} onChange={(e) => setRIB(e.target.value)} placeholder={fournisseur.RIB}/>
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

export default EditFournisseur