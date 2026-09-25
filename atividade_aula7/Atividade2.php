<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <a href="index.php">Página inicial</a>
        </header>
        <?php
            $N = 10;
            $res = 0;
            if ($N >= 0){
                $res = $N;
            } else{
                $res = $N * -1;
            }
            print("<p><span class='Resultado'>$res</span></p>");
        ?>
    </body>
</html>