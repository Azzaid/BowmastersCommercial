/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.AUTO,
  spriteScale:0.4,
  backgroundWidth:5000,
  backgroundHeight:1900,
  groundThickness: 250,
  playerXposition:750,
  enemyXposition: 4500,
  characterHeight:600,
  characterWidth:100,
  guiPadding: 100,
  gravity: 1000,
  enemyThrowAngle:70,
  cameraSmoothMovementMultiplyer: 0.1,
  state: {
    preload: preload,
    create: create
  }
};

config.backgroundWidth=config.backgroundWidth*config.spriteScale;
config.backgroundHeight=config.backgroundHeight*config.spriteScale;
config.groundThickness=config.groundThickness*config.spriteScale;
config.playerXposition=config.playerXposition*config.spriteScale;
config.enemyXposition=config.enemyXposition*config.spriteScale;
config.characterHeight=config.characterHeight*config.spriteScale;
config.characterWidth=config.characterWidth*config.spriteScale;
config.guiPadding=config.guiPadding*config.spriteScale;

config.height = config.backgroundHeight+config.groundThickness;
config.fullWorldWidth=config.backgroundWidth;
config.worldScale =  window.innerHeight * window.devicePixelRatio/config.height;
config.width = window.innerWidth/config.worldScale;

//constants representing game state and some of constants which i did not managed how to set them localy. As far as i see phaser demand this to be global.

var tutorialModeOn = true;
var enemyMoveInProgress = false;
var playerAiming = false;
var finishMode = false;
var enemy = 0;
var enemyHealh = 100;
var player = 0;
var playeHealt = 100;
var enemyHitbox = 0;
var dragStartPosition = [0, 0];
var playerWeapon=0;
var mjolnirSwing =0;
var enemyWeapon=0;
var gugnirSwing = 0;
var aimLine = [];
var aimAngle = [];
var ground =0;
var enemyDistanceMeter = 0;
var enemyDistanceText =0;

var game = new Phaser.Game(config);

function preload ()
{
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale((window.innerHeight * window.devicePixelRatio)/config.height, window.innerHeight * window.devicePixelRatio/config.height, 0, 0);

  this.load.image('logo', 'assets/UI/logo.png');
  //this.load.image('progressBar', 'assets/UI/logo.png');
  this.state.add('loadingScreen', loadState)
}

function create ()
{
  this.state.start('loadingScreen');
}