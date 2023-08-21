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

<body class="bg-default">
  <!-- Navbar -->
  <nav id="navbar-main" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="dashboard.html">
        
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="dashboard.html">
                <img src="assets/img/brand/blue.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a href="main.php" class="nav-link">
              <span class="nav-link-inner--text">Dashboard</span>
            </a>
          </li>
           <li class="nav-item ">
              <a class="nav-link" href="specialist.php">
                <span class="nav-link-text">Specialist</span>
              </a>
            </li>
          <li class="nav-item">
            <a href="doctor.php" class="nav-link">
              <span class="nav-link-inner--text">Doctor</span>
            </a>
          </li>
           <li class="nav-item">
              <a class="nav-link" href="patient.php">
                <span class="nav-link-text">Patient</span>
              </a>
            </li>
          <li class="nav-item">
            <a href="disdict.php" class="nav-link">
              <span class="nav-link-inner--text">Disease Dictionary</span>
            </a>
          </li>
           <li class="nav-item">
              <a class="nav-link" href="patiAppointment.php">
                <span class="nav-link-text">Appointment</span>
              </a>
            </li>
             <li class="nav-item">
              <a class="nav-link " href="Afees.php">
                <span class="nav-link-text">Fees</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="precreption.php">
                <span class="nav-link-text">Precreption</span>
              </a>
            </li>
          <li class="nav-item">
            <a href="logout.php" class="nav-link" onclick='return checkdelete()'>
              <span class="nav-link-inner--text" >Logout</span>
            </a>
                               <script>
                                    function checkdelete() {
                                        return confirm('Are you sre you want to Logout ?')
                                    }
                                </script>
          </li>
        </ul>
        <hr class="d-lg-none" />
        
      </div>
      
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content">
    <!-- Header -->
    <div class="header  py-7 py-lg-8 pt-lg-9"style="min-height: 500px; background-image: url(images/3bg.jpg); ">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Welcome!</h1>
              
            </div>
          </div>
<p class="text-white mt-0 mb-5">"MeDoc" is a Doctor-patients relationship application that allows users to manage their health information and connect to their Doctors. To use MeDoc you need create an account to gain access to the facilities provided by the application. It has a dictionary that lets you know about diseases its symptoms, causes , etc by typing its name. Then it connects to the doctor in online according to which diseases predicted. Then doctor will prescribe the medicine and  that document will be forward to the pharmacies. So pharmacies can deliver into customer home. This feature will be very useful in this pandemic situation. Otherwise,  user can take appointment with doctor based on their hospitals & departments  according to treatment type.  This app helps user with scheduling appointments and monitoring their immunization history. It also gives patients access to  diagnostic labs results which they can send directly to their doctors. The app uses notifications to remind patients about their appointments. It uses the GPS  which is useful to find the direction to nearest hospitals , pharmacies on a real-time map. It also includes a feature to call the Doctors directly from a list of doctors available . <br>
It is an interactive application having user-friendly interface that is developed using React Native at the front end and My SQL database.<br>
<br>Now a days health is very important. And covid-19 pandemic situation has caused headache for all of us. In the time of emergency we need to carry papers of medical related documents and peoples doesn’t know which document is needed and which one is not, And it is difficult to find at time of emergency. All the time we need to collect documents for lab and submit to doctor after that doctor need to check it and then doctor prescribe the medicine for customer it is a time consuming process. Some time we need to spend too much time to take appointment and connect with doctor, and we don’t know which hospital have which departments, which doctors are available and what about their timing also. <br>
<br>The aim is to develop an app with improved facilities. The app provides details of hospital with specified doctors. The hospital adds details of doctors in each department. With these users get details of hospitals by specifying treatment, doctors in specified department, location, etc. The app will provide navigation, time, distance to the hospital. Also, the user gets opportunity to get appointment with doctor.<br>
User can also get details of hospitals, doctors, pharmacies.<br> 
The proposed technique may have following advantages:<br>
   Find hospitals, pharmacies near through Google map makes easier.<br>
   View doctors in each department of a selected hospital.<br>
   Get appointment with doctor.<br>
   Efficient and low-cost design.<br>
   Fast response.<br>
   User friendly.<br>
   Reduces Time consumption.<br>
<br>The scope of this project is to establish connection between patients and doctors more seamlessly. <br><br> 
The important features of this project are as follows:<br>
   To have a central system which acts as the server and integrates all the modules.<br>
   For each module ,identify the related data and existing work procedure.<br>
   Design a website using php, for the server of the application and hospital module.<br>
   Design Database.<br>
   Design an application for user module.<br><br>
   The application is designed in such a way that, any further enhancement can be done with ease. <br>
   New modules can be added to the existing system with less effort. <br>
   We can improve cyber security. <br>
   We can decrease the virus attack. <br>
   We can add blood bank and ambulance services for emergency situation.<br>
   We can improve the hospital related information’s  such as total beds available, ICUs etc.<br> 



</p>
        </div>
      </div> <div class="container-fluid mt--6">
      
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
   
  <!-- Footer -->
  
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/js-cookie/js.cookie.js"></script>
  <script src="assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
  <script src="assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
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