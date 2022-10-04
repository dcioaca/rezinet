import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/dashboard.css';
import '../css/bootstrap-grid.css';
import rezinet_log_img from '../img/rezinet_login_signup.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( <> 

    <div>
    <div class="d-md-flex h-md-100 align-items-center">
    <div style="background-image: url('../img/rezinet_login_signup.jpeg'); background-repeat: no-repeat;" class="col-md-6 p-0 bg-indigo h-md-100">
        <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
                <p>
                    <i class="fa-solid fa-house-laptop fa-3x"></i>
                </p>
                <h1 style="color:red;" class="mb-0 mt-3 display-4">R e z i N e t</h1>
                <h3 class="mb-4 font-weight-light">Resident Network Online Portal<i class="fab fa-house-laptop fa-2x text-cyan"></i></h3>
                <a  class="btn btn-outline-light btn-lg btn-round" href="#">Welcome Guide</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <form class="border rounded p-5">
                <h3 class="mb-4 text-center">Sign In</h3>
                <div class="social-container text-center">
                    <a href="dashboard.html" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="dashboard.html" class="social"><i class="fab fa-google-plus-g"></i></a>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" required=""/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required=""/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label small text-muted" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn btn-success btn-round btn-block shadow-sm">Sign in</button>
                <small class="d-block mt-4 text-center"><a class="text-gray" href="#">Forgot your password?</a></small>
            </form>
        </div>
    </div>
</div>

<nav class="navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    


   
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>

    </div>

    </> );
}

export default Login;
