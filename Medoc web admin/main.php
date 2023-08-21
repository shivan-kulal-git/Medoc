<?php
session_start();
if(isset($_SESSION['admin']))
{
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
  <meta name="author" content="Creative Tim">
  <title> MeDoc Login Form Web Design</title>
  <!-- Favicon -->
  <link rel="icon" href="assets/img/brand/favicon.png" type="image/png">
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <!-- Icons -->
  <link rel="stylesheet" href="assets/vendor/nucleo/css/nucleo.css" type="text/css">
  <link rel="stylesheet" href="assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
  <!-- Page plugins -->
  <!-- Argon CSS -->
  <link rel="stylesheet" href="assets/css/argon.css?v=1.2.0" type="text/css">
</head>

<body>
  <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="assets/img/brand/blue.png" class="navbar-brand-img" alt="MeDoc">
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="main.php">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="specialist.php">
                <i class="ni ni-planet text-orange"></i>
                <span class="nav-link-text">Specialist</span>
              </a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="doctor.php">
                <i class="ni ni-circle-08 text-pink"></i>
                <span class="nav-link-text">Doctor</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="patient.php">
                <i class="ni ni-single-02 text-yellow"></i>
                <span class="nav-link-text">Patient</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="disdict.php">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Disease Dictionary</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="patiAppointment.php">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Appointment</span>
              </a>
            </li>
             <li class="nav-item">
              <a class="nav-link " href="Afees.php">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Fees</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="precreption.php">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Precreption</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.php">
                <i class="ni ni-key-25 text-info"></i>
                <span class="nav-link-text">About</span>
              </a>
            </li>
           <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="ni ni-pin-3 text-primary"></i>
                <span class="nav-link-text">Empty Page</span>
              </a>
            </li> 
          </ul>
          <!-- Divider -->
          <hr class="my-3">
          <!-- Navigation -->
        </div>
        </div>
      </div>
  </nav>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
              <li class="nav-item d-xl-none">
               <!-- Sidenav toggler -->
                <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                  <div class="sidenav-toggler-inner">
                     <i class="sidenav-toggler-line"></i>
                     <i class="sidenav-toggler-line"></i>
                     <i class="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>

          </ul>

          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="ni ni-hat-3">
                    
                  </span>
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Admin</span>
                  </div>
                </div>
              </a>


               <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                
              
                <div class="dropdown-divider"></div>
                <a href="logout.php" class="dropdown-item" onclick='return checkdelete()'>
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
             
               <script>
                                    function checkdelete() {
                                        return confirm('Are you sre you want to Logout ?')
                                    }
                                </script>


                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <!-- Header -->

   <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(images/4bg.jpg); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">WELCOME!</h1>
            <p class="text-white mt-0 mb-5">This is your Admin page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
           
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
           
           
          </div>
        </div>
      </div>
     
      <!-- Footer -->
      
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/js-cookie/js.cookie.js"></script>
  <script src="assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
  <script src="assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
  <!-- Optional JS -->
  <script src="assets/vendor/chart.js/dist/Chart.min.js"></script>
  <script src="assets/vendor/chart.js/dist/Chart.extension.js"></script>
  <!-- Argon JS -->
  <script src="assets/js/argon.js?v=1.2.0"></script>
</body>

</html>
<?php
}
else
{
  echo'
  <script>
  alert("please login");
  window.location="index.php";
  </script>
  ';
}
?>