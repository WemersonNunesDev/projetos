<?php 

$name = "Wemerson Nunes\n";
$name_capitalize = ucfirst("wemerson nunes\n");
$string_replace = str_replace("Nunes", "Pereira", $name);

$list = explode(" ", $name);
print_r($list);

echo strtoupper(($name));
echo strtolower(($name));
echo $name_capitalize;
echo strrev($name);
echo $string_replace;
echo trim($name);

?>