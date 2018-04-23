/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.AUTO,
  spriteScale: 0.5,
  zoomLevel:1,
  groundLevel: 1900,
  groundThickness: 97,
  characterHeight: 650,
  characterWidth: 200,
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
config.groundLevel = config.groundLevel * config.spriteScale;
config.groundThickness = config.groundThickness * config.spriteScale;
config.gravity = config.gravity * config.spriteScale;
config.guiPadding = config.guiPadding * Math.pow(config.spriteScale, 2);

config.width = config.characterWidth*8 / config.zoomLevel;
config.worldScale = window.innerWidth / config.width;
config.height = window.innerHeight / config.worldScale;
if (config.height < config.characterHeight*2 / config.zoomLevel) {
  config.height = config.characterHeight*2 / config.zoomLevel;
  config.worldScale = window.innerHeight/ config.height;
  config.width = window.innerWidth / config.worldScale;
};

config.playerXposition = config.width / 4 + config.characterWidth/2;
config.enemyXposition = config.playerXposition + config.characterWidth*20;

config.worldWidth = config.enemyXposition + config.width/2;
config.worldHeight = config.groundLevel + Math.max(config.height - config.groundLevel*config.worldScale, config.groundThickness);

//Global variables in case if i will ned to move everything on other game stage.
var enemy = 0;
var player = 0;
var playerWeapon = 0;
var enemyWeapon = 0;

var game = new Phaser.Game(config);

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(config.worldScale, config.worldScale, -1, -1);
  
  this.load.image('logo', 'assets/UI/logo.png');
  
  this.state.add('loadingScreen', loadState)
}

function create() {
  this.state.start('loadingScreen');
}