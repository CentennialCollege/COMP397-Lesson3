/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />



// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

// Game Variables
var helloLabel: objects.Label;
var startButton: createjs.Bitmap;

function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting


    main(); // call main game function
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}

// Event Handler for mouse over
function overStartButton(event: createjs.MouseEvent): void {
    startButton.alpha = 0.7;
}

// Event Handler for mouse out
function outStartButton(event: createjs.MouseEvent): void {
    startButton.alpha = 1.0;
}


// This is where all the fun happens
function main(): void {
    helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel); // add label to the stage

    startButton = new createjs.Bitmap("../../Assets/images/StartButton.png");
    startButton.on("click", clickStartButton, this);
    startButton.on("mouseover", overStartButton, this);
    startButton.on("mouseout", outStartButton, this);
    stage.addChild(startButton);


}
 