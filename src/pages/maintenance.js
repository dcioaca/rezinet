import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/dashboard.css';
import '../css/bootstrap-grid.css';
import rezinet_logo from '../img/rezinet_icon.png';

const Maintenance = () => {
    return (
        <>
        
        <div>

        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                  <img src={rezinet_logo} width="50" height="50" alt=""/>
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
                <a class="nav-link active" href="#">
                  <span data-feather="tool"></span>
                  Maintenance <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/documents">
                  <span data-feather="file"></span>
                  Shared Documents
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/insurance">
                  <span data-feather="shield"></span>
                  Insurance
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
        <h5 class="card-title">Maintenance Requests</h5>
        <p class="card-text">You do not have any new open maintenance requests.</p>
        <a href="#" class="btn btn-primary">Request Maintenance</a>
      </div>
    </div>
  </div>
  

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Closed Maintenance Requests</h5>
        <p class="card-text">You do not have any closed maintenance requests.</p>
        <a href="#">See History</a>
      </div>
    </div>
  </div>

</div>
</div>


<h2>Approved Vendor List</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Profession</th>
                  <th>Phone Number</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Copernicus Ltd</td>
                  <td>Finisaj Interioare</td>
                  <td>0751-511-455</td>
                  <td>www.copernicus.com</td>
                </tr>
                <tr>
                  <td>Ghiolbanu SRL</td>
                  <td>Zidarie</td>
                  <td>0732-412-377</td>
                  <td>www.ghiolbanu.ro</td>
                </tr>
                <tr>
                  <td>SC Galeata Roz SRL</td>
                  <td>Electrica</td>
                  <td>0755-695-789</td>
                  <td>www.galeatasrozrl.ro</td>
                </tr>
                <tr>
                  <td>SC Lopetica De Aur SRL</td>
                  <td>Instalator / Corpuri Sanitare</td>
                  <td>0752-452-688</td>
                  <td>www.lopeticadeaur.ro</td>
                </tr>
              </tbody>
            </table>
          </div>



</main>
        

    </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
    <script>
      feather.replace()
    </script>

        </div>

        </>
    );
};

export default Maintenance;