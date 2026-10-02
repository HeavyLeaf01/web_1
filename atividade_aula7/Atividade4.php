<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <a href="index.php">Página inicial</a>
        </header>
        <?php
            $N1 = 7;
            $N2 = 0;
            $N3 = 3;
            $N4 = 4;
            $NE = 10;
            $res = 0;
            $MD1 = ($N1 + $N2 + $N3 + $N4) / 4;
            $MD2 = ($MD1 + $NE) / 2;
            $resMedia = $MD1;
            if ($MD1 >= 7){
                $res = "Aprovado";
            } else if ($MD2 >= 5){
                $res = "Aprovado em exame";
                $resMedia = $MD2;
            } else{
                $res = "Reprovado";
                
            }
            print("<p><span class='Resultado'>$res</span></p>");
            print("<p><span class='Resultado'>A média é: $resMedia</span></p>");
        ?>
    </body>
</html>