import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";    
import './order.css'
class Order extends React.Component {
    constructor() {
        super();
        this.state = {
            productData:[],
            productDetails:[],
            size:'',
            purchased:false
          };
        }
        componentDidMount() {
            this.fetchProducts();      
        }  
        
        fetchProducts = () =>{
            axios.get(" http://localhost:3000/data/"+this.props.match.params.item+".json").then(
            response => {this.setState({productDetails:response.data})
          }).then(response=>this.filterProduct()).
          catch(error=>{
              console.log("Something wrong! Can't fetch the data")
          })
        }  
        checkCode = (item) => {
            if(item.productCode===this.props.match.params.code){
                return item
            }
        }
       
        filterProduct=() => {
            var products = this.state.productDetails
            var details = products.filter((item)=>this.checkCode(item))
            console.log(details[0])
            this.setState(()=>({productData:details[0]}))
        }   
        selectSize=(event)=>{
            this.setState({size:event.target.value})
        }
        buyItem=()=>{
            this.setState({purchased:true})
        }
    render() {
        var itemDetails=this.state.productData
        if(itemDetails){
            console.log(itemDetails)
        return (
        <React.Fragment>
             <div>
                <h1 className="pdt-title">
                {this.props.match.params.item}
                </h1>
                <div className="container-fluid">
                    <div className="row container-fluid pdt-desc">
                        <div className="col-md-6">
                            <img src={itemDetails.imageUrl2} alt={itemDetails.imageUrl2}/>
                        </div>
                        <div className="col-md-6">
                            <h1 className="brand">{itemDetails.Brand}</h1>
                            <p className="desc">{itemDetails.description}</p>
                            <h2 className="price ">Rs.{itemDetails.price}</h2>
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
                                <div class="modal-body">
                                    <div className="col-md-6">
                                        <img src={itemDetails.imageUrl1}/>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Home</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
        }
    }
}
export default Order;
