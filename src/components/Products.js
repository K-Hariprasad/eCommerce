import React from "react";
import axios from "axios";    
import './products.css'
import View from './View.js'
class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            productData:[],
            showDetails:false,
            selectedItem:[]
          };
        }
    componentWillMount() {
        this.fetchProducts();
        }  
    componentDidUpdate(){
        this.fetchProducts();
    }    
    fetchProducts = () =>{
        axios.get("../data/"+this.props.match.params.item+".json").then(
        response => { this.setState({productData:response.data})
      }).catch(error=>{
          console.log("Something wrong! Can't fetch the data")
      })
    } 
   
    render() {
        if(!this.state.showDetails){
        return (
        <React.Fragment>
            <div>
                <h1 className="pdt-title">
                {this.props.match.params.item}
                </h1>
                <div className="container-fluid">
                <div className="row pdt-cards">
                {this.state.productData.map((item, index) => (
                    
                    <div key={index} className="card">
                        <img src={item.imageUrl1.toString()} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.Brand}</h5>
                            <h6>Rs.<span  className="pdt-price">{item.price}</span></h6>
                        </div>
                        <button onClick={()=>{this.setState({showDetails:true,selectedItem:item})}} className="btn btn-danger form-control">VIEW</button> 
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </React.Fragment>
        );
                }
        else{
            return <React.Fragment><View item={this.state.selectedItem} category={this.props.match.params.item}></View> </React.Fragment>
        }        
    }
}
export default Products;
