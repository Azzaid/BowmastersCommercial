/**
 * Created by p.zamulko on 13.04.2018.
 */

var config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
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

console.log('something!');

var game = new Phaser.Game(config);

function preload ()
{
  console.log('something!2');
  this.state.add('123', 'states/loadingScreen.js')
}

function create ()
{
  console.log('something!3');
  this.state.start('123')
}