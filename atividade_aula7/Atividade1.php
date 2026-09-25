<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <a href="index.php">Página inicial</a>
        </header>
        <?php
            $A = 100;
            $B = 67;
            $res = 0;
            if($A >= $B){
                $res = $A - $B;
            } else{
                $res = $B - $A;
            }
            print("<p><span class='Resultado'> O resultado da subtração é: $res</span></p>");
        ?>
    </body>
</html>