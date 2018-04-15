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
var enemyHitbox = 0;
var dragStartPosition = [0, 0];
var mjolnir=0;
var mjolnirSwing =0;
var aim = [];
var aimAngle = [];

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