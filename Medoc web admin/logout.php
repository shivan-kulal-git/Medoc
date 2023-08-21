<?php
session_start();
session_destroy();

setcookie('uname','',time()-86400);
setcookie('password','',time()-86400);

echo'
	<script>
	window.location="index.php";
	</script>
	';
?>