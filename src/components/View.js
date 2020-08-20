import React from "react";
import './view.css'
import { Link } from 'react-router-dom';


class View extends React.Component {
    constructor() {
        super();
        this.state = {
            productData:[],
            productDetails:[],
            size:'',
            purchased:false
          };
        }
    selectSize=(event)=>{
        this.setState({size:event.target.value})
    }    
    render(){
        var details= this.props.item
        var head = this.props.category
        return(
            <React.Fragment>
                <h1 className="pdt-title">{head.toUpperCase()} -- {details.Brand}</h1>
                <div className="container-fluid">
                    <div className="row container view-desc">
                        <div className="col-md-4 offset-md-2 image-sec">
                            <img src={details.imageUrl1} alt={details.imageUrl1}/>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <h1 className="brand">{details.Brand}</h1>
                            <p className="desc">{details.description}</p>
                            <h2 className="price ">Rs.{details.price}</h2>
                            <p className="tax">Inclusive of all taxes</p>
                            <form>
                            <label htmlFor="size" className="sizedrop">SELECT SIZE</label>
                            <select name="size" id="size" className="form-control" onChange={this.selectSize}>
                            <option value="" defaultValue>--SELECT SIZE--</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            </select><br/>
                            <button disabled={!this.state.size} className="btn btn-danger">ADD TO CART</button>&nbsp;
                            <button disabled={!this.state.size} type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                            BUY NOW
                            </button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Successfully Purchased</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body row">
                                    <div className="col-md-6">
                                        <img src={details.imageUrl1}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h2>{details.Brand}</h2>
                                        <p className="text-secondary">{details.description}</p>
                                        <h4>SIZE : <span className="text-success">{this.state.size}</span></h4>
                                        <h2>Rs.{details.price}</h2>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <a href='/'><button type="button" class="btn btn-primary">Home</button></a>
                                </div>
                                </div>
                            </div>
                            </div>
                         </form>
                        </div>   
                    </div> 
                </div>
            </React.Fragment>
        )
    }    
}        

export default View;