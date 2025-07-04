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
    <div style="max-width: 350px; display: flex">
        <div style="display: flex; flex-direction: column;">
            <input type="text" id="pokemonName" placeholder="Enter Pokemon name" style="font-size: 16px; margin-bottom: 5px;">
            <div style="display: flex; justify-content: space-between">
                <button id="prevPokemon"> Prev Pokemon</button>
                <button id="nextPokemon"> Next Pokemon</button>
            </div>
        </div>
        <div>
            <button id="fetchPokemon" style="margin-left: 5px"> fetch Pokemon</button>
        </div>
    </div>
    <div style="width: auto">
        <div style="display: flex; margin-top: 10px; height: 110px">
            <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none; max-height: 96px">
            <div>
                <a href="https://pokemonshowdown.com" target="_blank">Find me on Showdown @GlaiveVG</a>
                <div style="font-size: 20px; font-weight: bold">Abilities:</div>
                <div id="infoCard"></div>
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
    <div style="display: flex">
        <div class="movesList">
            <table  class="movesTable" id="movesTable" border="1">
                <thead>
                <tr style="border: 1px solid">
                    <th id="" colspan="">Level</th>
                    <th class="moveTableHead" colspan="">Move</th>
                    <th id="movePower" colspan="">Power</th>
                    <th id="moveType" colspan="">Type</th>
                </tr>
                </thead>
                <tbody id="tbody">

                </tbody>
            </table>
        </div>
        <div>
            <div id="radioDiv" style="margin: 40px 0px 0px 5px; height:115px; background:white; border-radius: 20px; padding:10px; box-shadow: 4px 4px 5px lightgrey; overflow: auto;">
                    <input type="radio" id="1" name="generation" value="red-blue" checked>
                    <label for="1">red-blue</label><br>
                    <input type="radio" id="2" name="generation" value="gold-silver">
                    <label for="2"></label>gold-silver<br>
                    <input type="radio" id="3" name="generation" value="ruby-sapphire">
                    <label for="3"></label>ruby-sapphire<br>
                    <input type="radio" id="4" name="generation" value="firered-leafgreen">
                    <label for="4"></label>firered-leafgreen<br>
                    <input type="radio" id="5" name="generation" value="diamond-pearl">
                    <label for="5"></label>diamond-pearl<br>
                    <input type="radio" id="6" name="generation" value="black-2-white-2">
                    <label for="6"></label>black2-white2<br>
            </div>
            <div id="radioDisplay2" style="margin: 20px 0px 20px 5px; height: 20px; background: white; border-radius: 20px; box-shadow: 4px 4px 5px lightgrey; text-align: center; padding:2px;">
            </div>
            <div id="genImageHolder" style="margin-left: 5px; height: 100px; background: white; border-radius: 20px; box-shadow: 4px 4px 5px lightgrey;">

            </div>
        </div>
    </div>
    <script type="module" src="js/main.js"></script>
</body>
</html>
