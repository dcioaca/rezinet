import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/dashboard.css';
import '../css/bootstrap-grid.css';
import rezinet_logo from '../img/rezinet_icon.png';

const Insurance = () => {
    return (
        <>
            <div>

            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                  <img src= {rezinet_logo} width="50" height="50" alt=""/>
      R e z i N e t </a>

      <h3>Resident Network Portal</h3>
       <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="/login">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Welcome Daniel</span>
            </h6>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">
                  <span data-feather="home"></span>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/payments">
                  <span data-feather="dollar-sign"></span>
                  Payments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/events">
                  <span data-feather="users"></span>
                  Social Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/maintenance">
                  <span data-feather="tool"></span>
                  Maintenance
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/documents">
                  <span data-feather="file"></span>
                  Shared Documents
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/insurance">
                  <span data-feather="shield"></span>
                  Insurance <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/help">
                  <span data-feather="help-circle"></span>
                  Help
                </a>
              </li>
            </ul>

   
          </div>
        </nav>


  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">

 <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Policy on file</h5>
        <p class="card-text">XYZ Insurance Co.</p>
        <p class="card-text">Policy # 345-09F</p>
        <p class="card-text">Expiration date: 11/04/2023</p>

        <a href="#" class="btn btn-danger">Delete Policy</a>
      </div>
    </div>
  </div>
  

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Insurance Claims</h5>
        <p class="card-text">You do not have any closed claim requests.</p>
        <a href="#">See History</a>
      </div>
    </div>
  </div>

</div>
</div>

<h2>Add Insurance Document</h2>

<form>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile"/>
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
</form>


</main>
        

    </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

            </div>
        </>
    );
};

export default Insurance;