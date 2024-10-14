<?php
echo "PokeScouter";
?>
<br>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PokeScouter</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="body">

<input type="text" id="pokemonName" placeholder="Enter Pokemon name" style="font-size: 16px; margin-bottom: 2px">
<button id="fetchPokemon"> fetch Pokemon</button>
<button id="prevPokemon"> Prev Pokemon</button>
<button id="nextPokemon"> Next Pokemon</button>
<!--<button onclick="scrollDown()"> Scroll Down</button>-->

<br>
<div>
    <div style="display: flex; margin-top: 10px">
        <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none">
        <!--    <div style="width: 200px; height: 20px; border-style: solid; border-width: 1px">-->
        <!---->
        <!--    </div>-->
        <div>
            <a href="https://pokemonshowdown.com" target="_blank">Find me on Showdown @GlaiveVG</a>
            <h3>Abilities:</h3>
            <div id="infoCard">

            </div>
        </div>
    </div>
    <table class="statbarTable">
        <tr>
            <th id="name" colspan="2"></th>
        </tr>
        <tr>
            <td>hp</td>
            <td id="hp"></td>
            <td class="statbar">
                <div class="anim" id="hpstat"></div>
            </td>
        </tr>
        <tr>
            <td>attack</td>
            <td id="attack"></td>
            <td class="statbar">
                <div class="anim" id="attackstat"></div>
            </td>
        </tr>
        <tr>
            <td>defense</td>
            <td id="defense"></td>
            <td class="statbar">
                <div class="anim" id="defensestat"></div>
            </td>
        </tr>
        <tr>
            <td>S.attack</td>
            <td id="s.attack"></td>
            <td class="statbar">
                <div class="anim" id="sattackstat"></div>
            </td>
        </tr>
        <tr>
            <td>S.defense</td>
            <td id="s.defense"></td>
                <td class="statbar">
                        <div class="anim" id="sdefensestat"></div>
                </td>
        </tr>
        <tr>
            <td>speed</td>
            <td id="speed"></td>
            <td class="statbar">
                <div class="anim" id="speedstat"></div>
            </td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>
                <div id="total"></div>
            </td>
        </tr>
    </table>
</div>

<div style="width: 250px; padding: 10px">
    <div id="pokemonType1" style="display: inline-block ;text-align: center; width: 100px; height: 20px; margin: 5px">
        <img id="typeImage1" src="" alt="">
    </div>
    <div id="pokemonType2" style="display: none ;float: right ;text-align: center; width: 100px; height: 20px; margin: 5px">
        <img id="typeImage2" src="" alt="">
    </div>
</div>
    <div class="movesList">
        <table  class="movesTable" id="movesTable" border="1">
            <thead>
                <tr style="border: 1px solid">
                    <th id="" colspan="">Level</th>
                    <th class="moveTableHead" colspan="">Move</th>
                    <th id="moveType" colspan="">Type</th>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
    </div>
<script type="module" src="js/main.js"></script>
</body>
</html>
