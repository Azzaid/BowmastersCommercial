/**
 * Created by p.zamulko on 13.04.2018.
 */



var gameScreen = {
  create: function  ()
  {
      game.world.setBounds(0, 0, 5000, 1900);
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.arcade.gravity.y = 1000;

    cursors = game.input.keyboard.createCursorKeys();
    game.input.maxPointers = 1;
    game.input.onDown.add(playerAimingStart);
    game.input.onUp.add(playerThrow);

    game.add.sprite(0,0,'background');
    game.add.sprite(0,1750,'ground');

    player = game.add.spine(600, 1750, 'Thor');
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
      game.camera.focusOn(player);


    enemy = game.add.spine(2300, 1750, 'Loki');
    enemy.scale.x*=-1;
    enemy.setAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
    enemyHitbox = game.add.graphics(enemy.x-80, enemy.y);
      enemyHitbox.anchor.setTo(0, 1);
      enemyHitbox.beginFill('#00ff00', 0);
      enemyHitbox.drawRect(0, 0, 160, -580);
      game.physics.arcade.enable(enemyHitbox);
      enemyHitbox.body.enable=true;
      enemyHitbox.body.allowGravity = false;
      enemyHitbox.body.immovable = true;

    var tutorialShadow = game.add.sprite(0, 1000, 'tutorialShadow');
      tutorialShadow.alpha = 0.5;
      var tutorialText = game.add.text(420, 1000, 'Tap & Drag', { font: "75px Arial", fill: "#ffffff", align: "center" });
      var tutorialHand = game.add.sprite(450, 1200, 'tutorialHand');
      var dragExample = game.add.tween(tutorialHand).to({x:200, y:1600}, 2000, 'Linear', true, 0, -1);
      dragExample.start();

    function playerAimingStart () {
      if (!enemyMoveInProgress) {
          if (tutorialModeOn) {
              tutorialShadow.destroy();
              tutorialText.destroy();
              tutorialHand.destroy();
              tutorialModeOn = false;
          }

          playerAiming = true;

          dragStartPosition = [game.input.worldX, game.input.worldY];

          player.setAnimationByName(
              0,          //Track index
              "grenade_draw",     //Animation's name
              false        //If the animation should loop or not
          );

          playerWeapon = game.add.sprite(320, 1400, 'hammer');
          playerWeapon.anchor.setTo(0.3, 0.5);
          playerWeapon.angle = -90;
          mjolnirSwing = game.add.tween(playerWeapon).to({angle:-80}, 1000, 'Linear', true, 0, -1, true);

          for (i=1; i<11; i++) {
            aimLine.push(game.add.graphics(600+i*50, 1430));
            console.log(aimLine[i-1]);
            aimLine[i-1].beginFill('#ffffff', 0.5-i/20);
            aimLine[i-1].drawCircle(0, 0, 30-i*2);
          };
      };
      };
    function playerThrow() {
      if (playerAiming) {
          aimLine.forEach((circle, i) => {
              circle.destroy();
      });

          aimLine = [];
          playerAiming = false;
          enemyMoveInProgress = true;

          player.setAnimationByName(
              0,          //Track index
              "grenade_shot",     //Animation's name
              false        //If the animation should loop or not
          );
          player.addAnimationByName(
              0,          //Track index
              "idle_apple",     //Animation's name
              true        //If the animation should loop or not
          );

          mjolnirSwing.stop();
          mjolnirRotate = game.add.tween(playerWeapon).to({angle:-270}, 500, 'Linear', true, 0, -1);
          game.physics.arcade.enable(playerWeapon);
          playerWeapon.body.enable=true;
          playerWeapon.body.setSize(200, 100, 0, -100);
          playerWeapon.body.collideWorldBounds = true;
          playerWeapon.body.allowRotation = true;
          playerWeapon.body.bounce.y = 0.2;
          playerWeapon.body.bounce.x = 0;
          playerWeapon.body.velocity.set(2000*Math.cos(aimAngle), -2000*Math.sin(aimAngle));
          game.camera.follow(playerWeapon);


      }
    }
  },


  update: function () {

  if (cursors.up.isDown)
  {
    game.camera.y -= 10;
  }
  else if (cursors.down.isDown)
  {
    game.camera.y += 10;
  }

  if (cursors.left.isDown)
  {
    game.camera.x -= 10;
  }
  else if (cursors.right.isDown)
  {
    game.camera.x += 10;
  }

  if (playerAiming) {
    let xShift = dragStartPosition[0]-game.input.worldX;
    let yShift = game.input.worldY-dragStartPosition[1];
    aimAngle = Math.atan(yShift/xShift);
    if (aimAngle > 1.5) {aimAngle=1.4};
    if (aimAngle < 0) {aimAngle=0.2};
    aimLine.forEach((circle, i) => {
      circle.x = 600+(i+1)*50*Math.cos(aimAngle);
      circle.y = 1430-(i+1)*50*Math.sin(aimAngle);
    });
  }

      //game.debug.body(playerWeapon);
      //game.debug.body(enemyHitbox);
      game.physics.arcade.collide(enemyHitbox, playerWeapon, this.enemyHitHandler);

},

    enemyHitHandler: function () {
      enemy.setAnimationByName(
          0,          //Track index
          "fall",     //Animation's name
          false        //If the animation should loop or not
      );
        enemy.addAnimationByName(
            0,          //Track index
            "idle_apple",     //Animation's name
            true        //If the animation should loop or not
        );
        playerWeapon.destroy();
    }
};

