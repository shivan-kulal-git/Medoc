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
              <a class="nav-link " href="main.php">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="specialist.php">
                <i class="ni ni-planet text-orange"></i>
                <span class="nav-link-text">Specialist</span>
              </a>
            </li>
             <li class="nav-item">
              <a class="nav-link active" href="doctor.php">
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
              <a class="nav-link " href="patiAppointment.php">
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
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">Doctor</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Add Doctor</li>
                </ol>
              </nav>
            </div>
            
          </div>
          <!-- Card stats -->
          <div class="row">
          
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Add Doctor</h6>
                  
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              
              <div class="card-body">
              <form method="post">
                
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="name">Full Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Full Name" required="">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="gender">Gender</label>
                        <input type="text" id="gender" name="gender" class="form-control" placeholder="Gender" required="">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="licenceno">Licence No</label>
                        <input type="text" id="licenceno" name="licenceno" class="form-control" placeholder="Licence No" required="" >
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="specilization">Specilization</label>
                        <input type="text" id="specilization" name="specilization" class="form-control" placeholder="Specilization" required="">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="doctorstatus">Doctor Status</label>
                        <input type="text" id="doctorstatus" name="doctorstatus" class="form-control" placeholder="Doctor Status" required="">
                      </div>
                    </div>
                     <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="doctime">Doctor Timings</label>
                        <input type="text" id="doctime" name="doctime" class="form-control" placeholder="Doctor Timings" required="">
                      </div>
                    </div>
                      </div> 
                
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="hospitalname">Hospital Name</label>
                        <input type="text" id="hospitalname" name="hospitalname" class="form-control" placeholder="Hospital Name" required="">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="hospitaladdress">Hospital Address</label>
                        <input id="hospitaladdress" name="hospitaladdress" class="form-control" placeholder="Hospital Address" type="text" required="">
                      </div>
                    </div>
                  </div>



                </div>
                
                <!-- Address -->
               
                <div class="pl-lg-4">
                  
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="phoneno">Phone</label>
                        <input type="number" id="phoneno" name="phoneno" class="form-control" placeholder="Phone No" required="">
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="form-group">
                        <label class="form-control-label" for="email">E-mail</label>
                        <input type="E-mail" id="email" name="email" class="form-control" placeholder="E-mail" required="">
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
               <input type="submit" name="add" class="btn btn-sm btn-info  mr-4 " value="Add">
                <a href="doctor.php" class="btn btn-sm btn-default float-right">Back</a>
              </div>
            </div>

              </form>

               <?php
        $con = mysqli_connect("localhost","root","","medoc");
        if(isset($_POST['add']))
        {
        
            $name = $_POST['name'];
            $gender = $_POST['gender']; 
            $licenceno = $_POST['licenceno']; 
            $specilization = $_POST['specilization']; 
            $hospitalname = $_POST['hospitalname']; 
            $hospitaladdress = $_POST['hospitaladdress']; 
            $phoneno = $_POST['phoneno']; 
            $email = $_POST['email']; 
            $doctorstatus = $_POST['doctorstatus']; 
            $doctime = $_POST['doctime']; 

            $sql = mysqli_query($con,"INSERT INTO `doctorlist`( `Name`, `Gender`, `Licence_no`, `Hospital_Name`, `Hospital_address`, `Specialization`, `Phone_no`, `E_mail`, `Doctor_status`,`doc_timings`) VALUES ('$name','$gender','$licenceno','$hospitalname','$hospitaladdress','$specilization','$phoneno','$email','$doctorstatus','$doctime')");


            if($sql == true)
            {
                echo'
                <script>
                alert("inserted");
                window.location="doctor.php";
                </script>
                ';
            }
            else
            {
                echo'
                        <script>
                        alert("Error");
                        window.location="adddoc.php";
                        </script>
                        ';
            }
        }
    ?> 
            </div>
            </div>
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