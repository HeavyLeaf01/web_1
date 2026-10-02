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
            $res = 0;
            $MD = ($N1 + $N2 + $N3 + $N4) / 4;
            if ($MD >= 5){
                $res = "Aprovado";
            } else{
                $res = "Reprovado";
            }
            print("<p><span class='Resultado'>$res</span></p>");
            print("<p><span class='Resultado'>A média é: $MD</span></p>");
        ?>
    </body>
</html>