/**
 * Created by p.zamulko on 13.04.2018.
 */

var loadState = {
  preload:function ()
  {
    loadBar = this.load.image('progressBar', '../assets/UI/logo.png');
    loadBar.anchor(0.5,0.5);
    this.load.setPreloadSprite(loadBar);
    this.load.state('gameScreen', 'gameScreen');
    console.log("loaded loader");
  },
  create: function  ()
  {
    this.state.start('gameScreen')
  }
};