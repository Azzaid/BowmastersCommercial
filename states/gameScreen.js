/**
 * Created by p.zamulko on 13.04.2018.
 */

var gameScreen = {
  preload:function ()
  {
    game.world.setBounds(0, 0, 5000, 1900);
  },
  create: function  ()
  {
    cursors = game.input.keyboard.createCursorKeys();

    game.add.sprite(0,0,'background');
    game.add.sprite(0,1750,'ground');

    var player = game.add.spine(300, 1750, 'Thor');
    player.setMixByName("aim", "idle_apple", 2);
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );

    var enemy = game.add.spine(1000, 1750, 'Loki');
    enemy.scale.x*=-1;
    enemy.setAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );

    var tutorialShadow = game.add.graphics(500,1000);
    tutorialShadow.beginFill('FFFFFF', 0.7);
    tutorialShadow.drawCircle(0, 0, 500);
    tutorialShadow.beginFill('FFFFFF', 0);
    tutorialShadow.drawCircle(0, 0, 100);
    //var tutorialStage = game.add.graphics(0,1200);
    //tutorialStage.beginFill('FFFFFF');
    //tutorialStage.drawCircle(300, 300, 300);
    //tutorialShadow.mask = tutorialStage;

  },
  update: function () {

  if (cursors.up.isDown)
  {
    game.camera.y -= 4;
  }
  else if (cursors.down.isDown)
  {
    game.camera.y += 4;
  }

  if (cursors.left.isDown)
  {
    game.camera.x -= 4;
  }
  else if (cursors.right.isDown)
  {
    game.camera.x += 4;
  }

}
};