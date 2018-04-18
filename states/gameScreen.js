/**
 * Created by p.zamulko on 13.04.2018.
 */



var gameScreen = {
  create: function ()
  {
      game.world.setBounds(0, 0, config.fullWorldWidth, config.height);
      game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = config.gravity;

    game.input.maxPointers = 1;
    game.input.onDown.add(this.startPlayerAiming);
    game.input.onUp.add(this.playerThrow);

    background = game.add.sprite(0,0,'background');
    background.scale.setTo(config.spriteScale);
    ground = game.add.sprite(0,config.height-config.groundThickness,'ground');
      ground.scale.setTo(config.spriteScale);
      game.physics.arcade.enable(ground);
      ground.body.enable=true;
      ground.body.allowGravity = false;
      ground.body.immovable = true;

    downloadButton = game.add.sprite(window.innerWidth/2/config.worldScale, config.height-config.groundThickness/3, 'downloadButton');
    downloadButton.anchor.setTo(0.5, 1);
    downloadButton.fixedToCamera = true;

    lifeBarHolder = game.add.sprite(window.innerWidth/2/config.worldScale, config.groundThickness/2, 'lifeBarHolder');
    lifeBarHolder.anchor.setTo(0.5, 0);
    lifeBarHolder.fixedToCamera = true;

    player = game.add.spine(config.playerXposition, config.height-config.groundThickness, 'Thor');
    player.scale.setTo(config.spriteScale);
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
      game.camera.focusOn(player);

    enemy = game.add.spine(config.enemyXposition, config.height-config.groundThickness, 'Loki');
      enemy.onEvent.add((i,e)=>{this.enemyTurn(i,e)});
      enemy.scale.y*=config.spriteScale;
    enemy.scale.x*=-config.spriteScale;
    enemy.setAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
    enemyHitbox = game.add.graphics(enemy.x, enemy.y);
      enemyHitbox.anchor.setTo(0.5, 1);
      enemyHitbox.beginFill('#00ff00', 0);
      enemyHitbox.drawRect(0, 0, config.characterWidth, config.characterHeight);
      game.physics.arcade.enable(enemyHitbox);
      enemyHitbox.body.enable=true;
      enemyHitbox.body.allowGravity = false;
      enemyHitbox.body.immovable = true;

    this.tutorialShadow = game.add.sprite(player.x, player.y-config.characterHeight/2, 'tutorialShadow');
    this.tutorialShadow.anchor.setTo(0.5, 0.5);
    this.tutorialShadow.scale.setTo(config.spriteScale);
    this.tutorialShadow.alpha = 0.7;
    this.tutorialText = game.add.text(config.playerXposition, config.height-config.groundThickness-config.characterHeight, 'Tap & Drag', { font: "75px Arial", fill: "#ffffff", align: "center" });
    this.tutorialText.anchor.setTo(0.5, 1);
      this.tutorialHand = game.add.sprite(config.playerXposition, config.height-config.groundThickness-config.characterHeight/2, 'tutorialHand');
      this.tutorialHand.scale.setTo(2);
    this.dragExample = game.add.tween(this.tutorialHand).to({x:config.playerXposition/1.5, y:config.height-config.groundThickness-config.characterHeight/3}, 2000, 'Linear', true, 0, -1);
    this.dragExample.start();

      this.enemyDistanceMeter = game.add.sprite(window.innerWidth/config.worldScale, config.height-config.groundThickness-config.characterHeight, 'Loki icon');
      this.enemyDistanceMeter.scale.setTo(config.spriteScale);
      this.enemyDistanceMeter.anchor.setTo(1,0.5);
    this.enemyDistanceMeter.fixedToCamera = true;
      this.enemyDistanceText = game.add.text(window.innerWidth/config.worldScale, config.height-config.groundThickness-config.characterHeight+200, ''+(enemy.x - game.camera.x-window.innerWidth/config.worldScale/2), { font: "75px Arial", fill: "#ffffff", align: "center" });
    this.enemyDistanceText.anchor.setTo(1,0.5);
      this.enemyDistanceText.fixedToCamera = true;


  },

  update: function () {

  if (playerAiming) {
    let xShift = player.x+config.characterWidth/2-game.input.worldX;
    let yShift = game.input.worldY-player.y+config.characterHeight/2;
    gameScreen.aimAngle = Math.atan(yShift/xShift);
    if (this.aimAngle > 1.5) {this.aimAngle=1.3};
    if (this.aimAngle < 0) {this.aimAngle=0.2};
    gameScreen.aimLine.angle = -(this.aimAngle*57.2958);
  }

      game.debug.body(playerWeapon);
      game.debug.body(enemyHitbox);
      game.debug.body(enemyWeapon);
      game.physics.arcade.collide(enemyHitbox, playerWeapon, this.enemyHitHandler);
      game.physics.arcade.collide(ground, enemyWeapon, this.groundHitHandler);


      if (game.camera.x + window.innerWidth/config.worldScale/2 < config.enemyXposition) {
          if (!gameScreen.enemyDistanceMeter.alive) {
            gameScreen.enemyDistanceMeter.revive();
            gameScreen.enemyDistanceText.revive();
          };
        gameScreen.enemyDistanceText.text = '' + Math.floor(enemy.x - game.camera.x-window.innerWidth/config.worldScale/2);
      } else {
          if (gameScreen.enemyDistanceMeter.alive) {
            gameScreen.enemyDistanceMeter.kill();
            gameScreen.enemyDistanceText.kill();
          };
      };

},

  startPlayerAiming: function() {
    if (!enemyMoveInProgress) {
      if (tutorialModeOn) {
        gameScreen.tutorialShadow.destroy();
        gameScreen.tutorialText.destroy();
        gameScreen.tutorialHand.destroy();
        gameScreen.tutorialModeOn = false;
      }

      playerAiming = true;

      player.setAnimationByName(
        0,          //Track index
        "grenade_draw",     //Animation's name
        false        //If the animation should loop or not
      );

      this.playerWeapon = game.add.sprite(config.playerXposition-config.characterWidth*2, config.height - config.groundThickness - config.characterHeight*0.7, 'hammer');
      this.playerWeapon.anchor.setTo(0.3, 0.5);
      this.playerWeapon.angle = -90;
      this.mjolnirSwing = game.add.tween(this.playerWeapon).to({angle:-80}, 1000, 'Linear', true, 0, -1, true);

      gameScreen.aimLine = game.add.graphics(player.x, config.height - config.groundThickness - config.characterHeight/2);

      for (i=1; i<11; i++) {
        gameScreen.aimLine.beginFill('#ffffff', 0.5-i/20);
        gameScreen.aimLine.drawCircle(config.characterWidth*i, 0, 30-i*2);
      };
    };
  },

  playerThrow: function() {
    if (playerAiming) {
      gameScreen.aimLine.destroy();

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
      playerWeapon.body.setSize(250, 350, 0, -100);
      playerWeapon.body.collideWorldBounds = true;
      playerWeapon.body.allowRotation = true;
      playerWeapon.body.bounce.y = 0.2;
      playerWeapon.body.bounce.x = 0;
      //playerWeapon.body.velocity.set(2000*Math.cos(aimAngle), -2000*Math.sin(aimAngle));
      let throvSpeed = Math.sqrt(((enemy.x - player.x) * game.physics.arcade.gravity.y)/Math.sin(gameScreen.aimAngle*2));
      playerWeapon.body.velocity.set(throvSpeed*Math.cos(gameScreen.aimAngle), -throvSpeed*Math.sin(gameScreen.aimAngle));
      game.camera.follow(playerWeapon);


    }
  },

    enemyHitHandler: function () {
        game.camera.follow(enemy, Phaser.Camera.FOLLOW_LOCKON, config.cameraSmoothMovementMultiplyer, config.cameraSmoothMovementMultiplyer);
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
          setTimeout(()=>{lightingStrikeStage1 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingStrikeStage1');
            lightingStrikeStage1.anchor.setTo(0.5, 1);
            lightingSparks1 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingSparks1');
            lightingSparks1.anchor.setTo(0.5)}, 200);
          setTimeout(()=>{lightingStrikeStage2 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingStrikeStage2');
            lightingStrikeStage2.anchor.setTo(0.5, 1);
            lightingSparks2 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingSparks2');
            lightingSparks2.anchor.setTo(0.5);
            lightingStrikeStage1.destroy()}, 400);
          setTimeout(()=>{
              enemy.destroy();
            lightingStrikeStage2.destroy();
            lightingSparks1.destroy();
            lightingSparks2.destroy();
              ash = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y, 'Ash');
              ash.anchor.setTo(0.5, 1);
          }, 800);
          setTimeout(()=>{
              game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, config.cameraSmoothMovementMultiplyer, config.cameraSmoothMovementMultiplyer);
              game.add.sprite(player.x + config.characterWidth/2, player.y - config.characterHeight*1.5, 'victoryBanner');
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
        enemyWeapon.body.velocity.set(-1500, -600);
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

