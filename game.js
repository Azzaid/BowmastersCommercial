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

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('logo', 'assets/UI/logo.png');
  this.load.image('thorTexture', 'assets/Character/Thor/thor_odinson.png');
  this.load.json('thorMesh', 'assets/Character/Thor/thor_odinson.json');
  //this.state.add('loadingScreen', loadState)
}

function create ()
{
  var logo = this.add.sprite(100, 100, 'logo');
  var thor = game.add.creature(10, 10, 'thorTexture', 'thorMesh');
  //this.state.start('loadingScreen');
}