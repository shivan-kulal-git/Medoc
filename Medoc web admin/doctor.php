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
            <li class="nav-item ">
              <a class="nav-link" href="specialist.php">
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
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Doctor</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">Doctor</a></li>
                  <li class="breadcrumb-item active" aria-current="page">list</li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <a href="adddoc.php" class="btn btn-neutral"><i class="ni ni-fat-add"></i>
                      <span>Add Doctor</span></a>
            </div>
             
         
          <!-- 'search form' -->
          <form action="doctor.php" method="post" class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative input-group-merge">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input name="search" class="form-control" placeholder="Search" type="text">
              
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">Search</span>
            </button>
          </form>
          <!-- search form close -->
 </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
   
      <!-- Dark table -->
      <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Doctor list</h6>
                  
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              
               
                 <div class="card-content">
            <div class="table-responsive">
              <table class="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                     <th>Doctor Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Licence no</th>
                     <th>Specilization</th>
                     <th>Doctor Status</th>
                                             <th>Doctor Timings</th>

                    <th>Hospital Name</th>
                    <th>Hospital Address</th>
                    
                                            <th>Phone no</th>
                                            <th>E-mail</th>
                                            
                    <th scope="col"></th>

                  
                  </tr>
                </thead>
                <tbody class="list">
                  <?php
                        $con = mysqli_connect("localhost","root","","medoc");
                        $qry = mysqli_query($con,"SELECT * FROM `doctorlist`");
                        while($result = mysqli_fetch_array($qry))
                        {
                        ?>
                  <tr class="odd gradeX">
                    <td>
                      <?php echo $result['Did']; ?>
                        
                      
                    </td>
                    <td>
                      <?php echo $result['Name']; ?>
                        
                      
                    </td>
                    <td>
                      <?php echo $result['Gender']; ?>
                    </td>
                    <td>
                      <?php echo $result['Licence_no']; ?>
                    </td>
                    <td><?php echo $result['Specialization']; ?></td>
                    <td><?php echo $result['Doctor_status']; ?></td>

                      <td><?php echo $result['doc_timings']; ?></td>

                    <td>
                     <?php echo $result['Hospital_Name']; ?>
                      
                    </td>
                    <td>
                      <?php echo $result['Hospital_address']; ?>
                    </td>

                     

                     <td><?php echo $result['Phone_no']; ?></td>

                     <td><?php echo $result['E_mail']; ?></td>

                     
                    <td>
                      <div class="dropdown">
                        <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a class="dropdown-item" href="docedit.php?id=<?php echo $result['Did']; ?>">Edit</a>
                          <a class="dropdown-item" href="docdelete.php?id=<?php echo $result['Did']; ?> "onclick='return checkdelete()'>Delete</a>
                          
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                 <?php
                        }
                        ?>
                 
                </tbody>
              </table>
              <script>
                                    function checkdelete() {
                                        return confirm('Are you sre you want to delete record')
                                    }
                                </script>
            </div>
            <!-- Card footer -->
            <div class="card-footer py-4">
              <nav aria-label="...">
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- Dark table -->
      

              
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
  <!-- Argon JS -->
  <script src="assets/js/argon.js?v=1.2.0"></script>


<script src="assets/js/jquery-1.10.2.js"></script>
    <script src="assets/js/bootstrap.min.js"></script> 
    <script src="assets/materialize/js/materialize.min.js"></script>
 <script src="assets/js/jquery.metisMenu.js"></script>
    <script src="assets/js/morris/raphael-2.1.0.min.js"></script>
    <script src="assets/js/morris/morris.js"></script>
    <script src="assets/js/easypiechart.js"></script>
    <script src="assets/js/easypiechart-data.js"></script>
     <script src="assets/js/Lightweight-Chart/jquery.chart.js"></script>
     <script src="assets/js/dataTables/jquery.dataTables.js"></script>
    <script src="assets/js/dataTables/dataTables.bootstrap.js"></script>
        <script>
            $(document).ready(function () {
                $('#dataTables-example').dataTable();
            });
    </script>
    <script src="assets/js/custom-scripts.js"></script> 

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