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
    //game.input.onDown.add(this.showPlayerWin);
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
    downloadButton.scale.setTo(config.spriteScale);
    downloadButton.fixedToCamera = true;

    lifeBarHolder = game.add.sprite(window.innerWidth/2/config.worldScale, config.groundThickness/2, 'lifeBarHolder');
    lifeBarHolder.anchor.setTo(0.5, 0);
    lifeBarHolder.scale.setTo(config.spriteScale);
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
      enemyHitbox.anchor.setTo(1, 1);
      enemyHitbox.beginFill('#00ff00', 0);
      enemyHitbox.drawRect(0, 0, config.characterWidth, config.characterHeight);
      game.physics.arcade.enable(enemyHitbox);
      enemyHitbox.body.enable=true;
      enemyHitbox.body.allowGravity = false;
      enemyHitbox.body.immovable = true;

      this.tutorialShadow = game.add.graphics(0,0);
      this.tutorialShadow.lineColor = 0x000000;
      this.tutorialShadow.lineAlpha = 0.9;
      this.tutorialShadow.lineWidth = config.guiPadding*2;
      for (i=0; i<config.width/config.guiPadding/2; i++) {
          this.tutorialShadow.drawCircle(player.x, player.y-config.characterHeight/2, config.characterHeight*1.5+config.guiPadding*(2+i*4));
      };

    this.tutorialText = game.add.text(config.playerXposition, config.height-config.groundThickness-config.characterHeight-config.guiPadding*2, 'Tap & Drag', { font: "75px Arial", fill: "#ffffff", align: "center" });
    this.tutorialText.anchor.setTo(0.5, 1);
    this.tutorialText.scale.setTo(config.spriteScale);
      this.tutorialHand = game.add.sprite(config.playerXposition, config.height-config.groundThickness-config.characterHeight/2, 'tutorialHand');
      this.tutorialHand.scale.setTo(config.spriteScale*2);
    this.dragExample = game.add.tween(this.tutorialHand).to({x:config.playerXposition/1.5, y:config.height-config.groundThickness-config.characterHeight/3}, 2000, 'Linear', true, 0, -1);
    this.dragExample.start();

      this.enemyDistanceMeterGroup = game.add.group();
      this.enemyDistanceMeterGroup.fixedToCamera=true;

      enemyDistanceMeter = game.add.sprite(config.width-config.guiPadding, config.height-config.groundThickness-config.characterHeight, 'Loki icon',{}, this.enemyDistanceMeterGroup);
      enemyDistanceMeter.scale.setTo(config.spriteScale/2);
      enemyDistanceMeter.anchor.setTo(0.5, 0.5);
      enemyDistanceMeter = game.add.sprite(config.width, config.height-config.groundThickness-config.characterHeight, 'enemy pointer',{}, this.enemyDistanceMeterGroup);
      enemyDistanceMeter.scale.setTo(config.spriteScale*2);
      enemyDistanceMeter.anchor.setTo(1, 0.5);
      this.enemyDistanceText = game.add.text(config.width-config.guiPadding, config.height-config.groundThickness-config.characterHeight+config.guiPadding/2, ''+(enemy.x - game.camera.x-window.innerWidth/config.worldScale/2), { font: "75px Arial", fill: "#ffffff", align: "center" }, this.enemyDistanceMeterGroup);
      this.enemyDistanceText.anchor.setTo(0.5,0);
      this.enemyDistanceText.scale.setTo(config.spriteScale);


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

      //game.debug.body(playerWeapon);
      //game.debug.body(enemyHitbox);
      //game.debug.body(enemyWeapon);
      game.physics.arcade.collide(enemyHitbox, playerWeapon, this.enemyHitHandler);
      game.physics.arcade.collide(ground, enemyWeapon, this.groundHitHandler);


      if (game.camera.x + window.innerWidth/config.worldScale < config.enemyXposition) {
          if (!gameScreen.enemyDistanceMeterGroup.alive) {
              gameScreen.enemyDistanceMeterGroup.revive();
          };
        gameScreen.enemyDistanceText.text = '' + Math.floor(enemy.x - game.camera.x-window.innerWidth/config.worldScale);
      } else {
          if (gameScreen.enemyDistanceMeterGroup.alive) {
              gameScreen.enemyDistanceMeterGroup.kill();
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

      this.playerWeapon = game.add.sprite(player.x-config.characterWidth*2.5, config.height - config.groundThickness - config.characterHeight*0.7, 'hammer');
      this.playerWeapon.anchor.setTo(0.3, 0.5);
      this.playerWeapon.scale.setTo(config.spriteScale);
      this.playerWeapon.angle = -90;
      this.mjolnirSwing = game.add.tween(this.playerWeapon).to({angle:-80}, 1000, 'Linear', true, 0, -1, true);

      gameScreen.aimLine = game.add.graphics(player.x, config.height - config.groundThickness - config.characterHeight/2);

      for (i=1; i<11; i++) {
        gameScreen.aimLine.beginFill('#ffffff', 0.5-i/20);
        gameScreen.aimLine.drawCircle(config.characterWidth*i, 0, 30*config.spriteScale-i*2*config.spriteScale);
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
            lightingStrikeStage1.scale.setTo(config.spriteScale);
            this.lightingSparks1 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingSparks1');
            this.lightingSparks1.anchor.setTo(0.5);
            this.lightingSparks1.scale.setTo(config.spriteScale);
          }, 200);
          setTimeout(()=>{lightingStrikeStage2 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingStrikeStage2');
            lightingStrikeStage2.anchor.setTo(0.5, 1);
            lightingStrikeStage2.scale.setTo(config.spriteScale);
            this.lightingSparks2 = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y-config.characterHeight/2, 'lightingSparks2');
            this.lightingSparks2.anchor.setTo(0.5);
            this.lightingSparks2.scale.setTo(config.spriteScale);
            lightingStrikeStage1.destroy()}, 400);
          setTimeout(()=>{
              enemy.destroy();
            lightingStrikeStage2.destroy();
            this.lightingSparks1.destroy();
            this.lightingSparks2.destroy();
              ash = game.add.sprite(enemy.x-config.characterWidth/2, enemy.y, 'Ash');
              ash.anchor.setTo(0.5, 1);
            ash.scale.setTo(config.spriteScale);
          }, 800);
          setTimeout(()=>{gameScreen.showPlayerWin();}, 2000);
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
                enemyWeapon = game.add.sprite(enemy.x+config.characterWidth*2.5, config.height - config.groundThickness - config.characterHeight*0.7, 'spear');
                enemyWeapon.anchor.setTo(0.5, 0.7);
                enemyWeapon.scale.setTo(config.spriteScale);
                enemyWeapon.angle = -90;
                gugnirSwing = game.add.tween(enemyWeapon).to({angle:-70}, 2000, 'Linear', true, 0, 1, false);
                setTimeout(()=>{this.enemyThrow()}, 2000);
            } else {
                enemy.setAnimationByName(
                    0,          //Track index
                    "finish_him",     //Animation's name
                    true        //If the animation should loop or not
                );
                finishMode = true;
                finishBanner = game.add.sprite(enemy.x+config.characterWidth/2, enemy.y+config.characterHeight+config.guiPadding, 'finish banner');
                finishBanner.anchor.setTo(0.5,1);
                finishBanner.scale.setTo(config.spriteScale);
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

        let throwAngle = config.enemyThrowAngle/57.2958;
      let throwSpeed = Math.sqrt(((enemy.x - player.x-config.characterWidth*6) * game.physics.arcade.gravity.y)/Math.sin(throwAngle*2));
      enemyWeapon.body.velocity.set(-throwSpeed*Math.cos(throwAngle), -throwSpeed*Math.sin(throwAngle));
        game.camera.follow(enemyWeapon);
        gugnirRotate = game.add.tween(enemyWeapon).to({angle:-110}, (enemy.x - player.x+config.characterWidth*6)/throwSpeed*Math.cos(throwAngle)*1000, 'Linear', true, 0, 0);
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


  showPlayerWin: function () {
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, config.cameraSmoothMovementMultiplyer, config.cameraSmoothMovementMultiplyer);

    redConfetti = game.add.graphics();

    setTimeout(()=>{
        prizeScreenGroup = game.add.group();

      prizeScreen = game.add.graphics(config.width/6*7, 0, prizeScreenGroup);
      prizeScreen.beginFill(0xA645B6);
      prizeScreen.drawRect(0,0, config.width/6*3, config.height);

      prizeChest = game.add.sprite(config.width/6*8, config.height/2, 'prizeChest', {}, prizeScreenGroup);
      prizeChest.scale.setTo(config.spriteScale);
      prizeChest.anchor.setTo(0.5);

      congratText = game.add.text(config.width/6*8, config.height/2-config.guiPadding*4, 'You got a prize', { font: "75px Arial", fill: "#ffffff", align: "center" }, prizeScreenGroup);
      congratText.scale.setTo(config.spriteScale);
      congratText.anchor.setTo(0.5);

      playButton = game.add.sprite(config.width/6*8, config.height/2+config.guiPadding*4, 'play button', {}, prizeScreenGroup);
      playButton.scale.setTo(config.spriteScale);
      playButton.anchor.setTo(0.5);

      prizeScreenEaseIn  = game.add.tween(prizeScreenGroup).to({x:-(config.width/6*3)}, 800, 'Linear', true, 0, 0, false);
      prizeScreenEaseIn.start();

        emitter = game.add.emitter(config.width/3, config.guiPadding*6, 200);
        emitter.width = config.width/2;
        emitter.makeParticles(['pink_confetti','purple_confetti']);
        emitter.minParticleScale = 0.07;
        emitter.maxParticleScale = 0.15;
        emitter.minParticleSpeed.setTo(0.000001, 0.000001);
        emitter.maxParticleSpeed.setTo(0.00002, 0.00002);
        emitter.gravity = 0.000001;
        emitter.flow(2000, 100, 10, -1);

        victoryBanner = game.add.sprite(config.width/3, -config.groundThickness, 'victoryBanner');
        victoryBanner.anchor.setTo(0.5,1);
        victoryBanner.scale.setTo(config.spriteScale*2);
        victoryBannerPopIn = game.add.tween(victoryBanner).to({y:config.guiPadding*8}, 800, 'Linear', true, 0, 0, false);

      player.setAnimationByName(
        0,          //Track index
        "win",     //Animation's name
        true        //If the animation should loop or not
      );
    },300);

  },
};

