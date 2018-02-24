$(document).ready(function () {

    // =============== Start Variables ==============================

    // crystals var to be used for setting values
    var crystals;

    // Wins over time
    var totalWins = 0;

    // Losses over time
    var totalLosses = 0;

    // User's current game score (changes over course of game)
    var userScore = 0

    // Targeted game score (generated randomNumber function)
    var userTargetScore = randomNumber();

    // =============== End Variables ==============================

    // =============== Start Functions ==============================

    // Need the following functions:

    // 1. userTargetScore = establishes user's target score
    function userTargetScore() {
        return Math.floor(Math.random() * 102) + 19;
        console.error(msg);
    }


    // 2. randomNumber = function that helps us get randomized numbers to add to change our crystal values and target score

    function randomNumber() {
        return Math.floor(Math.random() * 102) + 19;
        console.log(error);
    }

    // 3. setCrystals = assigns values to crystals, and gives us a userTargetScore

    function setCrystals() {
        return {
            // Assigns img to render later
            // Sets crystal values randomly (between 1-12) 
            blueCrystal: {
                crystalPic: "assets/images/blue.png",
                crystalValue: Math.floor(Math.random() * 12) + 1
            },
            redCrystal: {
                crystalPic: "assets/images/red.png",
                crystalValue: Math.floor(Math.random() * 12) + 1
            },
            yellowCrystal: {
                crystalPic:"assets/images/yellow.png",
                crystalValue: Math.floor(Math.random() * 12) + 1
            },
            greenCrystal: {
                crystalPic: "assets/images/green.png",
                crystalValue: Math.floor(Math.random() * 12) + 1
            },
        };
        console.log(error)
    }

    // 4. reloadGame =  establishes UserTargetScore, crystalValue, userScore, score-div(reloads on refresh)

    function reloadGame() {
        userScore = 0;
        crystals = setCrystals();
        userTargetScore = randomNumber();
        $("#score-div").text(randomNumber);
        console.log(error);
    }

    // 5. reloadPage = manipulates DOM, updates scores, etc. 

    function reloadPage(ifGameOver) {
        // if user wins run this
        if (userScoreEqualsTargetScore === true) {
            // shows win message
            $("#score-div").append($("<div>").text("You've won the game!"));
            // runs reloadGame function
            reloadGame();
            renderUserTargetScore();
            console.log(error);
        }
        else if (userScoreEqualsTargetScore === false) {
            $("#score-div").append($("<div>").text("You've lost the game!"));
            // runs reloadGame function
            reloadGame();
            renderUserTargetScore();
            console.log(error);
        }

        var target = $("<p>").text("Target Score: ");
        var current = $("<p>").text("Current Score: ");
        var wins = $("<p>").text("Wins: ");
        var losses = $("<p>").text("Losses: ");
    
        $("#target").append(target);
        $("#current").append(current);
        $("#wins").append(wins);
        $("#losses").append(losses)
    }

    //  6. displayCrystals = render crystals on HTML

    function displayCrystals() {
    for (var key in crystals) {
      var crystalsDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalsPics = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].crystalPic);
      crystalsDivs.append(crystalsPics);
      $("#crystals-div").append(crystalsDiv);
    }
  }

  // 7. displayCrystals = render crystals on HTML
  // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.
  function updateUserTargetScore(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    userTargetScore += crystals[crystal.attr("data-name")].crystalValue;
  }

  // Function that will render your "current guess" number to the page.
  function displayUserScore() {
    var current = $("<p id=current>").text(userScore);
    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
  }

  reloadGame();
  reloadPage();
  displayCrystals();
  displayUserScore();

    // =============== End Functions ==============================
});