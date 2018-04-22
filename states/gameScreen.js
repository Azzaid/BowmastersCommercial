/**
 * Created by p.zamulko on 13.04.2018.
 */

var gameScreen = {
  create: function () {
    this.tutorialModeOn = true;
    this.enemyMoveInProgress = false;
    this.playerAiming = false;
    this.finishMode = false;
    
    game.world.setBounds(0, 0, config.enemyXposition + config.width/2, config.groundLevel+config.guiPadding);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = config.gravity;
    
    game.input.maxPointers = 1;
    //game.input.onDown.add(this.showPlayerWin);
    game.input.onDown.add(this.startPlayerAiming);
    game.input.onUp.add(this.playerThrow);
    
    this.background = game.add.tileSprite(0, 0, config.enemyXposition + config.width/2, config.height, 'background');
    this.background.scale.setTo(config.spriteScale * 2);
   
    this.ground = game.add.tileSprite(0, config.groundLevel, config.enemyXposition + config.width/2, config.height, 'ground');
    this.ground.scale.setTo(config.spriteScale * 2);
    
    game.physics.arcade.enable(this.ground);
    this.ground.body.enable = true;
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;
    
    this.lifeBarGroup = game.add.group();
    this.lifeBarGroup.fixedToCamera = true;
    
    lifebarLogo = game.add.sprite(config.width/2, config.guiPadding, 'logo', {}, this.lifeBarGroup);
    lifebarLogo.anchor.setTo(0.5, 0);
    lifebarLogo.scale.setTo(config.spriteScale/1.6);
  
    healthHolderGraphic = game.add.graphics(lifebarLogo.x, lifebarLogo.y, this.lifeBarGroup);
    healthHolderGraphic.beginFill(0xA5279F);
    healthHolderGraphic.drawRect(-lifebarLogo.width*1.5, lifebarLogo.height*0.3, lifebarLogo.width*3, config.guiPadding*2);
    healthHolderGraphic.beginFill(0x000000, 0.4);
    healthHolderGraphic.drawRoundedRect(-lifebarLogo.width*1.5, lifebarLogo.height*0.37, lifebarLogo.width*0.9, config.guiPadding*1.3, config.guiPadding*0.65);
    healthHolderGraphic.drawRoundedRect(lifebarLogo.width*0.6, lifebarLogo.height*0.37, lifebarLogo.width*0.9, config.guiPadding*1.3, config.guiPadding*0.65);
  
    healthBarGraphic = game.add.graphics(0, 0);
    healthBarGraphic.beginFill(0xEA3100);
    healthBarGraphic.drawRoundedRect(0, 0, lifebarLogo.width*0.9, config.guiPadding*1.3, config.guiPadding*0.65);
    playerHealthBar = game.add.sprite(lifebarLogo.x  - lifebarLogo.width*1.5, lifebarLogo.y + lifebarLogo.height*0.37, healthBarGraphic.generateTexture(), '', this.lifeBarGroup);
    this.enemyHealthBar = game.add.sprite(lifebarLogo.x + lifebarLogo.width*1.5, lifebarLogo.y + lifebarLogo.height*0.37, healthBarGraphic.generateTexture(), '', this.lifeBarGroup);
    this.enemyHealthBar.anchor.setTo(1, 0);
    this.enemyLifeBarCropRect = new Phaser.Rectangle(0, 0, this.enemyHealthBar.width, this.enemyHealthBar.height);
    this.enemyHealthBar.crop(this.enemyLifeBarCropRect);
    healthBarGraphic.destroy();
    
    lifeHolderPlayerPortrait = game.add.sprite(lifebarLogo.x-lifebarLogo.width*1.5, lifebarLogo.y+lifebarLogo.height*0.2, 'Thor icon', {}, this.lifeBarGroup);
    lifeHolderPlayerPortrait.anchor.setTo(0.5, 0);
    lifeHolderPlayerPortrait.scale.setTo(config.spriteScale/1.4);
    lifeHolderEnemyPortrait = game.add.sprite(lifebarLogo.x+lifebarLogo.width*1.5, lifebarLogo.y+lifebarLogo.height*0.2, 'Loki icon', {}, this.lifeBarGroup);
    lifeHolderEnemyPortrait.anchor.setTo(0.5, 0);
    lifeHolderEnemyPortrait.scale.setTo(config.spriteScale/1.4);
  
    lifebarLogo.bringToTop();
    
    player = game.add.spine(config.playerXposition, config.groundLevel, 'Thor');
    player.scale.setTo(config.spriteScale);
    player.addAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
    game.camera.focusOn(player);
    //game.camera.lerp = 0.1;
    
    enemy = game.add.spine(config.enemyXposition, config.groundLevel, 'Loki');
    enemy.onEvent.add((i, e) => {
      this.enemyTurn(i, e)
    });
    enemy.scale.y *= config.spriteScale;
    enemy.scale.x *= -config.spriteScale;
    enemy.setAnimationByName(
      0,          //Track index
      "idle_apple",     //Animation's name
      true        //If the animation should loop or not
    );
    enemy.health = config.initialEnemyHealth;
    this.enemyHitbox = game.add.graphics(enemy.x, enemy.y);
    this.enemyHitbox.anchor.setTo(1, 1);
    this.enemyHitbox.beginFill('#00ff00', 0);
    this.enemyHitbox.drawRect(0, 0, config.characterWidth, config.characterHeight);
    game.physics.arcade.enable(this.enemyHitbox);
    this.enemyHitbox.body.enable = true;
    this.enemyHitbox.body.allowGravity = false;
    this.enemyHitbox.body.immovable = true;
    
    this.tutorialShadow = game.add.graphics(0, 0);
    this.tutorialShadow.lineColor = 0x000000;
    this.tutorialShadow.lineAlpha = 0.9;
    this.tutorialShadow.lineWidth = config.guiPadding * 2;
    for (i = 0; i < Math.max(config.width, config.height) / config.guiPadding / 2; i++) {
      this.tutorialShadow.drawCircle(player.x, player.y - config.characterHeight / 2, config.characterHeight + config.guiPadding * (2 + i * 4));
    }
    ;
    this.tutorialText = game.add.text(config.playerXposition, config.groundLevel - config.characterHeight - config.guiPadding , 'Tap & Drag', {
      font: "75px Arial",
      fill: "#ffffff",
      align: "center"
    });
    this.tutorialText.anchor.setTo(0.5, 1);
    this.tutorialText.scale.setTo(config.spriteScale);
    this.tutorialHand = game.add.sprite(config.playerXposition, config.groundLevel - config.characterHeight / 2, 'tutorialHand');
    this.tutorialHand.scale.setTo(config.spriteScale * 2);
    this.dragExample = game.add.tween(this.tutorialHand).to({
      x: config.playerXposition / 1.5,
      y: config.groundLevel - config.characterHeight / 3
    }, 2000, 'Linear', true, 0, -1);
    this.dragExample.start();
    
    this.enemyDistanceMeterGroup = game.add.group();
    this.enemyDistanceMeterGroup.fixedToCamera = true;
    
    enemyDistanceIcon = game.add.sprite(config.width - config.guiPadding*2, config.groundLevel - config.characterHeight/2, 'Loki icon', {}, this.enemyDistanceMeterGroup);
    enemyDistanceIcon.scale.setTo(config.spriteScale/1.4);
    enemyDistanceIcon.anchor.setTo(1, 0);
  
    enemyDistanceUnderlay = game.add.graphics(enemyDistanceIcon.x - enemyDistanceIcon.width*1.5, config.groundLevel - config.characterHeight/2);
    enemyDistanceUnderlay.beginFill(0x813A86);
    enemyDistanceUnderlay.drawRoundedRect(0, 0, enemyDistanceIcon.width*1.5, enemyDistanceIcon.width*1.5, enemyDistanceIcon.width/2);
  
    enemyDistanceIcon.bringToTop();
    
    enemyDistanceArrow = game.add.sprite(config.width, config.groundLevel - config.characterHeight/2, 'enemy pointer', {}, this.enemyDistanceMeterGroup);
    enemyDistanceArrow.scale.setTo(config.spriteScale * 2);
    enemyDistanceArrow.anchor.setTo(0, 0.5);
    
    this.enemyDistanceText = game.add.text(config.width - config.guiPadding, config.groundLevel - config.characterHeight + config.guiPadding / 2, '' + (enemy.x - game.camera.x - window.innerWidth / config.worldScale / 500) + ' m', {
      font: "75px Arial",
      fill: "#ffffff",
      align: "center"
    }, this.enemyDistanceMeterGroup);
    this.enemyDistanceText.anchor.setTo(0.5, 0);
    this.enemyDistanceText.scale.setTo(config.spriteScale);
    
    
  },
  
  update: function () {
    
    if (gameScreen.playerAiming) {
      let xShift = player.x + config.characterWidth / 2 - game.input.worldX;
      let yShift = game.input.worldY - player.y + config.characterHeight / 2;
      gameScreen.aimAngle = Math.atan(yShift / xShift);
      if (this.aimAngle > 1.5) {
        this.aimAngle = 1.3
      }
      ;
      if (this.aimAngle < 0) {
        this.aimAngle = 0.2
      }
      ;
      gameScreen.aimLine.angle = -(this.aimAngle * 57.2958);
    }
    
    //game.debug.body(playerWeapon);
    //game.debug.body(enemyHitbox);
    //game.debug.body(enemyWeapon);
    game.physics.arcade.collide(gameScreen.enemyHitbox, playerWeapon, this.enemyHitHandler);
    game.physics.arcade.collide(gameScreen.ground, enemyWeapon, this.groundHitHandler);
    
    
    if (game.camera.x + window.innerWidth / config.worldScale < config.enemyXposition) {
      if (!gameScreen.enemyDistanceMeterGroup.alive) {
        gameScreen.enemyDistanceMeterGroup.revive();
      }
      ;
      gameScreen.enemyDistanceText.text = '' + Math.floor(enemy.x - game.camera.x - window.innerWidth / config.worldScale / 500) + ' m';
    } else {
      if (gameScreen.enemyDistanceMeterGroup.alive) {
        gameScreen.enemyDistanceMeterGroup.kill();
      }
      ;
    }
    ;
    
  },
  
  startPlayerAiming: function () {
    if (!gameScreen.enemyMoveInProgress) {
      if (gameScreen.tutorialModeOn) {
        gameScreen.tutorialShadow.destroy();
        gameScreen.tutorialText.destroy();
        gameScreen.tutorialHand.destroy();
        gameScreen.tutorialModeOn = false;
      }
      
      gameScreen.playerAiming = true;
      
      player.setAnimationByName(
        0,          //Track index
        "grenade_draw",     //Animation's name
        false        //If the animation should loop or not
      );
      
      playerWeapon = game.add.sprite(player.x - config.characterWidth * 2.5, player.y - config.characterHeight * 0.7, 'hammer');
      playerWeapon.anchor.setTo(0.3, 0.5);
      playerWeapon.scale.setTo(config.spriteScale);
      playerWeapon.angle = -90;
      gameScreen.mjolnirSwing = game.add.tween(playerWeapon).to({angle: -80}, 1000, 'Linear', true, 0, -1, true);
      
      gameScreen.aimLine = game.add.graphics(player.x, player.y - config.characterHeight / 2);
      
      for (i = 1; i < 11; i++) {
        gameScreen.aimLine.beginFill('0xffffff');
        gameScreen.aimLine.drawCircle(config.guiPadding + config.characterWidth * i, 0, 30 * config.spriteScale - i * 2 * config.spriteScale);
      }
      ;
    }
    ;
  },
  
  playerThrow: function () {
    if (gameScreen.playerAiming) {
      gameScreen.aimLine.destroy();
      
      gameScreen.playerAiming = false;
      gameScreen.enemyMoveInProgress = true;
      
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
      
      gameScreen.mjolnirSwing.stop();
      mjolnirRotate = game.add.tween(playerWeapon).to({angle: -270}, 300, 'Linear', true, 0, -1);
      game.physics.arcade.enable(playerWeapon);
      playerWeapon.body.enable = true;
      playerWeapon.body.setSize(250, 350, 0, -100);
      playerWeapon.body.collideWorldBounds = true;
      playerWeapon.body.allowRotation = true;
      playerWeapon.body.bounce.y = 0.2;
      playerWeapon.body.bounce.x = 0;
      //playerWeapon.body.velocity.set(2000*Math.cos(aimAngle), -2000*Math.sin(aimAngle));
      let throvSpeed = Math.sqrt(((enemy.x - player.x) * game.physics.arcade.gravity.y) / Math.sin(gameScreen.aimAngle * 2));
      playerWeapon.body.velocity.set(throvSpeed * Math.cos(gameScreen.aimAngle), -throvSpeed * Math.sin(gameScreen.aimAngle));
      game.camera.follow(playerWeapon);
      
      
    }
  },
  
  enemyHitHandler: function () {
    game.camera.follow(enemy, Phaser.Camera.FOLLOW_LOCKON, config.cameraSmoothMovementMultiplyer, config.cameraSmoothMovementMultiplyer);
    if (!gameScreen.finishMode) {
      enemy.health -= config.heathLostPerHit;
      gameScreen.enemyLifeBarCropRect.x += gameScreen.enemyLifeBarCropRect.width * config.heathLostPerHit / config.initialEnemyHealth;
      gameScreen.enemyHealthBar.updateCrop();
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
      setTimeout(() => {
        lightingStrikeStage1 = game.add.sprite(enemy.x + config.characterWidth / 2, enemy.y - config.characterHeight / 2, 'lightingStrikeStage1');
        lightingStrikeStage1.anchor.setTo(0.5, 1);
        lightingStrikeStage1.scale.setTo(config.spriteScale*2.5);
        this.lightingSparks1 = game.add.sprite(enemy.x + config.characterWidth / 2, enemy.y - config.characterHeight / 2, 'lightingSparks1');
        this.lightingSparks1.anchor.setTo(0.5);
        this.lightingSparks1.scale.setTo(config.spriteScale);
      }, 200);
      setTimeout(() => {
        lightingStrikeStage2 = game.add.sprite(enemy.x + config.characterWidth / 2, enemy.y - config.characterHeight / 2, 'lightingStrikeStage2');
        lightingStrikeStage2.anchor.setTo(0.5, 1);
        lightingStrikeStage2.scale.setTo(config.spriteScale*2.5);
        this.lightingSparks2 = game.add.sprite(enemy.x + config.characterWidth / 2, enemy.y - config.characterHeight / 2, 'lightingSparks2');
        this.lightingSparks2.anchor.setTo(0.5);
        this.lightingSparks2.scale.setTo(config.spriteScale);
        lightingStrikeStage1.destroy()
      }, 400);
      setTimeout(() => {
        enemy.destroy();
        lightingStrikeStage2.destroy();
        this.lightingSparks1.destroy();
        this.lightingSparks2.destroy();
        ash = game.add.sprite(enemy.x - config.characterWidth / 2, enemy.y, 'Ash');
        ash.anchor.setTo(0.5);
        ash.scale.setTo(config.spriteScale);
      }, 800);
      setTimeout(() => {
        gameScreen.showPlayerWin();
      }, 2000);
    }
    ;
    playerWeapon.kill();
    
  },
  enemyTurn: function (trackIndex, event) {
    if (event.data.name == 'Got_up') {
      if (enemy.health > 0) {
        enemy.setAnimationByName(
          0,          //Track index
          "grenade_draw",     //Animation's name
          false        //If the animation should loop or not
        );
        enemyWeapon = game.add.sprite(enemy.x + config.characterWidth * 2.5, enemy.y - config.characterHeight * 0.7, 'spear');
        enemyWeapon.anchor.setTo(0.5, 0.7);
        enemyWeapon.scale.setTo(config.spriteScale);
        enemyWeapon.angle = -90;
        this.gugnirSwing = game.add.tween(enemyWeapon).to({angle: -70}, 2000, 'Linear', true, 0, 1, false);
        setTimeout(() => {
          this.enemyThrow()
        }, 2000);
      } else {
        enemy.setAnimationByName(
          0,          //Track index
          "finish_him",     //Animation's name
          true        //If the animation should loop or not
        );
        gameScreen.finishMode = true;
        finishBanner = game.add.sprite(enemy.x + config.characterWidth / 2, enemy.y - config.characterHeight - config.guiPadding, 'finish banner');
        finishBanner.anchor.setTo(0.5, 1);
        finishBanner.scale.setTo(config.spriteScale);
        setTimeout(() => {
          finishBanner.destroy();
          game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          gameScreen.enemyMoveInProgress = false;
        }, 1500);
      }
      ;
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
    
    gameScreen.gugnirSwing.stop();
    game.physics.arcade.enable(enemyWeapon);
    enemyWeapon.body.enable = true;
    enemyWeapon.body.setSize(500, 150, -200, 400);
    enemyWeapon.body.collideWorldBounds = true;
    enemyWeapon.body.bounce.y = 0.2;
    enemyWeapon.body.bounce.x = 0;
    
    let throwAngle = config.enemyThrowAngle / 57.2958;
    let throwSpeed = Math.sqrt(((enemy.x - player.x - config.characterWidth * 6) * game.physics.arcade.gravity.y) / Math.sin(throwAngle * 2));
    enemyWeapon.body.velocity.set(-throwSpeed * Math.cos(throwAngle), -throwSpeed * Math.sin(throwAngle));
    game.camera.follow(enemyWeapon);
    gugnirRotate = game.add.tween(enemyWeapon).to({angle: -110}, (enemy.x - player.x) / (throwSpeed * Math.cos(throwAngle)) * 1000, 'Linear', true, 0, 0);
  },
  groundHitHandler: function () {
    enemyWeapon.body.allowGravity = false;
    enemyWeapon.body.immovable = true;
    enemyWeapon.body.velocity.set(0, 0);
    
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    
    gameScreen.enemyMoveInProgress = false;
    
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
    
    setTimeout(() => {
      prizeScreenGroup = game.add.group();
  
      prizeChest = game.add.sprite(config.width / 4 *5, config.height / 2 - config.guiPadding, 'prizeChest', {}, prizeScreenGroup);
      prizeChest.anchor.setTo(0.5, 0);
  
      prizeScreenScale = Math.min((config.height/2/(prizeChest.height)/config.spriteScale),(config.width/2/(prizeChest.width+config.guiPadding*2)/config.spriteScale));
  
      prizeChest.scale.setTo(prizeScreenScale);
      
      playButtonText = game.add.text(config.width / 4 * 5, prizeChest.y + prizeChest.height + config.guiPadding*1.5, 'PLAY NOW', {
        font: config.guiPadding + "px Arial",
        fill: "#ffffff",
        align: "center"
      }, prizeScreenGroup);
      playButtonText.setShadow(3, 3, 'rgba(0,0,0,0.7)', 15);
      playButtonText.anchor.setTo(0.5, 0);
      playButtonText.scale.setTo(prizeScreenScale);
  
      playButtonGraphic = game.add.graphics(0,0);
      playButtonGraphic.beginFill(0xFFFFFF);
      playButtonGraphic.drawRoundedRect(0, 0, config.guiPadding*7, config.guiPadding*2, config.guiPadding*2);
      playButtonGraphic.beginFill(0x08C9D8);
      playButtonGraphic.drawRoundedRect(config.guiPadding/4, config.guiPadding/4, config.guiPadding*6.5, config.guiPadding*1.5, config.guiPadding*1.5);
      
      playButton = game.add.sprite(config.width / 4 * 5, prizeChest.y + prizeChest.height + config.guiPadding, playButtonGraphic.generateTexture(), {}, prizeScreenGroup);
      playButton.anchor.setTo(0.5, 0);
      playButtonGraphic.destroy();
      playButton.scale.setTo(prizeScreenScale);
  
      congratText = game.add.text(config.width / 4 * 5, prizeChest.y - config.guiPadding/2, 'You got a prize!', {
        font: config.guiPadding + "px Arial",
        fill: "#ffffff",
        align: "center"
      }, prizeScreenGroup);
      congratText.anchor.setTo(0.5, 1);
      congratText.scale.setTo(prizeScreenScale);
      
      logo = game.add.sprite(config.width / 4 *5, prizeChest.y - config.guiPadding*2.5, 'logo', {}, prizeScreenGroup);
      logo.anchor.setTo(0.5, 1);
      logo.scale.setTo(prizeScreenScale);
      
      prizeScreen = game.add.graphics(config.width, 0, prizeScreenGroup);
      prizeScreen.beginFill(0xA645B6);
      prizeScreen.drawRect(config.guiPadding, 0, config.width/2, config.height);
      for (i=0; i<config.height/config.guiPadding; i++) {
        prizeScreen.drawPolygon([[config.guiPadding, i*config.guiPadding],[config.guiPadding/2, i*config.guiPadding + config.guiPadding/2],[config.guiPadding, (i+1)*config.guiPadding]])
      };
      
      
      chestHalo = game.add.graphics(prizeChest.x, prizeChest.y+prizeChest.height/2, prizeScreenGroup);
      chestHalo.beginFill(0xD62FB3);
      chestHalo.drawCircle(0, 0, prizeChest.width*0.9);
      chestHalo.beginFill(0xF54397);
      chestHalo.drawCircle(0, 0, prizeChest.width*0.8);
      chestHalo.beginFill(0xD62FB3);
      chestHalo.drawCircle(0, 0, prizeChest.width*0.7);
      chestHalo.beginFill(0xF54397);
      chestHalo.drawCircle(0, 0, prizeChest.width*0.6);
      chestHalo.beginFill(0xD62FB3);
      chestHalo.drawCircle(0, 0, prizeChest.width*0.5);
      chestHaloShine = game.add.tween(chestHalo.scale).to({x:1.4, y:1.4}, 800, 'Linear', true, 0, -1, true);
  
      congratTextUnderlay = game.add.graphics(congratText.x - congratText.width/1.7 ,congratText.y - congratText.height*1.1, prizeScreenGroup);
      congratTextUnderlay.beginFill(0x7A0578);
      congratTextUnderlay.drawRoundedRect(0, 0, congratText.width*1.15, congratText.height*1.1, congratText.height*0.55);
      
      logo.bringToTop();
      prizeChest.bringToTop();
      congratText.bringToTop();
      playButton.bringToTop();
      playButtonText.bringToTop();
  
      chestSparksEmiter = game.add.emitter(config.width / 4 *5, prizeChest.y + prizeChest.height/2, 100, prizeScreenGroup);
      chestSparksEmiter.width = prizeChest.width + config.guiPadding;
      chestSparksEmiter.height = prizeChest.height + config.guiPadding;
      chestSparksEmiter.makeParticles(['star']);
      chestSparksEmiter.minParticleScale = 0.8 * config.spriteScale;
      chestSparksEmiter.maxParticleScale = 3 * config.spriteScale;
      chestSparksEmiter.minParticleSpeed.setTo(0, 0);
      chestSparksEmiter.maxParticleSpeed.setTo(0, 0);
      chestSparksEmiter.gravity = -config.gravity;
      chestSparksEmiter.setAlpha(0.7, 1);
      chestSparksEmiter.start(false, 500, 150);
      
      prizeScreenGroup.add(chestSparksEmiter);
      
      prizeScreenEaseIn = game.add.tween(prizeScreenGroup).to({x: -(config.width / 2)}, 800, 'Linear', true, 0, 0, false);
  
      victoryBanner = game.add.sprite(config.width / 4, config.height/9, 'victoryBanner');
      victoryBanner.anchor.setTo(0.5, 0);
      finishScale = (config.width/2-config.guiPadding)/victoryBanner.width;
      victoryBanner.scale.setTo(0.1);
      victoryBannerPopIn = game.add.tween(victoryBanner.scale).to({x:finishScale , y:finishScale}, 1500, Phaser.Easing.Elastic.Out, true, 0, 0, false);
      
      emitter = game.add.emitter(config.width / 3, config.guiPadding * 6, 100);
      emitter.width = config.width / 2;
      emitter.makeParticles(['confetti1', 'confetti2', 'confetti3', 'confetti4', 'confetti5']);
      emitter.minParticleScale = 3 * config.spriteScale;
      emitter.maxParticleScale = 8 * config.spriteScale;
      emitter.minParticleSpeed.setTo(1, 1);
      emitter.maxParticleSpeed.setTo(10, 10);
      emitter.gravity = 10;
      //emitter.flow(1000, 250, 5, -1);
  
  
  
      enemyWeapon.kill();
      gameScreen.lifeBarGroup.destroy();
      
      player.setAnimationByName(
        0,          //Track index
        "win",     //Animation's name
        true        //If the animation should loop or not
      );
    }, 300);
    
  },
};

