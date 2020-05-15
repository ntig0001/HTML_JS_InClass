<?php
function swapA_to_B(&$A, &$B)
{   $temp=$A;
    $A= $B;  
	$B= $temp;
}

function multiplyA_by_B($A, $B)
{
	$B=$A * $B;
}
?>

<html lang="en">
<head>
  <title>Task 2 - Temperature Converter</title>
</head>
<body>
	<h1>Task 2 - Temperature Converter</h1>
	
	<form action="" method="post">
		<table>
			<tr>
				<td>
					<select name="first_type_name">
						<option value="fahrenheit">Fahrenheit</option>
						<option value="celsius">Celsius</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>
					<input type="text" name="temperature" placeholder="Input Temperature" value="temperature">
				</td>
			</tr>
			
			<tr>
				<td>
					<input type="submit" name="btn" value="Convert">
				</td>
			</tr>
			<tr>
				<td>
					<?php
					if(isset($_POST['btn']))
						{    
								$first_type_name=$_POST['first_type_name'];
								
								$a=$_POST['a']; 
							$b=$_POST['b']; 	
								
								if ($first_type_name=='swapA_to_B') 
								{
								swapA_to_B($a,$b);   
							echo "after swap: <br> a = $a <br> b= $b <br>" ; 
							}
							else{
								multiplyA_by_B($a,$b );	
								echo "after multiply: <br> a = $a <br> b= $b <br>" ;
							}		
						}	
					?>
				</td>
			</tr>
		</table>
  </form>
</body>
</html>