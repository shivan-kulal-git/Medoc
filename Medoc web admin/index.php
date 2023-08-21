<?php session_start();	?>

<!DOCTYPE html>
<html lang="zxx">
<head>
    <title> MeDoc Login Form Web Design</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="keywords" content=" MeDoc Login Form Web Design">
    
    <script>
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="all">
	<link href="//fonts.googleapis.com/css?family=Quattrocento+Sans:400,400i,700,700i" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=Mukta:200,300,400,500,600,700,800" rel="stylesheet">

<link rel="stylesheet" href="assets/vendor/nucleo/css/nucleo.css" type="text/css">

</head>
<body>
<section class="main">
	<div class="layer">

		
		<div class="content-w3ls">
			<div class="logo text-center icon">
				<h1><a href="index.php"><span class=""></span><i>Medoc</i></a></h1>
			</div>
			<div class="content-bottom">
				<form action="#" method="post">
					<div class="field-group">
						<span class="ni ni-hat-3" aria-hidden="true"></span>
						<div class="wthree-field">

							<input name="text1" id="text1" type="text" value="<?php if(isset($_COOKIE['uname'])) {echo $_COOKIE['uname'];} ?>" placeholder="Username" required>
						</div>
					</div>
					<div class="field-group">
						<span class="ni ni-lock-circle-open" aria-hidden="true"></span>
						<div class="wthree-field">
							
							<input name="password" id="myInput" type="Password" value="<?php if(isset($_COOKIE['password'])) {echo $_COOKIE['password'];} ?>" placeholder="Password">
						</div>
					</div>
					<div class="wthree-field">
						<button type="submit" name="login" class="btn">login</button>
					</div>
					<ul class="list-login">
					 <li class="switch-agileits">
							<label class="switch">
								<input type="checkbox" name="rememberme">
								<span class="slider round" name="rememberme"></span>
								Remember Me
							</label>
						</li>
						<li class="clearfix"></li>
					</ul>
					
				</form>
				
			</div>
		</div>
		</div>
    </div>
    
</section>





<?php
				$con = mysqli_connect("localhost","root","","medoc");
				if(isset($_POST['login']))
				{
					$text1 = $_POST['text1'];
					$password = $_POST['password'];

					$sql = mysqli_query($con,"SELECT * FROM `admin` WHERE username='$text1' and password='$password'");
					$row = mysqli_num_rows($sql);
					if($row == 1)
					{
						if(isset($_POST['rememberme'])){

                              setcookie('uname',$text1,time()+86400);
                              setcookie('password',$password,time()+86400);

							$_SESSION['admin'] = 'admin';
						echo'
						<script>
						window.location="main.php";
						</script>
						';
					}else{
						$_SESSION['admin'] = 'admin';
						echo'
						<script>
						window.location="main.php";
						</script>
						';
					}

						
					}
					else
					{
						echo'
						<script>
						alert("Error");
						window.location="index.php";
						</script>
						';
					}
				}
			?>
 
</body>
</html>
