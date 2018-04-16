/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.AUTO,
  width: '100%',
  height: '100%',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  state: {
    preload: preload,
    create: create
  }
};

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
  this.load.image('logo', 'assets/UI/logo.png');
  //this.load.image('progressBar', 'assets/UI/logo.png');
  this.state.add('loadingScreen', loadState)
}

function create ()
{
  this.state.start('loadingScreen');
}