<?php
$a = 10;
$b = 20;

//we trust you change it, we have equal ability
//means we can modify the variables that are seen by the caller
function swapByRef(&$x, &$y) {
    $tmp = $x;
    $x = $y;
    $y = $tmp;
	
	//echo " $x : <br> 
}

//we want others only to use it, not to change it
//the swap won't affect the variables
function swapByVal($x, $y) {
	
    $tmp = $x;
    $x = $y;
    $y = $tmp;
}

// for small function like this no diffrence 
// but for complex application, by refference is recommnded
function swapGlobal() {
	global $a, $b;
	//$a= 1; $b=2;
    
	
	$tmp = $a;
    $a= $b;
    $b = $tmp;
	
	//echo "inside <br> \$a=" . $a . "<br>" . "\$b=" . $b . "<br><br>";
}

echo " before swap <br> \$a is: " . $a  . " <br> \$b is: " . $b . "<br><br>";
//swapByVal($a,$b);
swapByRef($a, $b);
//a and b are not availabe inside
//swapGlobal();

echo " after swap <br> \$a is: " . $a .  " <br> \$b is: " . $b . "<br>";

?>