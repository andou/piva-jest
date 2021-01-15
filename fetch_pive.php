<?php
libxml_use_internal_errors(true);

$tot = isset($argv[1]) && !empty($argv[1]) ? $argv[1] : 10;
$wait = isset($argv[1]) && !empty($argv[1]) ? $argv[1] : 0;

$pive = [];
for ($c = 0; $c < $tot; $c++) {
    $dom = new DomDocument;
    $dom->loadHTMLFile("https://strumentidev.it/partita-iva/random/result");
    $xpath = new DomXPath($dom);
    $nodes = $xpath->query("//input[@class='form-control setUppercase']");
    foreach ($nodes as $node) {
        $pive[] = "'" . $node->getAttribute('value') . "'";
    }
    sleep($wait);
}
echo "let pive_valide = [\n" . implode(",\n", $pive) . "\n];\nmodule.exports = pive_valide;\n";