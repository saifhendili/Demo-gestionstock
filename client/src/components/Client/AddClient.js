import React,{useState} from 'react'
import { addClient } from '../../Redux/Actions/client'
import { useDispatch } from "react-redux";

function AddClient() {
    const [Code,setCode]=useState("")
    const [LibelleClient,setLibelleClient]=useState("")
    const [Tel,setTel]=useState("")
    const [Tel2,setTel2]=useState("")
    const [Adresse,setAdresse]=useState("")
    const [Ville,setVille]=useState("")
    const [Email,setEmail]=useState("")
    const [CodePostal,setCodePostal]=useState("")
    const dispatch = useDispatch();
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addClient(Code,LibelleClient,Tel,Tel2,Adresse,Ville,Email,CodePostal))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Client</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Client</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">Code</label>
                                        <input type="text" class="form-control" name="Code" value={Code} onChange={(e) => setCode(e.target.value)} placeholder="Code"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Libelle Client</label>
                                        <input type="text" class="form-control" name="LibelleClient" value={LibelleClient} onChange={(e) => setLibelleClient(e.target.value)} placeholder="LibelleClient"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Telephone</label>
                                        <input type="text" class="form-control" name="Tel" value={Tel} onChange={(e) => setTel(e.target.value)} placeholder="Tel"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Telephone2</label>
                                        <input type="text" class="form-control" name="Tel2" value={Tel2} onChange={(e) => setTel2(e.target.value)} placeholder="Tel2"/>
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

export default AddClient