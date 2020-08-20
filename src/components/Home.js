import React from "react";
import Home1 from "../images/c1.jpg";
import Home2 from "../images/c2.jpg";
import Home3 from "../images/c3.jpg";
import kurta from "../images/kurta.jpg";
import shirt from "../images/shirt.jpg";
import top from "../images/top.jpg";
import t from "../images/t.jpg";
import casualshoe from "../images/casualshoe.jpg";
import fb from "../images/fb.jpg";
import fc from "../images/fc.jpg";
import '../components/home.css'
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel1"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Home1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Home2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Home3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* -----------------second carousel---------------------- */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5 mb-5"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={fb} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={fc} className="d-block w-100" alt="..." />
            </div>
            
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* -----------Categories---------- */}
        <div className="mt-3 container-fluid category">
          <h3 className="text-left cat-title">CATEGORIES</h3>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
              <div className="row card-sec">
              <div className="card">
                <img src={shirt} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casual Shirts</h5>
                </div>
                <Link to={'/products/casualShirt'}><button className="btn btn-danger form-control">VIEW</button></Link>
                </div>
                <div className="card">
                <img src={t} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">T-Shirts</h5>
                </div>
                <Link to={'/products/tShirt'}><button className="btn btn-danger form-control">VIEW</button></Link>
                
                </div>
                <div className="card">
                <img src={casualshoe} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casual Shoes</h5>
                </div>
                <Link to={'/products/casualShoes'}><button className="btn btn-danger form-control">VIEW</button></Link>        
                </div>
              </div>
              </div>
              <div className="carousel-item">
              <div className="row card-sec">
              <div className="card">
                <img src={kurta} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Kurtas</h5>
                </div>
                <Link to={'/products/kurtas'}><button className="btn btn-danger form-control">VIEW</button></Link>   
                
                </div>
                <div className="card">
                <img src={top} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Tops</h5>

                </div>
                <Link to={'/products/tops'}><button className="btn btn-danger form-control">VIEW</button> </Link>  
                
                </div>
                <div className="card">
                <img src={casualshoe} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Casual Shoes</h5>

                </div>
                <Link to={'/products/casualShoes'}><button className="btn btn-danger form-control">VIEW</button></Link>        
                
                </div>
              </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
