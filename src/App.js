import React from "react";
import { BrowserRouter,Switch, Link } from 'react-router-dom';
import "./App.css";
import Home from './components/Home.js'
import {Route} from 'react-router-dom';
import Products from './components/Products.js'
import Order from './components/Order.js'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/products/:item/:code" component={Order}/>
        <Route path="/products/:item" component={Products}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="*" component={Home}/>
        {/* <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart}/> */}
    </Switch>

    </div>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <Link to={'/'} className="navbar-brand" >
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MEN
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={'/products/tShirt'} className="dropdown-item" >
                  T-Shirts
                </Link>
                <div className="dropdown-divider"></div>

                <Link to={'/products/casualShirt'} className="dropdown-item">
                  Casual Shirts
                </Link>
                <div className="dropdown-divider"></div>

                <Link to={'/products/casualShoes'} className="dropdown-item" >
                  Casual Shoes
                </Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WOMEN
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={'/products/kurtas'} className="dropdown-item">
                  Kurtas
                </Link>
                <div className="dropdown-divider"></div>

                <Link to={'/products/tops'} className="dropdown-item" >
                  Tops
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={'/products/casualShoes'} className="dropdown-item">
                  Casual Shoes
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                KIDS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={'/products/boys'} className="dropdown-item" >
                  Boys
                </Link>
                <div className="dropdown-divider"></div>

                <Link to={'/products/girls'} className="dropdown-item" >
                  Girls
                </Link>
                
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 col-sm-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>&nbsp;&nbsp;
          <div>
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Login
          </button>
          </div>&nbsp;&nbsp;
          <div>
          <svg width="2rem" height="2rem" viewBox="0 0 16 16" className="bi bi-cart2 text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          </div>
        </div>
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
