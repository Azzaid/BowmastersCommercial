/**
 * Created by p.zamulko on 13.04.2018.
 */

var gameScreen = {
  preload:function ()
  {
  },
  create: function  ()
  {
    game.add.sprite(0,0,'background');
    game.add.sprite(0,1700,'ground');

    var player = game.add.spine(300, 600, 'Thor');
    player.setMixByName("aim", "idle_apple", 2);
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );

    var enemy = game.add.spine(800, 600, 'Loki');
    enemy.scale.x*=-1;
    enemy.setAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );

  }
};