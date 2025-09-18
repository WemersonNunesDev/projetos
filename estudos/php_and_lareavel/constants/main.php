<?php 
define ("CAPSLOCK", "Não, eu não estou em capslock.");

const MYBOOK = "Protocolo Bluehand";

echo CAPSLOCK;
echo MYBOOK;
// ---------------------------------------------------------

define ("animes", [
    "naruto",
    "one piece",
    "jujutsu",
    "kimetsu no yaba",
    "death note"
]);

echo ucfirst(animes[0]);
?>