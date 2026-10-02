<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <a href="index.php">Página inicial</a>
        </header>
        <?php
            $A = 1;
            $B = 5;
            $C = 4;
            $delta = ($B **2)-(4*$A*$C);
            $res = 0;
            $bhaskara1 = 0;
            $bhaskara2 = 0;
            $delta = sqrt($delta);
            if ($delta > 0){
                $res = "Há duas soluções reais e diferentes e delta";
                $bhaskara1 = (-$B + $delta) / (2 * $A);
                $bhaskara2 = (-$B - $delta) / (2 * $A);
            } else if ($delta == 0){
                $res = "Há apenas uma solução real";
                $bhaskara1 = (-$B + $delta) / (2 * $A);

            } else{
                $res = "Não Há solução real";
                $bhaskara1 = 0;
                $bhaskara2 = 0;
            }



            print("<p><span class='Resultado'>$res</span></p>");
            if ($delta > 0){
                print("<p><span class='Resultado'>O resulado é: $bhaskara1 e $bhaskara2</span></p>");
            } else{
                print("<p><span class='Resultado'>O resulado é: $bhaskara1</span></p>");
            }
        ?>
    </body>
</html> 