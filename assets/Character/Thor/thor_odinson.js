{
"skeleton": { "hash": "fA7oVVvxKSQckIsk860tGkVBqtQ", "spine": "3.6.52", "width": 284, "height": 653.19 },
"bones": [
	{ "name": "root" },
	{ "name": "root_child", "parent": "root" },
	{ "name": "body", "parent": "root_child", "length": 100, "rotation": 90, "y": 229.66 },
	{ "name": "hand_ik_l", "parent": "body", "rotation": -180, "x": -58.62, "y": -93.22 },
	{ "name": "arm_l", "parent": "body", "length": 70, "rotation": -180, "x": 83.76, "y": -93.16 },
	{ "name": "forearm_l", "parent": "arm_l", "length": 70, "x": 71 },
	{ "name": "hand_ik_r", "parent": "body", "rotation": -180, "x": -58.62, "y": 94.6 },
	{ "name": "arm_r", "parent": "body", "length": 70, "rotation": -180, "x": 83.76, "y": 94.74 },
	{ "name": "forearm_r", "parent": "arm_r", "length": 70, "x": 71 },
	{ "name": "hand_r", "parent": "forearm_r", "length": 50, "x": 71 },
	{ "name": "ball_brutality", "parent": "hand_r" },
	{ "name": "bow", "parent": "forearm_l", "x": 71 },
	{ "name": "head", "parent": "body", "length": 75, "x": 94.09, "y": -8.06 },
	{ "name": "brow_l", "parent": "head", "length": 5, "x": 191.63, "y": -25 },
	{ "name": "brow_r", "parent": "head", "length": 5, "x": 191.63, "y": 25 },
	{ "name": "eyes", "parent": "head", "x": 179.25 },
	{ "name": "foot_ik_l", "parent": "root_child", "x": 25, "y": 14.87 },
	{ "name": "thigh_l", "parent": "body", "length": 92, "rotation": -180, "x": -29.35, "y": -25 },
	{ "name": "shin_l", "parent": "thigh_l", "length": 92, "x": 92.5 },
	{ "name": "toes_l", "parent": "foot_ik_l", "x": 40 },
	{ "name": "foot_dummy_l", "parent": "shin_l", "rotation": 90, "x": 92.94 },
	{ "name": "foot_l", "parent": "foot_dummy_l", "length": 40 },
	{ "name": "foot_ik_r", "parent": "root_child", "x": -25, "y": 14.87 },
	{ "name": "thigh_r", "parent": "body", "length": 92, "rotation": -180, "x": -29.35, "y": 25 },
	{ "name": "shin_r", "parent": "thigh_r", "length": 92, "x": 92.5 },
	{ "name": "toes_r", "parent": "foot_ik_r", "x": 40 },
	{ "name": "foot_dummy_r", "parent": "shin_r", "rotation": 90, "x": 92.94 },
	{ "name": "foot_r", "parent": "foot_dummy_r", "length": 40 },
	{ "name": "hand_l", "parent": "forearm_l", "length": 50, "x": 71 },
	{ "name": "hat", "parent": "head", "length": 50, "x": 218.58, "y": 14.38 },
	{ "name": "mouth", "parent": "head", "x": 95.46, "y": -6.04 },
	{ "name": "mouth_position", "parent": "mouth", "length": 40, "rotation": -90, "x": 0.31, "y": 0.23 },
	{ "name": "weapon", "parent": "hand_r" }
],
"slots": [
	{ "name": "arm_l", "bone": "arm_l", "attachment": "hand2_1" },
	{ "name": "hand_l", "bone": "hand_l", "attachment": "hand2_3" },
	{ "name": "forearm_l", "bone": "forearm_l", "attachment": "hand2_2" },
	{ "name": "clock", "bone": "body", "attachment": "clock" },
	{ "name": "thigh_l", "bone": "thigh_l", "attachment": "leg2_1" },
	{ "name": "shin_l", "bone": "shin_l", "attachment": "leg2_2" },
	{ "name": "foot_l", "bone": "foot_l", "attachment": "leg2_3" },
	{ "name": "thigh_r", "bone": "thigh_r", "attachment": "leg1_1" },
	{ "name": "shin_r", "bone": "shin_r", "attachment": "leg1_2" },
	{ "name": "foot_r", "bone": "foot_r", "attachment": "leg1_3" },
	{ "name": "body", "bone": "body", "attachment": "body" },
	{ "name": "head", "bone": "head", "attachment": "head" },
	{ "name": "nose", "bone": "eyes", "attachment": "nose" },
	{ "name": "eyes", "bone": "eyes", "attachment": "eyes_1" },
	{ "name": "eyebrow_r", "bone": "brow_r", "attachment": "eyebrow_left" },
	{ "name": "eyebrow_l", "bone": "brow_l", "attachment": "eyebrow_right" },
	{ "name": "mouth", "bone": "mouth_position", "attachment": "mouth_1" },
	{ "name": "helmet", "bone": "hat", "attachment": "helmet" },
	{ "name": "arm_r", "bone": "arm_r", "attachment": "hand1_1" },
	{ "name": "hand_r", "bone": "hand_r", "attachment": "hand1_3" },
	{ "name": "forearm_r", "bone": "forearm_r", "attachment": "hand1_2" }
],
"ik": [
	{
		"name": "foot_l",
		"order": 0,
		"bones": [ "thigh_l", "shin_l" ],
		"target": "foot_ik_l",
		"bendPositive": false
	},
	{
		"name": "foot_r",
		"order": 1,
		"bones": [ "thigh_r", "shin_r" ],
		"target": "foot_ik_r",
		"bendPositive": false
	},
	{
		"name": "hand_l",
		"order": 2,
		"bones": [ "arm_l", "forearm_l" ],
		"target": "hand_ik_l",
		"mix": 0
	},
	{
		"name": "hand_r",
		"order": 3,
		"bones": [ "arm_r", "forearm_r" ],
		"target": "hand_ik_r",
		"mix": 0
	},
	{
		"name": "toes_l",
		"order": 4,
		"bones": [ "foot_dummy_l", "foot_l" ],
		"target": "toes_l"
	},
	{
		"name": "toes_r",
		"order": 5,
		"bones": [ "foot_dummy_r", "foot_r" ],
		"target": "toes_r"
	}
],
"skins": {
	"default": {
		"arm_l": {
			"hand2_1": { "x": 34.98, "rotation": 90, "width": 52, "height": 124 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 72.7, -24.04, 72.7, 23.51, -24.43, 23.51, -24.43, -24.04 ]
			}
		},
		"arm_r": {
			"hand1_1": { "x": 34.98, "rotation": 90, "width": 52, "height": 124 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 71.24, -23.3, 71.24, 23.52, -23.52, 23.52, -23.52, -23.3 ]
			}
		},
		"body": {
			"body": { "x": 56.3, "rotation": -90, "width": 236, "height": 224 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 29,
				"vertices": [ 63.82, 109.45, 43.15, 96.68, 28.21, 76.2, 21.77, 51.93, -3.72, 51.78, -16.8, 48.87, -23.54, 39.83, -26.56, 28.35, -27.15, 13.75, -49.39, 6.88, -49.4, -32.92, -21.33, -41.99, -13.32, -48.14, 2.12, -50.94, 2.89, -55.87, 23.19, -60.2, 31.64, -82.53, 46.72, -100.24, 67.54, -111.44, 91.08, -115.85, 115.44, -114.09, 138.45, -106, 153.1, -88.8, 160.31, -66.69, 160.31, 59.56, 155.83, 84.58, 140.05, 103.79, 115.78, 115.07, 88.67, 115.52 ]
			}
		},
		"clock": {
			"clock": { "x": 49.09, "y": 40.65, "rotation": -90, "width": 184, "height": 244 }
		},
		"eyebrow_l": {
			"eyebrow_right": { "rotation": -90, "width": 44, "height": 24 }
		},
		"eyebrow_r": {
			"eyebrow_left": { "rotation": -90, "width": 44, "height": 24 }
		},
		"eyes": {
			"dead_eyes": { "rotation": -90, "width": 88, "height": 32 },
			"eyes_1": { "rotation": -90, "width": 76, "height": 28 },
			"eyes_2": { "rotation": -90, "width": 88, "height": 20 },
			"eyes_3": { "rotation": -90, "width": 80, "height": 24 },
			"eyes_4": { "rotation": -90, "width": 60, "height": 28 },
			"eyes_5": { "path": "eyes_2", "x": -2.27, "scaleY": -1, "rotation": -90, "width": 88, "height": 20 }
		},
		"foot_l": {
			"leg2_3": { "x": 21.92, "width": 52, "height": 32 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 7,
				"vertices": [ 33.13, -14.29, 41.64, -9.55, 44.28, -0.16, 41.5, 9.66, 33.42, 13.94, -0.04, 14.08, -0.04, -14.23 ]
			}
		},
		"foot_r": {
			"leg1_3": { "x": 21.92, "width": 52, "height": 32 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 7,
				"vertices": [ 32.67, -14.29, 41.18, -9.55, 43.82, -0.16, 41.04, 9.66, 32.96, 13.94, 0.36, 14.08, 0.36, -14.23 ]
			}
		},
		"forearm_l": {
			"hand2_2": { "x": 35.61, "rotation": 90, "width": 60, "height": 124 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 70.45, -23.54, 70.16, 23.82, -0.44, 23.17, 0.17, -23.71 ]
			}
		},
		"forearm_r": {
			"hand1_2": { "x": 35.61, "rotation": 90, "width": 60, "height": 124 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 70.57, -24.57, 71.54, 23.56, -1.44, 23.56, -1.44, -24.57 ]
			}
		},
		"hand_l": {
			"hand2_3": { "x": 14.97, "rotation": 90, "width": 52, "height": 82 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 7,
				"vertices": [ 37.12, -24.04, 48.87, -16.36, 54.79, 0.14, 49.51, 15.97, 37.12, 23.49, -0.3, 23.49, -0.3, -24.04 ]
			}
		},
		"hand_r": {
			"hand1_3": { "x": 14.97, "rotation": 90, "width": 52, "height": 80 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 7,
				"vertices": [ 37.15, -23.72, 49.63, -15.78, 54.84, -0.14, 49.26, 15.98, 35.04, 23.54, 0.54, 23.54, 0.05, -23.72 ]
			}
		},
		"head": {
			"head": { "x": 145.07, "y": 14, "rotation": -90, "width": 148, "height": 204 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 9,
				"vertices": [ 76.94, 71.23, 76.94, -43.4, 231.52, -43.4, 248.33, -35.07, 260.53, -16.16, 264.99, 11.62, 261.53, 39.91, 250.3, 60.87, 231.52, 71.23 ]
			}
		},
		"helmet": {
			"helmet": { "x": -31.25, "rotation": -90, "width": 284, "height": 280 }
		},
		"mouth": {
			"mouth": { "x": -1.77, "y": -0.31, "width": 40, "height": 20 },
			"mouth_1": { "x": 3.39, "y": -2.31, "width": 80, "height": 56 },
			"mouth_2": { "x": 0.23, "y": -0.31, "width": 72, "height": 54 },
			"mouth_3": { "x": -1.77, "y": -1.62, "width": 84, "height": 48 },
			"mouth_4": { "x": -1.09, "y": -2.5, "width": 68, "height": 64 },
			"mouth_5": { "x": -4.58, "y": -0.31, "width": 88, "height": 32 },
			"mouth_6": { "x": 0.23, "y": -0.31, "width": 36, "height": 28 },
			"mouth_7": { "x": 0.85, "y": -1.62, "width": 88, "height": 68 }
		},
		"nose": {
			"nose": { "x": -28.93, "y": -8, "rotation": -90, "width": 44, "height": 52 }
		},
		"shin_l": {
			"leg2_2": { "x": 45.92, "rotation": 90, "width": 44, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 92.73, -14.99, 92.73, 15.11, 0.08, 15.11, 0.08, -14.99 ]
			}
		},
		"shin_r": {
			"leg1_2": { "x": 45.92, "rotation": 90, "width": 44, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ -0.66, 14.57, -0.66, -14.42, 92.89, -14.42, 92.89, 14.2 ]
			}
		},
		"thigh_l": {
			"leg2_1": { "x": 46.59, "rotation": 90, "width": 36, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 92.21, -14.99, 92.21, 15.85, -14.95, 15.85, -14.95, -14.99 ]
			}
		},
		"thigh_r": {
			"leg1_1": { "x": 46.59, "rotation": 90, "width": 36, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 93.32, -14.79, 93.32, 14.94, -14.48, 14.94, -14.48, -14.79 ]
			}
		}
	}
},
"events": {
	"Death_End": {},
	"Draw_End": {},
	"Effect_hammer2_off": {},
	"Effect_hammer2_on": {},
	"Effect_hammer_off": {},
	"Effect_hammer_on": {},
	"Jump": {},
	"Shot_End": {},
	"Spawn_End": {},
	"Weapon_Visible": {}
},
"animations": {
	"aim": {
		"bones": {
			"body": {
				"rotate": [
					{ "time": 0, "angle": -60 },
					{ "time": 1, "angle": 90 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": -40,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1, "x": 0, "y": -70 }
				]
			}
		}
	},
	"grenade_draw": {
		"slots": {
			"eyes": {
				"attachment": [
					{ "time": 0, "name": "eyes_1" },
					{ "time": 0.2, "name": "eyes_3" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth" },
					{ "time": 0.2, "name": "mouth_6" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0333,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"angle": -3,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4333, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"x": 0,
						"y": -20,
						"curve": [ 0.25, 0, 0, 1 ]
					},
					{ "time": 0.3333, "x": -30, "y": -10 }
				]
			},
			"head": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 3,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4667, "angle": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.1,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.2, "x": -55, "y": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 370,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2333,
						"angle": 250,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": 255 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"angle": 30,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3,
						"angle": -20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4, "angle": -15 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2,
						"angle": 30,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4333, "angle": -5 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2,
						"angle": 425,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3, "angle": 420 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"angle": -45,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2333,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": 350 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2,
						"angle": 340,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4, "angle": -5 }
				]
			},
			"mouth": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 0.2, "x": -8.68, "y": 14.59 }
				],
				"scale": [
					{
						"time": 0,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"x": 0.4,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.4, "x": 0.8, "y": 1 }
				]
			},
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{
						"time": 0.1333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": 5 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"x": -5,
						"y": -0.24,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 2,
						"y": -0.27,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3667, "x": 0, "y": 0 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{
						"time": 0.1333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": -5 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"x": -5,
						"y": -0.24,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 2,
						"y": -0.27,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3667, "x": 0, "y": 0 }
				]
			},
			"eyes": {
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"x": 0,
						"y": 3,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"x": 0,
						"y": -3,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.2667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"weapon": {
				"scale": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.1667, "x": 1, "y": 1 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"bow": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{ "time": 0, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false }
			],
			"hand_l": [
				{ "time": 0, "mix": 0 }
			],
			"hand_r": [
				{ "time": 0, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0 }
			],
			"toes_r": [
				{ "time": 0 }
			]
		},
		"events": [
			{ "time": 0.1667, "name": "Weapon_Visible" },
			{ "time": 0.4667, "name": "Draw_End" }
		]
	},
	"grenade_shot": {
		"slots": {
			"eyes": {
				"attachment": [
					{ "time": 0, "name": "eyes_3" },
					{ "time": 0.1667, "name": "eyes_1" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth_6" },
					{ "time": 0.1667, "name": "mouth_2" },
					{ "time": 0.6, "name": "mouth_1" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"mouth": {
				"translate": [
					{ "time": 0, "x": -8.68, "y": 14.59 },
					{
						"time": 0.1667,
						"x": 0,
						"y": -10,
						"curve": [ 0.25, 0, 0.087, 1 ]
					},
					{
						"time": 0.4,
						"x": 0,
						"y": -45,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"eyes": {
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"x": 0,
						"y": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"x": 0,
						"y": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 40,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 50,
						"curve": [ 0.088, 0, 0, 1 ]
					},
					{
						"time": 0.3333,
						"angle": -45,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"angle": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8333, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": -60,
						"y": -30,
						"curve": [ 0.25, 0, 0, 1 ]
					},
					{
						"time": 0.3333,
						"x": 60,
						"y": -30,
						"curve": [ 0.857, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": -55, "y": 0, "curve": "stepped" },
					{ "time": 0.0667, "x": -55, "y": 0 },
					{ "time": 0.1667, "x": -103.39, "y": 52.3 },
					{
						"time": 0.2667,
						"x": -85.81,
						"y": 97,
						"curve": [ 0.166, 0.25, 0.804, 1 ]
					},
					{
						"time": 0.4333,
						"x": -67.83,
						"y": 100.13,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{ "time": 0.6, "x": 0, "y": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": -105,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 270,
						"curve": [ 0.25, 0, 0.156, 1 ]
					},
					{
						"time": 0.2333,
						"angle": 480,
						"curve": [ 0.479, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7,
						"angle": 362,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8, "angle": 360 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": -15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 15,
						"curve": [ 0.25, 0, 0.156, 1 ]
					},
					{
						"time": 0.2333,
						"angle": -15,
						"curve": [ 0.859, 0, 0.75, 1 ]
					},
					{
						"time": 0.5,
						"angle": 20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6333,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8333, "angle": 360 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 10,
						"curve": [ 0.25, 0, 0.156, 1 ]
					},
					{
						"time": 0.2667,
						"angle": -10,
						"curve": [ 0.859, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7667,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8667, "angle": 360 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 420,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 85,
						"curve": [ 0.25, 0, 0, 1 ]
					},
					{
						"time": 0.1667,
						"angle": 360,
						"curve": [ 0.699, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"angle": 350,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"angle": 365,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7,
						"angle": 358,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8, "angle": 360 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 350,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 45,
						"curve": [ 0.25, 0, 0.301, 1 ]
					},
					{
						"time": 0.2667,
						"angle": -20,
						"curve": [ 0.682, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": -30,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6333,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8333, "angle": 0 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"angle": 20,
						"curve": [ 0.25, 0, 0.301, 1 ]
					},
					{
						"time": 0.3,
						"angle": -20,
						"curve": [ 0.682, 0, 0.75, 1 ]
					},
					{
						"time": 0.5667,
						"angle": -30,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7667,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8667, "angle": 0 }
				]
			},
			"brow_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 340,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.1,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": -3.87,
						"y": 0.68,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "x": 0, "y": 0 }
				]
			},
			"brow_l": {
				"rotate": [
					{
						"time": 0,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.1,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": -3.36,
						"y": -0.59,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.0667,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"x": -45.47,
						"y": -55.97,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": -144.58,
						"y": -97.94,
						"curve": [ 0.85, 0, 0.956, 0.76 ]
					},
					{
						"time": 0.5667,
						"x": -13.95,
						"y": -69.02,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 0.6, "x": 0, "y": 0 }
				]
			},
			"head": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 10,
						"curve": [ 0.088, 0, 0, 1 ]
					},
					{
						"time": 0.3667,
						"angle": -20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6333,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7667,
						"angle": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.8667, "angle": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.859, 0, 0.75, 1 ]
					},
					{ "time": 0.1, "x": 25, "y": 0, "curve": "stepped" },
					{
						"time": 0.5667,
						"x": 25,
						"y": 0,
						"curve": [ 0.859, 0, 0.75, 1 ]
					},
					{ "time": 0.6667, "x": 0, "y": 0 }
				]
			},
			"weapon": {
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 0.1333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 0.1667, "x": 0, "y": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"bow": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{ "time": 0, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false }
			],
			"hand_l": [
				{ "time": 0, "mix": 0 }
			],
			"hand_r": [
				{ "time": 0, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0 }
			],
			"toes_r": [
				{ "time": 0 }
			]
		},
		"drawOrder": [
			{ "time": 0 },
			{
				"time": 0.1667,
				"offsets": [
					{ "slot": "mouth", "offset": 1 }
				]
			},
			{ "time": 0.6 }
		],
		"events": [
			{ "time": 0.1667, "name": "Shot_End" }
		]
	},
	"idle_apple": {
		"slots": {
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth_1" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"weapon": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"bow": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 0.5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"angle": -0.5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 0.5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"angle": -0.5,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{ "time": 1.0667, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": -1,
						"curve": [ 0.539, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 0,
						"y": -7,
						"curve": [ 0.25, 0, 0.467, 1.01 ]
					},
					{
						"time": 0.5333,
						"x": 0,
						"y": -1,
						"curve": [ 0.539, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 0,
						"y": -7,
						"curve": [ 0.25, 0, 0.467, 1.01 ]
					},
					{ "time": 1.0667, "x": 0, "y": -1 }
				]
			},
			"head": {
				"rotate": [
					{ "time": 0, "angle": -0.39 },
					{
						"time": 0.0667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.2,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"angle": -1,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{ "time": 1.0667, "angle": -0.39 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.0667, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.0667, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.0667, "x": 0, "y": 0 }
				]
			},
			"toes_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.0667, "x": 0, "y": 0 }
				]
			},
			"mouth": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{
						"time": 0,
						"x": 0.85,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"x": 0.95,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "x": 0.85, "y": 1 }
				]
			},
			"eyes": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 360,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 360,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 360 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 360,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 365,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 360,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 365,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 360 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 0 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 0 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 0 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.0667, "angle": 0 }
				]
			},
			"brow_r": {
				"translate": [
					{
						"time": 0,
						"x": -0.67,
						"y": 0,
						"curve": [ 0.382, 0.56, 0.74, 1 ]
					},
					{
						"time": 0.1,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3667,
						"x": -2,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6333,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"x": -2,
						"y": 0,
						"curve": [ 0.244, 0, 0.641, 0.57 ]
					},
					{ "time": 1.0667, "x": -0.67, "y": 0 }
				]
			},
			"brow_l": {
				"translate": [
					{
						"time": 0,
						"x": -0.67,
						"y": 0,
						"curve": [ 0.382, 0.56, 0.74, 1 ]
					},
					{
						"time": 0.1,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3667,
						"x": -2,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6333,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"x": -2,
						"y": 0,
						"curve": [ 0.244, 0, 0.641, 0.57 ]
					},
					{ "time": 1.0667, "x": -0.67, "y": 0 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{ "time": 0, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false }
			],
			"hand_r": [
				{ "time": 0, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0 }
			],
			"toes_r": [
				{ "time": 0 }
			]
		},
		"drawOrder": [
			{ "time": 0 }
		]
	},
	"scare": {
		"slots": {
			"eyes": {
				"attachment": [
					{ "time": 0, "name": "eyes_1" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth" },
					{ "time": 0.1667, "name": "mouth_4" },
					{ "time": 1.5, "name": "mouth" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"weapon": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"bow": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2,
						"angle": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"angle": -1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3,
						"angle": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4333,
						"angle": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.583, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"x": 0,
						"y": 10,
						"curve": [ 0.25, 0, 0.327, 1 ]
					},
					{
						"time": 0.2667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"x": -10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3667,
						"x": 10,
						"y": -2,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5333, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"head": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 370,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 200,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1667,
						"angle": -160,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"angle": 195,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5,
						"angle": 365,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6, "angle": 360 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3,
						"angle": 290,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"angle": -70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3,
						"angle": 285,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5333,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6333, "angle": 0 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"angle": -310.15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2333,
						"angle": 49.85,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5667,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6667, "angle": 0 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0667,
						"angle": 350,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 520,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1667,
						"angle": 160,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"angle": 525,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5,
						"angle": 355,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6, "angle": 360 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1,
						"angle": -18,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3, "angle": 70, "curve": "stepped" },
					{
						"time": 1.2,
						"angle": 70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3,
						"angle": 75,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5333,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6333, "angle": 0 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": -15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"angle": -410.15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2333,
						"angle": -50.15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.5667,
						"angle": -5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.6667, "angle": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"mouth": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 0.1667, "x": -10, "y": 0, "curve": "stepped" },
					{ "time": 1.5, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{
						"time": 0.2667,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8667,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1333,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4,
						"x": 0.9,
						"y": 1.1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5, "x": 1, "y": 1 }
				]
			},
			"eyes": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{
						"time": 0.1667,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": 10 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.1667,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5, "x": 0, "y": 0 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{
						"time": 0.1667,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.3333, "angle": -10 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.1667,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.3333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1333,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2667,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": 10,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4,
						"x": 6,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5, "x": 0, "y": 0 }
				]
			},
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{
						"time": 0.0333,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"x": 5,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": -2,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5,
						"x": 3,
						"y": 3.52,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7,
						"x": -3,
						"y": 3.52,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"x": 3,
						"y": 3.52,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1,
						"x": -3,
						"y": 3.52,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3,
						"x": 3,
						"y": 3.52,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4,
						"x": 0,
						"y": -2.48,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5333, "x": 0, "y": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{
					"time": 0,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.3333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.4,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.4667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.5333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.7333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.9333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.0667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.1333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.2,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.2667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{ "time": 1.3333, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false, "curve": "stepped" },
				{
					"time": 0.2667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.3333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.4,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.4667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.5333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.7333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.9333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.0667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.1333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.2,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.2667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.3333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.4,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{ "time": 1.4667, "bendPositive": false }
			],
			"hand_l": [
				{ "time": 0, "mix": 0 }
			],
			"hand_r": [
				{ "time": 0, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0 }
			],
			"toes_r": [
				{ "time": 0 }
			]
		},
		"drawOrder": [
			{ "time": 0 }
		]
	},
	"win": {
		"slots": {
			"eyes": {
				"attachment": [
					{ "time": 0, "name": "eyes_2" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth_2" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"weapon": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"bow": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"eyes": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"mouth": {
				"translate": [
					{
						"time": 0,
						"x": 5,
						"y": -55,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 2,
						"y": -45,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 0.5333,
						"x": 5,
						"y": -55,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 2,
						"y": -45,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 1.0667,
						"x": 5,
						"y": -55,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": 2,
						"y": -45,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 1.6,
						"x": 5,
						"y": -55,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"x": 2,
						"y": -45,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{ "time": 2.1333, "x": 5, "y": -55 }
				],
				"scale": [
					{
						"time": 0,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": 1.1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": 1.1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": 1.1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"x": 1.1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "x": 1, "y": 1 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 258,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"angle": 262,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 258,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"angle": 262,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"angle": 258,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4667,
						"angle": 262,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.7333,
						"angle": 258,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 260,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 2,
						"angle": 262,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": -100 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 460,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 98,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 100,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.4,
						"angle": 102,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 460,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 98,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 100,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9333,
						"angle": 102,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 460,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.2,
						"angle": 98,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 100,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.4667,
						"angle": 102,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 460,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.7333,
						"angle": 98,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 100,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 2,
						"angle": 102,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": 100 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 290,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 280,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 290,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 280,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 290,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 280,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 290,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 280,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": 290 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 310,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 300,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 310,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 300,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 310,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 300,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 310,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 300,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": 310 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 80,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 80,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 80,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 70,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 80,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": 70 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 50,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 60,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 50,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 60,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 50,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"angle": 60,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.6,
						"angle": 50,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"angle": 60,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.1333, "angle": 50 }
				]
			},
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.1333,
						"angle": 2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 0.2667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.4,
						"angle": -2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 0.8,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.9333,
						"angle": -2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.0667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.2,
						"angle": 2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.3333,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.4667,
						"angle": -2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.6,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.7333,
						"angle": 2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.8667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 2,
						"angle": -2,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{ "time": 2.1333, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 5,
						"y": -2,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 0.2667,
						"x": -5,
						"y": -20,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 0.5333,
						"x": 5,
						"y": -2,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"x": -5,
						"y": -20,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 1.0667,
						"x": 5,
						"y": -2,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 1.3333,
						"x": -5,
						"y": -20,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{
						"time": 1.6,
						"x": 5,
						"y": -2,
						"curve": [ 0.845, 0, 0.75, 1 ]
					},
					{
						"time": 1.8667,
						"x": -5,
						"y": -20,
						"curve": [ 0.25, 0, 0.16, 1 ]
					},
					{ "time": 2.1333, "x": 5, "y": -2 }
				]
			},
			"head": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.1333,
						"angle": -3,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 0.2667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.4,
						"angle": 3,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.5333,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.6667,
						"angle": -3,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 0.8,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.9333,
						"angle": 3,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.0667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.2,
						"angle": -3,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.3333,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.4667,
						"angle": 3,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.6,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 1.7333,
						"angle": -3,
						"curve": [ 0.254, 0, 0.838, 0.78 ]
					},
					{
						"time": 1.8667,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 2,
						"angle": 3,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{ "time": 2.1333, "angle": 0 }
				]
			},
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 15 }
				],
				"translate": [
					{ "time": 0, "x": 4.59, "y": 1.23 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": -15 }
				],
				"translate": [
					{ "time": 0, "x": 3.84, "y": -1.03 }
				]
			},
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"mouth_position": {
				"translate": [
					{ "time": 0, "x": -2.96, "y": 12.3 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{ "time": 0, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false }
			],
			"hand_l": [
				{ "time": 0, "mix": 0 }
			],
			"hand_r": [
				{ "time": 0, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0 }
			],
			"toes_r": [
				{ "time": 0 }
			]
		},
		"drawOrder": [
			{
				"time": 0,
				"offsets": [
					{ "slot": "mouth", "offset": 1 }
				]
			}
		]
	}
}
}