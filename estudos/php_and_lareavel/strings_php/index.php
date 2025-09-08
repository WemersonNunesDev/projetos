<?php 

$text = "Hello World!";
$tamanhaDaString = strlen($text);
$quantasPalavras = str_word_count(($text));
$indexOfWord = strpos($text, 'World');

echo "A string possui um tamanho: $tamanhaDaString";
echo "\nQuantidade de palavras: $quantasPalavras";
echo "\nPosição em: $indexOfWord";

?>