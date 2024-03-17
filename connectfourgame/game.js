// Getting user names
var p1Name = prompt("Enter your name. Your piece is red color");
var p2Name = prompt("Enter your name. Your piece is blue color");

// Fetching Board Via JQuery

var board = $("table tr");

// Setting Up Initial Values

var gameOn = true;

var p1Color = "rgb(255, 0, 0)";

var p2Color = "rgb(0, 0, 255)";

var currentPlayer = 1;

// Helper Functions

function ChangeColor(rowNumber, colNumber, color) {
  board
    .eq(rowNumber)
    .find("td")
    .eq(colNumber)
    .find("button")
    .css("background-color", color);
}

function GetColor(rowNumber, colNumber) {
  return board
    .eq(rowNumber)
    .find("td")
    .eq(colNumber)
    .find("button")
    .css("background-color");
}

function FindAvailableCell(colNumber) {
  "finds the bottommost available cell where user can place their piece";

  for (var row = 5; row > -1; row--) {
    if (
      board
        .eq(row)
        .find("td")
        .eq(colNumber)
        .find("button")
        .css("background-color") === "rgb(128, 128, 128)"
    ) {
      return row;
    } else {
      continue;
    }
  }
}

function horizontalMatch() {
  for (var row = 5; row > -1; row--) {
    for (var c = 0; c < 4; c++) {
      rowRec = board.eq(row).find("td");

      if (
        rowRec.eq(c).find("button").css("background-color") ===
          rowRec
            .eq(c + 1)
            .find("button")
            .css("background-color") &&
        rowRec.eq(c).find("button").css("background-color") ===
          rowRec
            .eq(c + 2)
            .find("button")
            .css("background-color") &&
        rowRec.eq(c).find("button").css("background-color") ===
          rowRec
            .eq(c + 3)
            .find("button")
            .css("background-color") &&
        rowRec.eq(c).find("button").css("background-color") !==
          "rgb(128, 128, 128)"
      ) {
        return rowRec.eq(c).find("button").css("background-color");
      }
    }
  }
}

function VerticalMatch() {
  for (var col = 0; col < 7; col++) {
    for (var row = 5; row > 2; row--) {
      if (
        board
          .eq(row)
          .find("td")
          .eq(col)
          .find("button")
          .css("background-color") ===
          board
            .eq(row - 1)
            .find("td")
            .eq(col)
            .find("button")
            .css("background-color") &&
        board
          .eq(row)
          .find("td")
          .eq(col)
          .find("button")
          .css("background-color") ===
          board
            .eq(row - 2)
            .find("td")
            .eq(col)
            .find("button")
            .css("background-color") &&
        board
          .eq(row)
          .find("td")
          .eq(col)
          .find("button")
          .css("background-color") ===
          board
            .eq(row - 3)
            .find("td")
            .eq(col)
            .find("button")
            .css("background-color") &&
        board
          .eq(row)
          .find("td")
          .eq(col)
          .find("button")
          .css("background-color") !== "rgb(128, 128, 128)"
      ) {
        return board
          .eq(row)
          .find("td")
          .eq(col)
          .find("button")
          .css("background-color");
      }
    }
  }
}


function DiagonalMatchForward(){

    // Diagonal Search Forward

    var rowsSearch=[2,1,0]

    var colSearch=[0,1,2,3]

    for (var row of rowsSearch){

        for (var col of colSearch){

            var colorSets=[]

            for (var iter=0; iter<4;iter++){

                colorSets.push(board.eq(row+iter).find('td').eq(col+iter).find('button').css('background-color'))

            }

            console.log('color sets',colorSets)

            var distColor=[...new Set(colorSets)]

            console.log('distinct colors',distColor)

            if (distColor.length==1 && (distColor[0] === p1Color || distColor[0]===p2Color)){

                // board.eq(row+iter).find('td').eq(col+iter).find('button').css('border','8px solid black')

                return distColor[0]

            }



        }
    }

}


function DiagonalMatchBackward(){

    // Diagonal Search Forward

    var rowsSearch=[5,4,3]

    var colSearch=[0,1,2,3]

    for (var row of rowsSearch){

        for (var col of colSearch){

            var colorSets=[]

            for (var iter=0; iter<4;iter++){

                colorSets.push(board.eq(row-iter).find('td').eq(col+iter).find('button').css('background-color'))

            }

            console.log('color sets',colorSets)

            var distColor=[...new Set(colorSets)]

            console.log('distinct colors',distColor)

            if (distColor.length==1 && (distColor[0] === p1Color || distColor[0]===p2Color)){

                return distColor[0]

            }



        }
    }

}

// Main function

$("button").on("click", function () {
  // Find Row And Column Number To Insert Piece

  var colSelected = $(this).closest("td").index();

  var availRow = FindAvailableCell(colSelected);

  // Find Next Player And Current Color To Be Added

  if (gameOn === true) {
    if (currentPlayer === 1) {
      var colorChange = p1Color;
      var nextPlayer = 2;
    } else {
      var colorChange = p2Color;
      var nextPlayer = 1;
    }

    ChangeColor(availRow, colSelected, colorChange);

    currentPlayer = nextPlayer;
  }

  // Check Whether Game Is Over Or Not (Horizontal Match, Vertical Match)

  if (gameOn === true) {
    var colorWon = [horizontalMatch(), VerticalMatch(),DiagonalMatchForward(),DiagonalMatchBackward()];

    console.log(colorWon);

    for (color of colorWon) {
      if (color === p1Color) {
        gameOn = false;
        $("h3").text(p1Name + " Won");
        $('table').fadeOut(4000)
      } else if (color === p2Color) {
        gameOn = false;
        $("h3").text(p2Name + " Won");
        $('table').fadeOut(4000)
      }
    }
  }
});
