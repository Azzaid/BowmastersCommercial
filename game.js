/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.AUTO,
  spriteScale: 1.5,
  width: 2000,
  groundLevel: 1900,
  groundThickness: 200,
  enemyXposition: 4500,
  characterHeight: 650,
  characterWidth: 100,
  guiPadding: 100,
  gravity: 10000,
  enemyThrowAngle: 40,
  cameraSmoothMovementMultiplyer: 0.1,
  initialEnemyHealth: 100,
  heathLostPerHit: 50,
  state: {
    preload: preload,
    create: create
  },
};

config.characterHeight = config.characterHeight * config.spriteScale;
config.characterWidth = config.characterWidth * config.spriteScale;

config.worldScale = window.innerWidth / config.width;
config.height = window.innerHeight / config.worldScale;
if ((config.groundLevel + config.groundThickness) > config.height) {
  config.worldScale = window.innerHeight/(config.groundLevel + config.groundThickness);
  config.height = (config.groundLevel + config.groundThickness);
  config.width = window.innerWidth / config.worldScale;
};
config.playerXposition = config.width / 4 + config.characterWidth/2;
config.enemyXposition = config.playerXposition + Math.max(config.width, config.height);
config.groundThickness = Math.max(config.height - config.groundLevel*config.worldScale, config.groundThickness);

//Global variables in case if i will ned to move everything on other game stage.
var enemy = 0;
var player = 0;
var playerWeapon = 0;
var enemyWeapon = 0;

var game = new Phaser.Game(config);

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(config.worldScale, config.worldScale, 0, 0);
  
  this.load.image('logo', 'assets/UI/logo.png');
  
  this.state.add('loadingScreen', loadState)
}

function create() {
  this.state.start('loadingScreen');
}