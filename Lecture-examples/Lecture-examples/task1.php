<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Task 1_Hello World</title>
</head>
<body>-
  <h1>Task 1 - Hello World</h1>
  <form action="" method="GET">
    <table>
      <tr>
        <td>First Name: </td>
        <td>
          <label for="firstName">
            <input type="text" name="firstName" id="firstName" value="First Name">
          </label>
        </td>
      </tr>
      <tr>
        <td>Last Name: </td>
        <td>
          <label for="lastName">
            <input type="text" name="lastName" id="lastName" value="Last Name">
          </label>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: center;"> Possibly Generic Message Here</td>
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
        <td>
          <input type="submit" name="submit" value="Go">
        </td>
      </tr>
    </table>
  </form>
</body>
</html>