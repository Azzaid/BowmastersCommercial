/**
 * Created by p.zamulko on 13.04.2018.
 */

var loadState = {
  preload:function ()
  {

    var logo = game.add.sprite(config.width/2, config.groundThickness, 'logo');
    logo.anchor.setTo(0.5, 0);
    logo.scale.setTo(config.spriteScale*2);

    loadBarHolder = game.add.graphics(config.width/4, config.height/3*2);
    loadBarHolder.beginFill(0xA645B6);
    loadBarHolder.drawRoundedRect(0, 0, config.width/2, config.guiPadding*2, config.guiPadding);

    loadBarGraphic = game.add.graphics(config.width/4+config.guiPadding/2, config.height/3*2+config.guiPadding/2);
    loadBarGraphic.beginFill(0xEA3100);
    loadBarGraphic.drawRoundedRect(0, 0, config.width/2-config.guiPadding, config.guiPadding, config.guiPadding/2);
    loadBar = game.add.sprite(config.width/4+config.guiPadding/2, config.height/3*2+config.guiPadding/2, loadBarGraphic.generateTexture());
    loadBarGraphic.destroy();
    game.load.setPreloadSprite(loadBar, 0);

    game.add.plugin(PhaserSpine.SpinePlugin);

    game.load.image('background', 'assets/BG/bm_bg.png');
    game.load.image('ground', 'assets/BG/bm_ground.png');
    game.load.image('tutorialShadow', 'assets/BG/tutorialScene.png');
    game.load.image('tutorialHand', 'assets/UI/tutor_hand.png');
    game.load.image('hammer', 'assets/Character/Thor/hammer_thor.png');
    game.load.image('spear', 'assets/Character/Loki/upgrade_loki_spear.png');
    game.load.image('finish banner', 'assets/UI/finish_him.png');
    game.load.image('lightingSparks1', 'assets/FX/FX_Light_coil_L.png');
    game.load.image('lightingSparks2', 'assets/FX/FX_Light_coil_M.png');
    game.load.image('lightingStrikeStage1', 'assets/FX/FX_Mjolnir_lightning_1.png');
    game.load.image('lightingStrikeStage2', 'assets/FX/FX_Mjolnir_lightning_1a.png');
    game.load.image('Ash', 'assets/FX/FX_Ash_pile_0.png');
    game.load.image('Loki icon', 'assets/UI/icon_upgrade_loki.png');
    game.load.image('victoryBanner', 'assets/UI/VictoryBanner.png');
    game.load.image('downloadButton', 'assets/UI/Install.png');
    game.load.image('lifeBarHolder', 'assets/UI/LifeBar.png');
    game.load.image('enemy pointer', 'assets/UI/arrow.png');
    game.load.image('prizeChest', 'assets/UI/chest.png');
    game.load.image('play button', 'assets/UI/PlayNow.png');
    game.load.image('confetti1', 'assets/FX/confetti/pixel_blue.png');
    game.load.image('confetti2', 'assets/FX/confetti/pixel_green.png');
    game.load.image('confetti3', 'assets/FX/confetti/pixel_red.png');
    game.load.image('confetti4', 'assets/FX/confetti/pixel_white.png');
    game.load.image('confetti5', 'assets/FX/confetti/pixel_yellow.png');

    game.load.spine('Thor', 'assets/Character/Thor/thor_odinson.json');
    game.load.spine('Loki', 'assets/Character/Loki/loki_upgraded.json');

    this.state.add('gameScreen', gameScreen);

  },
  create: function  ()
  {
    this.state.start('gameScreen')
  }
};