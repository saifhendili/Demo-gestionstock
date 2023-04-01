import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { VendreProd, deleteProduct, getProducts } from '../../Redux/Actions/product';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ListProduct() {
    const [Search, setSearch] = useState('');
    const [Categorie, setCategorie] = useState('');
    const [quantity, setquantity] = useState('');
    const [title, settitle] = useState('');
    const [myid, setid] = useState('');
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const {loading, products } =product ;
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
        useEffect(()=>{
            dispatch(getProducts())
        },[products])
        const [show, setShow] = useState(false);

        const handleClose = (e) => {
          e.preventDefault()
          dispatch(VendreProd(myid,quantity))
          setShow(false)};
        const handleShow = (e,id,title) => {
          e.preventDefault()
          settitle(title)
          setid(id)
          setShow(true)};
  return loading||products===null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List Product</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
    <button className='btn btn-primary m-3 ' onClick={e=>setCategorie("")}>All</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Électricité")}>Électricité</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Pinture")}>Pinture</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Pinture decoratif")}>Pinture decoratif</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("PVC")}>PVC</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("motocycles")}>motocycles</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Raccords")}>Raccords</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Maçon")}>Maçon</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Menuiserie")}>Menuiserie</button>
    <button className='btn btn-primary m-3'onClick={e=>setCategorie("Divers")}>Divers</button>
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
                            {products.filter(ex =>
                            ex.Famille.toLowerCase().includes(Categorie.toLowerCase()))
                            .filter(el =>
                              el.Code.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`product${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing' onClick={e=>handleShow(e,x._id,x.Code)} style={{cursor:"pointer"}}>{x.Code}</td>
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

                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                onChange={e=>setquantity(e.target.value)}
                type="number"
                placeholder="Quantity"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Vendre
          </Button>
        </Modal.Footer>
      </Modal>



</div>  )
}

export default ListProduct