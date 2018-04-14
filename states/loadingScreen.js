/**
 * Created by p.zamulko on 13.04.2018.
 */

var loadState = {
  preload:function ()
  {

    var logo = game.add.sprite(100, 100, 'logo');
    var loadBar = game.add.sprite(10, 10, 'progressBar');
    game.load.setPreloadSprite(loadBar, 'width');


    game.add.plugin(PhaserSpine.SpinePlugin);

    game.load.image('background', 'assets/BG/bm_bg.png');
    game.load.image('ground', 'assets/BG/bm_ground.png');

    game.load.spine('Thor', 'assets/Character/Thor/thor_odinson.json');
    game.load.spine('Loki', 'assets/Character/Loki/loki_upgraded.json');

    this.state.add('gameScreen', gameScreen);

    console.log("loaded loader");
  },
  create: function  ()
  {
    this.state.start('gameScreen')
  }
};