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
    ground = game.add.sprite(0,1750,'ground');
      game.physics.arcade.enable(ground);
      ground.body.enable=true;
      ground.body.allowGravity = false;
      ground.body.immovable = true;


    player = game.add.spine(600, 1750, 'Thor');
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
      game.camera.focusOn(player);

    enemy = game.add.spine(2300, 1750, 'Loki');
      enemy.onEvent.add((i,e)=>{this.enemyTurn(i,e)});
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

      enemyDistanceMeter = game.add.sprite(game.camera.x+1100, game.camera.y+300, 'Loki icon');
      enemyDistanceText = game.add.text(game.camera.x+1130, game.camera.y+550, ''+(enemy.y - game.camera.x-350), { font: "75px Arial", fill: "#ffffff", align: "center" });

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
          mjolnirRotate = game.add.tween(playerWeapon).to({angle:-270}, 300, 'Linear', true, 0, -1);
          game.physics.arcade.enable(playerWeapon);
          playerWeapon.body.enable=true;
          playerWeapon.body.setSize(250, 250, 0, -100);
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
      //game.debug.body(enemyWeapon);
      game.physics.arcade.collide(enemyHitbox, playerWeapon, this.enemyHitHandler);
      game.physics.arcade.collide(ground, enemyWeapon, this.groundHitHandler);


      if (game.camera.x < 900) {
          if (!enemyDistanceMeter.alive) {
              enemyDistanceMeter.revive();
              enemyDistanceText.revive();
          };
          enemyDistanceMeter.x = game.camera.x+1100;
          enemyDistanceMeter.y = game.camera.y+300;
          enemyDistanceText.x = game.camera.x+1130;
          enemyDistanceText.y = game.camera.y+550;
          enemyDistanceText.text = ''+(enemy.y - game.camera.x-850);
      } else {
          if (enemyDistanceMeter.alive) {
              enemyDistanceMeter.kill();
              enemyDistanceText.kill();
          };
      };

},

    enemyHitHandler: function () {
        game.camera.follow(enemy, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      if (!finishMode) {
          enemy.setAnimationByName(
              0,          //Track index
              "fall",     //Animation's name
              false        //If the animation should loop or not
          );
      } else {
          enemy.setAnimationByName(
              0,          //Track index
              "death_by_shock",     //Animation's name
              false        //If the animation should loop or not
          );
          setTimeout(()=>{lighting1 = game.add.sprite(enemy.x-100, enemy.y-900, 'lighting3');
          lightning3 = game.add.sprite(enemy.x-100, enemy.y-900, 'lighting1')}, 200);
          setTimeout(()=>{lighting2 = game.add.sprite(enemy.x-100, enemy.y-900, 'lighting4');
              lightning4 = game.add.sprite(enemy.x-100, enemy.y-900, 'lighting2');
              lighting1.destroy()}, 400);
          setTimeout(()=>{
              enemy.destroy();
              lighting2.destroy();
              lightning3.destroy();
              lightning4.destroy();
              ash = game.add.sprite(enemy.x+50, enemy.y, 'Ash');
          }, 800);
          setTimeout(()=>{
              game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
              game.add.sprite(player.x+100, player.y - 1000, 'logo');
              player.setAnimationByName(
                  0,          //Track index
                  "win",     //Animation's name
                  true        //If the animation should loop or not
              );
          }, 1200);
      };
        playerWeapon.destroy();

    },
    enemyTurn: function (trackIndex, event) {
      enemyHealh-=50;
        console.log('loki nov is ' + event.data.name);
        if (event.data.name == 'Got_up') {
            if (enemyHealh >= 50) {
                enemy.setAnimationByName(
                    0,          //Track index
                    "grenade_draw",     //Animation's name
                    false        //If the animation should loop or not
                );
                enemyWeapon = game.add.sprite(enemy.x+200, enemy.y-400, 'spear');
                enemyWeapon.anchor.setTo(0.5, 0.7);
                enemyWeapon.angle = -90;
                gugnirSwing = game.add.tween(enemyWeapon).to({angle:-70}, 1000, 'Linear', true, 0, -1, true);
                setTimeout(()=>{this.enemyThrow()}, 2000);
            } else {
                enemy.setAnimationByName(
                    0,          //Track index
                    "finish_him",     //Animation's name
                    true        //If the animation should loop or not
                );
                finishMode = true;
                finishBanner = game.add.sprite(enemy.x-300, enemy.y-700, 'finish banner');
                setTimeout(()=>{
                    finishBanner.destroy();
                    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
                    enemyMoveInProgress = false;
                }, 1500);
            };
        }
    },
    enemyThrow: function () {
        enemy.setAnimationByName(
            0,          //Track index
            "grenade_shot",     //Animation's name
            false        //If the animation should loop or not
        );
        enemy.addAnimationByName(
            0,          //Track index
            "idle_apple",     //Animation's name
            true        //If the animation should loop or not
        );

        gugnirSwing.stop();
        game.physics.arcade.enable(enemyWeapon);
        enemyWeapon.body.enable=true;
        enemyWeapon.body.setSize(500, 150, -200, 400);
        enemyWeapon.body.collideWorldBounds = true;
        enemyWeapon.body.bounce.y = 0.2;
        enemyWeapon.body.bounce.x = 0;
        enemyWeapon.body.velocity.set(-1000, -300);
        game.camera.follow(enemyWeapon);
        gugnirRotate = game.add.tween(enemyWeapon).to({angle:-110}, 700, 'Linear', true, 0, 0);
    },
    groundHitHandler: function () {
        enemyWeapon.body.allowGravity = false;
        enemyWeapon.body.immovable = true;
        enemyWeapon.body.velocity.set(0, 0);
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        enemyMoveInProgress = false;
        player.setAnimationByName(
            0,          //Track index
            "scare",     //Animation's name
            false        //If the animation should loop or not
        );
        player.addAnimationByName(
            0,          //Track index
            "idle_apple",     //Animation's name
            true        //If the animation should loop or not
        );
    },
};

