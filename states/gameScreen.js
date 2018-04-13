/**
 * Created by p.zamulko on 13.04.2018.
 */

var gameScreen = {
  preload:function ()
  {
    var indic = this.load.image('indicator', '../assets/UI/logo.png');
    indic.anchor(0.5);
  },
  create: function  ()
  {

    console.log("Here we are!");
  }
};