import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { addFournisseur } from '../../Redux/Actions/fournisseur';

function AddFournissuer() {
    const [Code,setCode]=useState("")
    const [LibelleFour,setLibelleFour]=useState("")
    const [Email,setEmail]=useState("")
    const [Tel,setTel]=useState("")
    const [Tel2,setTel2]=useState("")
    const [Adresse,setAdresse]=useState("")
    const [Ville,setVille]=useState("")

    const [CodePostal,setCodePostal]=useState("")
    const [Fax,setFax]=useState("")
    const [RIB,setRIB]=useState("")
    const dispatch = useDispatch();
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addFournisseur(Code,LibelleFour,Tel,Tel2,Adresse,Ville,Email,CodePostal,Fax,RIB))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Fournisseur</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Fournisseur</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">Code</label>
                                        <input type="text" class="form-control" name="Code" value={Code} onChange={(e) => setCode(e.target.value)} placeholder="Code"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Libelle Fournisseur</label>
                                        <input type="text" class="form-control" name="LibelleFour" value={LibelleFour} onChange={(e) => setLibelleFour(e.target.value)} placeholder="LibelleFour"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Fax</label>
                                        <input type="number" class="form-control" name="Fax" value={Fax} onChange={(e) => setFax(e.target.value)} placeholder="Fax"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">RIB</label>
                                        <input type="number" class="form-control" name="RIB" value={RIB} onChange={(e) => setRIB(e.target.value)} placeholder="RIB"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Tel</label>
                                        <input type="number" class="form-control" name="Tel" value={Tel} onChange={(e) => setTel(e.target.value)} placeholder="Tel"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Telephone2</label>
                                        <input type="number" class="form-control" name="Tel2" value={Tel2} onChange={(e) => setTel2(e.target.value)} placeholder="Tel2"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Adresse</label>
                                        <input type="text" class="form-control" name="Adresse" value={Adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Ville</label>
                                        <input type="text" class="form-control" name="Ville" value={Ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                        <input type="Email" class="form-control" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">CodePostal</label>
                                        <input type="number" class="form-control" name="CodePostal" value={CodePostal} onChange={(e) => setCodePostal(e.target.value)} placeholder="CodePostal"/>
                                        <div class="clearfix"></div>
                                    </div>

                              <button type="submit" class="btn btn-primary">Submit</button>

                                </form>
                            </div>
    </div>

                      
    </div>
  



</div>  )
}

export default AddFournissuer