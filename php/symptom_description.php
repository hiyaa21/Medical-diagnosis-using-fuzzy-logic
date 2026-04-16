<?php
require "dp.php";

$str = '';

$q = "SELECT sname, fuzzy_set FROM symptom";
$res = mysqli_query($con, $q);

while($row = mysqli_fetch_assoc($res)) {
    $str .= $row['sname'] . ',' . $row['fuzzy_set'] . '|';
}

echo $str;
?>