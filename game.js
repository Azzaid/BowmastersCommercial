/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.CANVAS,
  spriteScale:0.5,
  backgroundWidth:5000,
  backgroundHeight:1900,
  groundThickness: 250,
  playerXposition:750,
  enemyXposition: 4500,
  characterHeight:600,
  characterWidth:100,
  guiPadding: 100,
  gravity: 5000,
  enemyThrowAngle:40,
  cameraSmoothMovementMultiplyer: 0.1,
  initialEnemyHealth:100,
  heathLostPerHit:50,
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
config.gravity=config.gravity*config.spriteScale;

config.height = config.backgroundHeight+config.groundThickness;
config.fullWorldWidth=config.backgroundWidth;
config.worldScale =  window.innerHeight/config.height;
config.width = window.innerWidth/config.worldScale;

//Global variables in case if i will ned to move everything on other game stage.
var enemy = 0;
var player = 0;
var playerWeapon=0;
var enemyWeapon=0;

var game = new Phaser.Game(config);

function preload ()
{
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.scale.setUserScale(config.worldScale, config.worldScale, 0, 0);

  this.load.image('logo', 'assets/UI/logo.png');
  //this.load.image('progressBar', 'assets/UI/logo.png');
  this.state.add('loadingScreen', loadState)
}

function create ()
{
  this.state.start('loadingScreen');
}