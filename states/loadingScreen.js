/**
 * Created by p.zamulko on 13.04.2018.
 */

var loadState = {
  preload:function ()
  {
    var logo = this.add.sprite(100, 100, 'logo');
    var loadBar = this.load.image('progressBar', '../assets/UI/logo.png');
    loadBar.anchor(0.5,0.5);
    game.load.setPreloadSprite(loadBar);


    game.add.plugin(PhaserSpine.SpinePlugin);
    game.load.spine('Thor', '../assets/Character');


    this.load.state('gameScreen', gameScreen);
    console.log("loaded loader");
  },
  create: function  ()
  {
    //this.state.start('gameScreen')
  }
};