<?php
	
	//print("<p>set toEmail</p>");
	$toEmail = "info@magicbuildingblock.com";	
	//$toEmail = "mjremijan@yahoo.com";
	
	//print("<p>get fromName</p>");
	$fromName = trim($_POST['yourName']);
	//print("<p>fromName \"".$fromName."\"</p>");
	
	//print("<p>get fromEmail</p>");
	$fromEmail = trim($_POST['yourEmail']);
	//print("<p>fromEmail \"".$fromEmail."\"</p>");
	
	//print("<p>get emailSubject</p>");
	$emailSubject = "[Website Message] " . trim($_POST['emailSubject']);
	//print("<p>emailSubject \"".$emailSubject."\"</p>");
	
	//print("<p>get emailMessage</p>");
	$emailMessage = trim($_POST['emailMessage']);
	//print("<p>emailMessage \"".$emailMessage."\"</p>");
	
	//print("<p>set headers</p>");
	$headers = "From: ".$fromName."<".$fromEmail.">"."\r\n";
	//print("<xmp>headers ".$headers."</xmp>");
	
	mail($toEmail, $emailSubject, $emailMessage, $headers);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="shortcut icon" href="images/shared/favicon.ico" type="image/x-icon" />

    <meta name="description" content="Magic Building Block Preschool &amp; Childcare Center" />
    <meta name="keywords" content="Magic Building Block, Preschool, Childcare, Fairview Heights, Illinois" />

	<!-- jquery -->
    <script type="text/javascript" src="js/jquery-1.6.4.min.js"></script>    
		
	<!-- magic (common) -->		
	<link rel="stylesheet" href="css/styles.css" type="text/css" />		
	
	<!-- magic (header) -->
	<link rel="stylesheet" href="css/magic-header.css" type="text/css" />
	<script type="text/javascript" src="js/magic-header.js"></script>
	
	<!-- magic (menu) -->
	<link rel="stylesheet" href="css/magic-menu.css" type="text/css" />
	<script type="text/javascript" src="js/magic-menu.js"></script>
	
	<!-- magic (contact us) -->
	<link rel="stylesheet" href="css/magic-contact.css" type="text/css" />
	<script type="text/javascript" src="js/magic-contact.js"></script>
	
    <title>Contact Us: Magic Building Block Preschool &amp; Childcare Center</title>
</head>
<body>

<div id="body-wrapper">

	<script>writeHeader("contact_us");</script>		
	
	<script>writeMenu("contact_us");</script>		

	<div id="page-wrapper" class="opaque">
		
		<div class="img">
			<img alt="smiling" src="images/rates/smiling.jpg" />
		</div>
		<h1>Contact Us</h1>
		<p>
			Your message has been sent!  We again want to thank you for your interest in Magic Building 
			Block Preschool &amp; Childcare Center. Once your message has been reviewd, we will respond as soon as possible.				
		</p>		
	</div><!--page-wrapper-->
</div><!--body-wrapper-->

</body>
</html>