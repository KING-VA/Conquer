var next = 0;
var color;
var varchecker = 0;
var square;
var rand;
var moves;
var PCoinTemp;
var CCoinTemp;
var turn = 0;
var Ctemp;
var temp;
var bigPuzzle;
var puzzle;
var skip = 0;
var choice = 0;
var T1 = [9,"C", "Alaska", "AlaskaTroop", 1];
var T2 = [7,"C", "Northwest Territory", "northWestterritoriesTroop", 2];
var T4 = [5,"P", "Albertia", "AlbertiaTroop", 4];
var T3 = [10,"P", "Greenland", "GreenlandTroop", 3];
var T6 = [13,"C", "Quebec", "QuebecTroop", 6];
var T5 = [12,"P", "Ontario", "OntarioTroop", 5];
var T7 = [12,"C", "Western United States", "WestUSATroop", 7];
var T8 = [13,"P", "Eastern United States", "EastUSATroop", 8];
var T9 = [4,"C", "Central America", "CentralAmericaTroop", 9];
playSound("Grieg - In the Hall of the Mountain King.mp3", true);
onEvent("playBttn", "click", function() {
  setScreen("Instructions");
  if (skip == 1) {
    showElement("skipBttn");
  } else {
    hideElement("skipBttn");
  }
  TurnRefresh();
});
onEvent("Instructions", "keydown", function(event) {
  console.log("Key: " + event.key);
  if (event.key == "w") {
    setScreen("WinScreen");
  }
  if (event.key == "l") {
    setScreen("LoseScreen");
  }
  if (event.key == "g") {
    setScreen("MainGame");
    if (event.key == "h") {
      setScreen("HomeScreen");
    }
  }
  if (event.key == "c") {
    setScreen("ChallengeScreen");
  }
});
onEvent("Instructionsbttn", "click", function() {
  next ++;
  if (next == 1) {
    setText("instructmain", "We must win this war by conquering all of the territories.");
  }else if(next == 2){
    setText("instructmain", "In order to conquer or attack another territory, first choose the army we want to send, then choose the area to attack.");
  }else if(next == 3){
    setText("instructmain", "To win, we must solve a challenge which will help us defeat them!\n We only have 30 turns, so Good Luck Commander! ");
    setText("contunniuelabel", "Click Go to Continue ");
    hideElement("Instructionsbttn");
    showElement("continue");
    skip = 1;
  }
});
onEvent("continue", "click", function() {
  setScreen("MainGame");
  playSound("Grieg - In the Hall of the Mountain King.mp3", true);
});
onEvent("EasternUSA", "click", function() {playerchecker(T8);});
onEvent("Alaska", "click", function() {playerchecker(T1);});
onEvent("Albertia", "click", function() {playerchecker(T4);});
onEvent("CentralAmerica", "click", function() {playerchecker(T9);});
onEvent("Greenland", "click", function() {playerchecker(T3);});
onEvent("NorthWestTerritory", "click", function() {playerchecker(T2);});
onEvent("Ontario", "click", function() {playerchecker(T5);});
onEvent("Quebec", "click", function() {playerchecker(T6);});
onEvent("WesternUSA", "click", function() {playerchecker(T7);});
onEvent("startOverL", "click", function() {
  startOver();
});
onEvent("startOverW", "click", function() {
  startOver();
});
onEvent("skipBttn", "click", function() {
  setScreen("MainGame");
});
onEvent("a1", "click", function() {square = "a1";move--; checker();});
onEvent("a2", "click", function() {square = "a2";move--; checker();});
onEvent("a3", "click", function() {square = "a3";move--; checker();});
onEvent("a4", "click", function() {square = "a4";move--; checker();});
onEvent("a5", "click", function() {square = "a5";move--; checker();});
onEvent("a6", "click", function() {square = "a6";move--; checker();});
onEvent("a7", "click", function() {square = "a7";move--; checker();});
onEvent("a8", "click", function() {square = "a8";move--; checker();});
onEvent("b1", "click", function() {square = "b1";move--; checker();});
onEvent("b2", "click", function() {square = "b2";move--; checker();});
onEvent("b3", "click", function() {square = "b3";move--; checker();});
onEvent("b4", "click", function() {square = "b4";move--; checker();});
onEvent("b5", "click", function() {square = "b5";move--; checker();});
onEvent("b6", "click", function() {square = "b6";move--; checker();});
onEvent("b7", "click", function() {square = "b7";move--; checker();});
onEvent("b8", "click", function() {square = "b8";move--; checker();});
onEvent("c1", "click", function() {square = "c1";move--; checker();});
onEvent("c2", "click", function() {square = "c2";move--; checker();});
onEvent("c3", "click", function() {square = "c3";move--; checker();});
onEvent("c4", "click", function() {square = "c4";move--; checker();});
onEvent("c5", "click", function() {square = "c5";move--; checker();});
onEvent("c6", "click", function() {square = "c6";move--; checker();});
onEvent("c7", "click", function() {square = "c7";move--; checker();});
onEvent("c8", "click", function() {square = "c8";move--; checker();});
onEvent("d1", "click", function() {square = "d1";move--; checker();});
onEvent("d2", "click", function() {square = "d2";move--; checker();});
onEvent("d3", "click", function() {square = "d3";move--; checker();});
onEvent("d4", "click", function() {square = "d4";move--; checker();});
onEvent("d5", "click", function() {square = "d5";move--; checker();});
onEvent("d6", "click", function() {square = "d6";move--; checker();});
onEvent("d7", "click", function() {square = "d7";move--; checker();});
onEvent("d8", "click", function() {square = "d8";move--; checker();});
onEvent("e1", "click", function() {square = "e1";move--; checker();});
onEvent("e2", "click", function() {square = "e2";move--; checker();});
onEvent("e3", "click", function() {square = "e3";move--; checker();});
onEvent("e4", "click", function() {square = "e4";move--; checker();});
onEvent("e5", "click", function() {square = "e5";move--; checker();});
onEvent("e6", "click", function() {square = "e6";move--; checker();});
onEvent("e7", "click", function() {square = "e7";move--; checker();});
onEvent("e8", "click", function() {square = "e8";move--; checker();});
onEvent("f1", "click", function() {square = "f1";move--; checker();});
onEvent("f2", "click", function() {square = "f2";move--; checker();});
onEvent("f3", "click", function() {square = "f3";move--; checker();});
onEvent("f4", "click", function() {square = "f4";move--; checker();});
onEvent("f5", "click", function() {square = "f5";move--; checker();});
onEvent("f6", "click", function() {square = "f6";move--; checker();});
onEvent("f7", "click", function() {square = "f7";move--; checker();});
onEvent("f8", "click", function() {square = "f8";move--; checker();});
onEvent("g1", "click", function() {square = "g1";move--; checker();});
onEvent("g2", "click", function() {square = "g2";move--; checker();});
onEvent("g3", "click", function() {square = "g3";move--; checker();});
onEvent("g4", "click", function() {square = "g4";move--; checker();});
onEvent("g5", "click", function() {square = "g5";move--; checker();});
onEvent("g6", "click", function() {square = "g6";move--; checker();});
onEvent("g7", "click", function() {square = "g7";move--; checker();});
onEvent("g8", "click", function() {square = "g8";move--; checker();});
onEvent("h1", "click", function() {square = "h1";move--; checker();});
onEvent("h2", "click", function() {square = "h2";move--; checker();});
onEvent("h3", "click", function() {square = "h3";move--; checker();});
onEvent("h4", "click", function() {square = "h4";move--; checker();});
onEvent("h5", "click", function() {  square = "h5";move--; checker();});
onEvent("h6", "click", function() {  square = "h6";move--; checker();});
onEvent("h7", "click", function() {  square = "h7";move--; checker();});
onEvent("h8", "click", function() {  square = "h8";move--; checker();});
function playerchecker(start) {
  if (start[1] =="P") {
    setText("DisplayOut", ("Troops: "+start[0])+"\n Choose a territory to attack.");
    temp = start;
    PCoinTemp = temp;
    choice = 1;
  } else if (start[1] =="C" && choice == 1) {
    turn = turn+1;
    CCoinTemp = start;
    choice = 0;
    setText("DisplayOut", "Attacking...");
    setTimeout(function() {
      setScreen("ChallengeScreen");
      GameLoader(PCoinTemp, CCoinTemp);
      setText("DisplayOut", "Choose a Territory ");
    }, 1500);
  } else {
    setText("DisplayOut", "Choose Your Own Territory First");
  }
}
function GameLoader(start, end) {
  puzzle = puzzleSelect(turn);
  moves = bigPuzzle[2]+1;
  color = bigPuzzle[3];
  gameSetup(moves, puzzle, start, end);
  
}
function checker() {
  if (square == bigPuzzle[4]) {
    Ctemp = 1;
  } else if (square == bigPuzzle[5] && Ctemp==1) {
    console.log("correct");
    setProperty("ImageBoard", "image", bigPuzzle[1]);
    setProperty("answerMessage", "text-color", "#48b523");
    setText("answerMessage", "Correct");
    showElement("answerMessage");
    hideElement("MoveCounter");
    hideElement("colorLabel");
    CCoinTemp[0] = CCoinTemp[0] - 6;
    
    setTimeout(function() {
      setText("CTroops", "Enemy: " + CCoinTemp[0]);
      screenManager(PCoinTemp, CCoinTemp);
      setTimeout(function() {
        setScreen("MainGame");
        hideElement("answerMessage");
        Ctemp = 0;
      }, 1000);
    }, 2000);
  } else {
    console.log("incorrect");
    setProperty("answerMessage", "text-color", "#d41010");
    setText("answerMessage", "Incorrect");
    showElement("answerMessage");
    hideElement("colorLabel");
    hideElement("MoveCounter");
    PCoinTemp[0] = PCoinTemp[0] - 3;
    setTimeout(function() {
      GameLoader(PCoinTemp, CCoinTemp);
      hideElement("answerMessage");
      screenManager(PCoinTemp, CCoinTemp);
      setTimeout(function() {
        setScreen("MainGame");
        hideElement("answerMessage");
        Ctemp = 0;
      }, 1000);
    }, 2000);
  }
}
function puzzleSelect(num) {
  if (num == 1) {
    bigPuzzle = ["puzzle1.PNG", "puzzle1s.PNG", 1, 0, "h1", "a8"];
    return bigPuzzle[0];
  } else if (num == 3) {
    bigPuzzle = ["puzzle2.PNG", "puzzle2s.PNG", 1, 1, "g2", "g4"];
    return bigPuzzle[0];
  } else if (num == 5) {
    bigPuzzle = ["puzzle3.PNG", "puzzle3s.PNG", 1, 0, "e6", "d5"];
    return bigPuzzle[0];
  } else if (num ==7) {
    bigPuzzle = ["puzzle4.JPG", "puzzle4s.JPG", 1, 1, "e5", "c6"];
    return bigPuzzle[0];
  } else if (num==9 ||num==27) {
    bigPuzzle = ["puzzle5.JPG", "puzzle5s.JPG", 1, 0, "g3", "g7"];
    return bigPuzzle[0];
  } else if (num==11) {
    bigPuzzle = ["puzzle6.JPG", "puzzle6s.JPG", 1, 0, "h8", "f6"];
    return bigPuzzle[0];
  } else if (num==13) {
    bigPuzzle = ["puzzle7.JPG", "puzzle7s.JPG", 1, 1, "f2", "d4"];
    return bigPuzzle[0];
  } else if ( num==15) {
    bigPuzzle = ["puzzle8.JPG", "puzzle8s.JPG", 1, 1, "c5", "a5"];
    return bigPuzzle[0];
  } else if (num==17) {
    bigPuzzle = ["puzzle9.JPG", "puzzle9s.JPG", 1, 0, "f3", "e5"];
    return bigPuzzle[0];
  } else if (num==19) {
    bigPuzzle = ["puzzle10.JPG", "puzzle10s.JPG", 1, 0, "g4", "h6"];
    return bigPuzzle[0];
  } else if (num==21) {
    bigPuzzle = ["puzzle11.JPG", "puzzle11s.JPG", 1, 0, "b5", "c7"];
    return bigPuzzle[0];
  } else if (num==23) {
    bigPuzzle = ["puzzle12.JPG", "puzzle12s.JPG", 1, 1, "f4", "e5"];
    return bigPuzzle[0];
  } else if (num==25) {
    bigPuzzle = ["puzzle13.JPG", "puzzle13s.JPG", 1, 1, "f4", "g6"];
    return bigPuzzle[0];
  } else {
    bigPuzzle = ["puzzle14.JPG", "puzzle14s.JPG", 1, 1, "f6", "h8"];
    return bigPuzzle[0];
  }
}
function screenManager(start, end) {
  if (start[0]<=0) {
    start[0] = 1;
    start[1] = "C";
    setProperty(start[3], "text-color", "#d41010");
    setText(start[3], start[0].toString());
    setText(end[3], end[0].toString());
    //transer land to other group
  } else if (end[0]<=0) {
    end[0] = 1;
    end[1] = "P";
    setProperty(end[3], "text-color", "#48b523");
    setText(start[3], start[0].toString());
    setText(end[3], end[0].toString());
  } else {
    setText(start[3], start[0].toString());
    setText(end[3], end[0].toString());
  }
  TurnRefresh();
  colorChanger();
}
function colorChanger(){
  if (T1[1] == "C") {
   setProperty("AlaskaTroop", "text-color", "#d41010");
  } else {
    setProperty("AlaskaTroop", "text-color", "#48b523");
  }
  if (T2[1] == "C") {
    setProperty("northWestterritoriesTroop", "text-color", "#d41010");
  } else {
    setProperty("northWestterritoriesTroop", "text-color", "#48b523");
  }
  if (T3[1] == "C") {
    setProperty("GreenlandTroop", "text-color", "#d41010");
  } else {
    setProperty("GreenlandTroop", "text-color", "#48b523");
  }
  if (T4[1] == "C") {
    setProperty("AlbertiaTroop", "text-color", "#d41010");
  } else {
    setProperty("AlbertiaTroop", "text-color", "#48b523");
  }
  if (T5[1] == "C") {
    setProperty("OntarioTroop", "text-color", "#d41010");
  } else {
    setProperty("OntarioTroop", "text-color", "#48b523");
  }
  if (T6[1] == "C") {
    setProperty("QuebecTroop", "text-color", "#d41010");
  } else {
    setProperty("QuebecTroop", "text-color", "#48b523");
  }
  if (T7[1] == "C") {
    setProperty("WestUSATroop", "text-color", "#d41010");
  } else {
    setProperty("WestUSATroop", "text-color", "#48b523");
  }
  if (T8[1] == "C") {
    setProperty("EastUSATroop", "text-color", "#d41010");
  } else {
    setProperty("EastUSATroop", "text-color", "#48b523");
  }
  if (T9[1] == "C"){
    setProperty("CentralAmericaTroop", "text-color", "#d41010");
  } else {
    setProperty("CentralAmericaTroop", "text-color", "#48b523");
  }
  
}
function gameSetup(moves, puzzle, PTroop, CTroop) {
  showElement("colorLabel");
  showElement("MoveCounter");
  setText("PTroops", "Troops: " + PTroop[0]);
  setText("CTroops", "Enemy: " + CTroop[0]);
  setText("AttackLocation", "End:\n " + CTroop[2]);
  setText("StartLocation", "Start:\n " + PTroop[2]);
  if (color === 0) {
    setText("colorLabel", "You are White");
  } else {
    setText("colorLabel", "You are Black");
  }
  setText("MoveCounter", "You Have " + (moves-1) + " Move(s) Left");
  setImageURL("ImageBoard", puzzle);
  showElement("CinstructionLabel");
  setTimeout(function() {
    setText("CinstructionLabel", "In order to make a move, first select the piece to move. Then click on the square to move it.");
    setTimeout(function() {
      hideElement("CinstructionLabel");
    }, 3000);
  }, 2500);
}
function TurnRefresh() {
  setText("TurnNumber", "Turn: "+turn);
  if (turn%2!==0) {
    setProperty("TurnLabel", "text-color", "#d41010");
    setText("TurnLabel", "Enemy Turn!");
    setTimeout(function() {
      CPUmove();
    }, 2750);
  } else {
    setProperty("TurnLabel", "text-color", "#48b523");
    setText("TurnLabel", "Your Turn!");
  }
}
function CPUmove(){
  console.log(turn);
  var Ctemparray = [];
  var Ptemparray = [];
  if (T1[1] == "C") {
    varchecker = T1;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T1;
    appendItem(Ptemparray, varchecker);
  }
  if (T2[1] == "C") {
    varchecker = T2;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T2;
    appendItem(Ptemparray, varchecker);
  }
  if (T3[1] == "C") {
    varchecker = T3;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T3;
    appendItem(Ptemparray, varchecker);
  }
  if (T4[1] == "C") {
    varchecker = T4;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T4;
    appendItem(Ptemparray, varchecker);
  }
  if (T5[1] == "C") {
    varchecker = T5;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T5;
    appendItem(Ptemparray, varchecker);
  }
  if (T6[1] == "C") {
    varchecker = T6;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T6;
    appendItem(Ptemparray, varchecker);
  }
  if (T7[1] == "C") {
    varchecker = T7;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T7;
    appendItem(Ptemparray, varchecker);
  }
  if (T8[1] == "C") {
    varchecker = T8;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T8;
    appendItem(Ptemparray, varchecker);
  }
  if (T9[1] == "C"){
    varchecker = T9;
    appendItem(Ctemparray, varchecker);
  } else {
    varchecker = T9;
    appendItem(Ptemparray, varchecker);
  }
  var Cstart = [0,0];
  var Cend = [0,0];
  Cstart = Ctemparray[(randomNumber(0,Ctemparray.length-1))];
  Cend = Ptemparray[(randomNumber(0,Ptemparray.length-1))];
  if(Ptemparray.length === 0){
    setScreen("LoseScreen");
  }else if (Ctemparray.length === 0){
    setScreen("WinScreen");
  } else if(turn >= 30){
    setScreen("LoseScreen");
    showElement("lossoutput");
  }
  setText("DisplayOut", "Enemy Turn:\nStart: "+Cstart[2]+"\nEnd: "+Cend[2]);
  rand = randomNumber(0,10);
  if(rand%2 === 0){
    Cend[0] = Cend[0] -6;
    setText("DisplayOut", "Enemy Turn:\nStart: "+Cstart[2]+"\nEnd: "+Cend[2] + "\n\n Attack Successful");
  }else{
    setText("DisplayOut", "Enemy Turn:\nStart: "+Cstart[2]+"\nEnd: "+Cend[2] + "\n\n Attack Failed");
  }
  setTimeout(function() {
    turn++;
    screenManager(Cend,Cstart);
    setText("DisplayOut", "Choose a Territory to Attack");
  }, 4500);
}
function startOver() {
  turn = 0;
  T1 = [(randomNumber(7, 11)),"C", "Alaska", "AlaskaTroop", 1];
  T2 = [(randomNumber(5, 9)),"C", "Northwest Territory", "northWestterritoriesTroop", 2];
  T4 = [(randomNumber(3, 7)),"P", "Albertia", "AlbertiaTroop", 4];
  T3 = [(randomNumber(8, 12)),"P", "Greenland", "GreenlandTroop", 3];
  T6 = [(randomNumber(11, 15)),"C", "Quebec", "QuebecTroop", 6];
  T5 = [(randomNumber(10, 14)),"P", "Ontario", "OntarioTroop", 5];
  T7 = [(randomNumber(10, 14)),"C", "Western United States", "WestUSATroop", 7];
  T8 = [(randomNumber(11, 15)),"P", "Eastern United States", "EastUSATroop", 8];
  T9 = [(randomNumber(4, 8)),"C", "Central America", "CentralAmericaTroop", 9];
  next = 0;
  turn = 0;
  moves = 0;
  puzzle = "";
  bigPuzzle = [];
  temp = "";
  choice = 0;
  hideElement("lossoutput");
  screenManager(T1,T2);
  screenManager(T3,T4);
  screenManager(T5,T6);
  screenManager(T7,T8);
  screenManager(T9,T1);
  setScreen("HomeScreen");
}
