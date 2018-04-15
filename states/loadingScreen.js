/**
 * Created by p.zamulko on 13.04.2018.
 */

var loadState = {
  preload:function ()
  {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5);
    //var loadBar = game.add.sprite(10, 10, 'progressBar');
    game.load.setPreloadSprite(logo, 'width');


    game.add.plugin(PhaserSpine.SpinePlugin);

    game.load.image('background', 'assets/BG/bm_bg.png');
    game.load.image('ground', 'assets/BG/bm_ground.png');
    game.load.image('tutorialShadow', 'assets/BG/tutorialScene.png');
    game.load.image('tutorialHand', 'assets/UI/tutor_hand.png');
    game.load.image('hammer', 'assets/Character/Thor/hammer_thor.png');


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