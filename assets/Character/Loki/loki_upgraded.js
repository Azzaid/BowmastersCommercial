{
"skeleton": { "hash": "9620us12fXtf+VoMrar76epxbVk", "spine": "3.6.52", "width": 334.58, "height": 673.88 },
"bones": [
	{ "name": "root" },
	{ "name": "root_child", "parent": "root" },
	{ "name": "body", "parent": "root_child", "length": 100, "rotation": 90, "y": 220 },
	{ "name": "hand_ik_l", "parent": "root_child", "rotation": -90, "x": 90, "y": 182.42 },
	{ "name": "arm_l", "parent": "body", "length": 70, "rotation": -180, "x": 105, "y": -90 },
	{ "name": "forearm_l", "parent": "arm_l", "length": 70, "x": 71 },
	{ "name": "hand_ik_r", "parent": "root_child", "rotation": -90, "x": -91.14, "y": 176.17 },
	{ "name": "arm_r", "parent": "body", "length": 70, "rotation": -180, "x": 104.68, "y": 90 },
	{ "name": "forearm_r", "parent": "arm_r", "length": 70, "x": 71 },
	{ "name": "hand_r_tip", "parent": "hand_ik_r", "rotation": 90, "x": 48.94, "y": -0.31 },
	{ "name": "hand_r", "parent": "forearm_r", "length": 50, "x": 71 },
	{ "name": "ball_bone", "parent": "hand_r" },
	{ "name": "body_child", "parent": "body", "length": 68.78, "rotation": 0.68, "x": -1.13, "y": -10.67 },
	{ "name": "body_back", "parent": "body_child", "rotation": -90.68, "x": 134.75, "y": 16.51 },
	{ "name": "head", "parent": "body", "length": 75, "x": 93.61, "y": -14.8 },
	{ "name": "brow_l", "parent": "head", "length": 5, "x": 170.6, "y": -20.68 },
	{ "name": "brow_r", "parent": "head", "length": 5, "x": 170.6, "y": 19.32 },
	{ "name": "eyes", "parent": "head", "x": 166.01, "y": -0.68 },
	{ "name": "foot_ik_l", "parent": "root_child", "x": 25, "y": 14.87 },
	{ "name": "thigh_l", "parent": "body", "length": 92, "rotation": -180, "x": -19.69, "y": -25 },
	{ "name": "shin_l", "parent": "thigh_l", "length": 92, "x": 92.5 },
	{ "name": "toes_l", "parent": "foot_ik_l", "x": 40 },
	{ "name": "foot_dummy_l", "parent": "shin_l", "rotation": 90, "x": 92.94 },
	{ "name": "foot_l", "parent": "foot_dummy_l", "length": 40 },
	{ "name": "foot_ik_r", "parent": "root_child", "x": -25, "y": 14.87 },
	{ "name": "thigh_r", "parent": "body", "length": 92, "rotation": -180, "x": -19.69, "y": 25 },
	{ "name": "shin_r", "parent": "thigh_r", "length": 92, "x": 92.5 },
	{ "name": "toes_r", "parent": "foot_ik_r", "x": 40 },
	{ "name": "foot_dummy_r", "parent": "shin_r", "rotation": 90, "x": 92.94 },
	{ "name": "foot_r", "parent": "foot_dummy_r", "length": 40 },
	{ "name": "hand_tip", "parent": "hand_ik_l", "rotation": 90, "x": 47.41, "y": -0.08 },
	{ "name": "hand_l", "parent": "forearm_l", "length": 50, "x": 71 },
	{ "name": "hat", "parent": "head", "length": 50, "x": 235, "y": 15.97 },
	{ "name": "mouth", "parent": "head", "x": 105.22, "y": 0.3 },
	{ "name": "weapon", "parent": "hand_r" }
],
"slots": [
	{ "name": "body_back", "bone": "body_back", "attachment": "body_back" },
	{ "name": "arm_l", "bone": "arm_l", "attachment": "hand2_1" },
	{ "name": "hand_l", "bone": "hand_l", "attachment": "hand2_3" },
	{ "name": "forearm_l", "bone": "forearm_l", "attachment": "hand2_2" },
	{ "name": "thigh_l", "bone": "thigh_l", "attachment": "leg2_1" },
	{ "name": "shin_l", "bone": "shin_l", "attachment": "leg2_2" },
	{ "name": "foot_l", "bone": "foot_l", "attachment": "leg2_3" },
	{ "name": "thigh_r", "bone": "thigh_r", "attachment": "leg1_1" },
	{ "name": "shin_r", "bone": "shin_r", "attachment": "leg1_2" },
	{ "name": "foot_r", "bone": "foot_r", "attachment": "leg1_3" },
	{ "name": "body", "bone": "body_child", "attachment": "body" },
	{ "name": "head", "bone": "head", "attachment": "head" },
	{ "name": "mouth", "bone": "mouth", "attachment": "mouth_3" },
	{ "name": "eyes", "bone": "eyes", "attachment": "eyes_1" },
	{ "name": "nose", "bone": "eyes", "attachment": "nose" },
	{ "name": "hair", "bone": "hat", "attachment": "helmet" },
	{ "name": "arm_r", "bone": "arm_r", "attachment": "hand1_1" },
	{ "name": "hand_r", "bone": "hand_r", "attachment": "hand1_3" },
	{ "name": "forearm_r", "bone": "forearm_r", "attachment": "hand1_2" },
	{ "name": "scull", "bone": "arm_r", "attachment": "scull" }
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
		"name": "hand_L_tip",
		"order": 3,
		"bones": [ "hand_l" ],
		"target": "hand_tip"
	},
	{
		"name": "hand_l",
		"order": 2,
		"bones": [ "arm_l", "forearm_l" ],
		"target": "hand_ik_l"
	},
	{
		"name": "hand_r",
		"order": 4,
		"bones": [ "arm_r", "forearm_r" ],
		"target": "hand_ik_r",
		"mix": 0
	},
	{
		"name": "hand_r_tip",
		"order": 5,
		"bones": [ "hand_r" ],
		"target": "hand_r_tip",
		"mix": 0
	},
	{
		"name": "toes_l",
		"order": 6,
		"bones": [ "foot_dummy_l", "foot_l" ],
		"target": "toes_l"
	},
	{
		"name": "toes_r",
		"order": 7,
		"bones": [ "foot_dummy_r", "foot_r" ],
		"target": "toes_r"
	}
],
"skins": {
	"default": {
		"arm_l": {
			"hand2_1": { "x": 34.98, "rotation": 90, "width": 60, "height": 120 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 72.7, -25.21, 72.7, 24.97, -27.68, 24.6, -27.68, -25.02 ]
			}
		},
		"arm_r": {
			"hand1_1": { "x": 34.98, "rotation": 90, "width": 60, "height": 120 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 71.24, -24.12, 71.24, 24.04, -27.73, 24.04, -27.73, -24.29 ]
			}
		},
		"body": {
			"body": { "x": 70.36, "y": 9.83, "rotation": -90.68, "width": 248, "height": 236 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 27,
				"vertices": [ 1.25, 64.78, -13.92, 63.49, -25.37, 56.57, -30.55, 36.02, -31.15, -14.64, -26.43, -32.39, -13.97, -39.2, -0.28, -41.49, -0.43, -63.64, 22.88, -65.03, 31.6, -82.16, 56.85, -100.91, 84.37, -106.62, 112.81, -105.79, 128.65, -101.37, 141.07, -95.93, 155.74, -80.04, 165.07, -56.13, 164.46, 72.52, 158.5, 96.94, 146.17, 111.22, 133.59, 119.6, 113.81, 126.72, 76.06, 126.06, 42.08, 117.09, 20.18, 88.39, 2.35, 87.26 ]
			}
		},
		"body_back": {
			"body_back": { "x": 11.73, "y": -71.85, "width": 324, "height": 408 }
		},
		"eyes": {
			"eyes_1": { "rotation": -90, "width": 91, "height": 36 }
		},
		"foot_l": {
			"leg2_3": { "x": 7.64, "width": 52, "height": 32 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 11,
				"vertices": [ 22.36, 13.25, 16.78, 14.5, -15.35, 14.5, -15.73, -14.54, 29.72, -14.54, 29.75, -11.47, 29.76, -8.92, 29.76, -5.18, 29.75, 1.29, 28.52, 6.47, 26, 10.03 ]
			}
		},
		"foot_r": {
			"leg1_3": { "x": 7.43, "width": 52, "height": 32 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 11,
				"vertices": [ 17.59, -14.52, 30.44, -14.68, 30.38, -9.55, 30.26, -5.07, 30.4, 1.18, 28.39, 7.65, 25.44, 11.17, 21.22, 13.9, 15.75, 14.35, -15.21, 14.35, -15.21, -14.43 ]
			}
		},
		"forearm_l": {
			"hand2_2": { "x": 35.61, "rotation": 90, "width": 60, "height": 120 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 71.45, -24.74, 71.21, 24.52, 0.06, 24.6, -0.03, -24.76 ]
			}
		},
		"forearm_r": {
			"hand1_2": { "x": 35.61, "rotation": 90, "width": 60, "height": 120 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 71.19, -24.33, 71.54, 24.39, 0.32, 23.89, 0.32, -24 ]
			}
		},
		"hair": {
			"helmet": { "x": 23.16, "y": -2.74, "scaleX": 0.951, "rotation": -90, "width": 352, "height": 200 }
		},
		"hand_l": {
			"hand2_3": { "x": 14.97, "rotation": 90, "width": 60, "height": 80 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 12,
				"vertices": [ 34.37, -24.62, 41.98, -21.88, 46.54, -17.79, 51.61, -13.19, 53.64, -6.43, 53.64, 7.26, 51.45, 13.17, 49.08, 16.22, 42.31, 21.46, 34.54, 24.34, -2.86, 24.34, -2.86, -24.62 ]
			}
		},
		"hand_r": {
			"hand1_3": { "x": 14.97, "rotation": 90, "width": 60, "height": 80 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 12,
				"vertices": [ 33.82, -24.04, 41.7, -21.24, 47.43, -17.06, 51.78, -12.03, 53.71, -5.76, 53.71, 7.28, 50.33, 14.36, 46.95, 18.89, 42.83, 22.11, 33.17, 24.04, 0.54, 24.04, 0.05, -23.9 ]
			}
		},
		"head": {
			"head": { "x": 135, "y": 10.49, "rotation": -90, "width": 156, "height": 212 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 13,
				"vertices": [ 208.09, 70.99, 193.71, 72.98, 59.27, 72.22, 59.27, -53.25, 194.02, -53.25, 207.48, -52.02, 217.05, -47.43, 230.52, -39.34, 242.45, -16.19, 244.59, 20.41, 241.23, 39.08, 231.74, 55.91, 221.03, 64.87 ]
			}
		},
		"mouth": {
			"mouth_3": { "x": -5, "y": -2.25, "rotation": -90, "width": 84, "height": 59 }
		},
		"nose": {
			"nose": { "x": -20.76, "y": -5.83, "rotation": -90, "width": 36, "height": 40 }
		},
		"scull": {
			"scull": { "x": -7.85, "y": 10, "rotation": 90, "width": 96, "height": 96 }
		},
		"shin_l": {
			"leg2_2": { "x": 45.92, "rotation": 90, "width": 32, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 93.07, -15.5, 93.07, 15.24, 0.08, 15.24, 0.08, -15.5 ]
			}
		},
		"shin_r": {
			"leg1_2": { "x": 45.92, "rotation": 90, "width": 32, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ -0.66, 15.49, -0.66, -15.16, 93.05, -15.16, 93.05, 15.12 ]
			}
		},
		"thigh_l": {
			"leg2_1": { "x": 46.59, "rotation": 90, "width": 32, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 92.21, -14.99, 92.21, 15.31, -15.11, 14.95, -15.11, -14.99 ]
			}
		},
		"thigh_r": {
			"leg1_1": { "x": 46.59, "rotation": 90, "width": 32, "height": 128 },
			"ragdoll": {
				"type": "boundingbox",
				"vertexCount": 4,
				"vertices": [ 93.32, -15.34, 93.32, 15.16, -14.98, 15.16, -14.98, -15.34 ]
			}
		}
	}
},
"events": {
	"Death_End": {},
	"Draw_End": {},
	"Got_up": {},
	"Jump": {},
	"Shot_End": {},
	"Spawn_End": {},
	"Weapon_Visible": {}
},
"animations": {
	"aim": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"scull": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
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
		},
		"ik": {
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
			],
			"hand_l": [
				{ "time": 0, "mix": 0 }
			]
		}
	},
	"death_by_shock": {
		"slots": {
			"arm_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"arm_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"body": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"eyes": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"foot_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"foot_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"forearm_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"forearm_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"hair": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"hand_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"hand_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"mouth": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				],
				"attachment": [
					{ "time": 0, "name": "mouth_3" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"scull": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"shin_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"shin_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"thigh_l": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			},
			"thigh_r": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 0.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 0.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 1, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.1, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.3, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.4, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.5, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.6, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.7, "color": "000000ff", "curve": "stepped" },
					{ "time": 1.8, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9, "color": "000000ff", "curve": "stepped" },
					{ "time": 2, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "000000ff" }
				]
			}
		},
		"bones": {
			"weapon": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"body": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.0667,
						"x": 0,
						"y": 5,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.1333,
						"x": 0,
						"y": -5,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.2,
						"x": 0,
						"y": 5,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.2667,
						"x": 0,
						"y": -5,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.3333,
						"x": 0,
						"y": 10,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.4,
						"x": 0,
						"y": -10,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.4667,
						"x": 0,
						"y": 10,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.5333,
						"x": 0,
						"y": -15,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.6,
						"x": 0,
						"y": 25,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.6667,
						"x": 0,
						"y": -15,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.7333,
						"x": 0,
						"y": 25,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.8,
						"x": 0,
						"y": -20,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.8667,
						"x": 0,
						"y": 20,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 0.9333,
						"x": 0,
						"y": -20,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1,
						"x": 0,
						"y": 20,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.0667,
						"x": 0,
						"y": -30,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.1333,
						"x": 0,
						"y": 30,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.2,
						"x": 0,
						"y": -40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.2667,
						"x": 0,
						"y": 40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.3333,
						"x": 0,
						"y": -40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.4,
						"x": 0,
						"y": 40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.4667,
						"x": 0,
						"y": -40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.5333,
						"x": 0,
						"y": 40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.6,
						"x": 0,
						"y": -40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.6667,
						"x": 0,
						"y": 40,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.7333,
						"x": 0,
						"y": -50,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.8,
						"x": 0,
						"y": 50,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.8667,
						"x": 0,
						"y": -50,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 1.9333,
						"x": 0,
						"y": 50,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{
						"time": 2,
						"x": 0,
						"y": -50,
						"curve": [ 0.692, 0, 0.31, 1 ]
					},
					{ "time": 2.0667, "x": 0, "y": 50, "curve": "stepped" },
					{ "time": 2.2333, "x": 0, "y": 50 }
				]
			},
			"head": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1, "angle": 1, "curve": "stepped" },
					{ "time": 0.2, "angle": -1, "curve": "stepped" },
					{ "time": 0.3, "angle": 2, "curve": "stepped" },
					{ "time": 0.4, "angle": -2, "curve": "stepped" },
					{ "time": 0.5, "angle": 3, "curve": "stepped" },
					{ "time": 0.6, "angle": -3, "curve": "stepped" },
					{ "time": 0.7, "angle": 4, "curve": "stepped" },
					{ "time": 0.8, "angle": -4, "curve": "stepped" },
					{ "time": 0.9, "angle": 5, "curve": "stepped" },
					{ "time": 1, "angle": -5, "curve": "stepped" },
					{ "time": 1.1, "angle": 5, "curve": "stepped" },
					{ "time": 1.2, "angle": -5, "curve": "stepped" },
					{ "time": 1.3, "angle": 5, "curve": "stepped" },
					{ "time": 1.4, "angle": -5, "curve": "stepped" },
					{ "time": 1.5, "angle": 5, "curve": "stepped" },
					{ "time": 1.6, "angle": -5, "curve": "stepped" },
					{ "time": 1.7, "angle": 5, "curve": "stepped" },
					{ "time": 1.8, "angle": -5, "curve": "stepped" },
					{ "time": 1.9, "angle": 5, "curve": "stepped" },
					{ "time": 2, "angle": -5 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1333, "angle": 355, "curve": "stepped" },
					{ "time": 0.2667, "angle": 360, "curve": "stepped" },
					{ "time": 0.4, "angle": 350, "curve": "stepped" },
					{ "time": 0.5333, "angle": 355, "curve": "stepped" },
					{ "time": 0.6667, "angle": 345, "curve": "stepped" },
					{ "time": 0.8, "angle": 350, "curve": "stepped" },
					{ "time": 0.9333, "angle": 340, "curve": "stepped" },
					{ "time": 1.0667, "angle": 345, "curve": "stepped" },
					{ "time": 1.2, "angle": 335, "curve": "stepped" },
					{ "time": 1.3333, "angle": 340, "curve": "stepped" },
					{ "time": 1.4667, "angle": 330, "curve": "stepped" },
					{ "time": 1.6, "angle": 335, "curve": "stepped" },
					{ "time": 1.7333, "angle": 325, "curve": "stepped" },
					{ "time": 1.8667, "angle": 330, "curve": "stepped" },
					{ "time": 2, "angle": 320 }
				]
			},
			"arm_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1333, "angle": 365, "curve": "stepped" },
					{ "time": 0.2667, "angle": 360, "curve": "stepped" },
					{ "time": 0.4, "angle": 370, "curve": "stepped" },
					{ "time": 0.5333, "angle": 365, "curve": "stepped" },
					{ "time": 0.6667, "angle": 375, "curve": "stepped" },
					{ "time": 0.8, "angle": 370, "curve": "stepped" },
					{ "time": 0.9333, "angle": 380, "curve": "stepped" },
					{ "time": 1.0667, "angle": 375, "curve": "stepped" },
					{ "time": 1.2, "angle": 385, "curve": "stepped" },
					{ "time": 1.3333, "angle": 380, "curve": "stepped" },
					{ "time": 1.4667, "angle": 390, "curve": "stepped" },
					{ "time": 1.6, "angle": 385, "curve": "stepped" },
					{ "time": 1.7333, "angle": 395, "curve": "stepped" },
					{ "time": 1.8667, "angle": 390, "curve": "stepped" },
					{ "time": 2, "angle": 400 }
				]
			},
			"forearm_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1667, "angle": -10, "curve": "stepped" },
					{ "time": 0.3333, "angle": -5, "curve": "stepped" },
					{ "time": 0.5, "angle": -20, "curve": "stepped" },
					{ "time": 0.6667, "angle": -10, "curve": "stepped" },
					{ "time": 0.8333, "angle": -30, "curve": "stepped" },
					{ "time": 1, "angle": -20, "curve": "stepped" },
					{ "time": 1.1667, "angle": -40, "curve": "stepped" },
					{ "time": 1.3333, "angle": -30, "curve": "stepped" },
					{ "time": 1.5, "angle": -50, "curve": "stepped" },
					{ "time": 1.6667, "angle": -40, "curve": "stepped" },
					{ "time": 1.8333, "angle": -60, "curve": "stepped" },
					{ "time": 2, "angle": -50 }
				]
			},
			"forearm_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1667, "angle": 10, "curve": "stepped" },
					{ "time": 0.3333, "angle": 5, "curve": "stepped" },
					{ "time": 0.5, "angle": 20, "curve": "stepped" },
					{ "time": 0.6667, "angle": 10, "curve": "stepped" },
					{ "time": 0.8333, "angle": 30, "curve": "stepped" },
					{ "time": 1, "angle": 20, "curve": "stepped" },
					{ "time": 1.1667, "angle": 40, "curve": "stepped" },
					{ "time": 1.3333, "angle": 30, "curve": "stepped" },
					{ "time": 1.5, "angle": 50, "curve": "stepped" },
					{ "time": 1.6667, "angle": 40, "curve": "stepped" },
					{ "time": 1.8333, "angle": 60, "curve": "stepped" },
					{ "time": 2, "angle": 50 }
				]
			},
			"hand_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1667, "angle": 10, "curve": "stepped" },
					{ "time": 0.3333, "angle": -10, "curve": "stepped" },
					{ "time": 0.5, "angle": 20, "curve": "stepped" },
					{ "time": 0.6667, "angle": -20, "curve": "stepped" },
					{ "time": 0.8333, "angle": 30, "curve": "stepped" },
					{ "time": 1, "angle": -30, "curve": "stepped" },
					{ "time": 1.1667, "angle": 40, "curve": "stepped" },
					{ "time": 1.3333, "angle": -40, "curve": "stepped" },
					{ "time": 1.5, "angle": 50, "curve": "stepped" },
					{ "time": 1.6667, "angle": -50, "curve": "stepped" },
					{ "time": 1.8333, "angle": 60, "curve": "stepped" },
					{ "time": 2, "angle": -60 }
				]
			},
			"hand_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.1667, "angle": 10, "curve": "stepped" },
					{ "time": 0.3333, "angle": -10, "curve": "stepped" },
					{ "time": 0.5, "angle": 20, "curve": "stepped" },
					{ "time": 0.6667, "angle": -20, "curve": "stepped" },
					{ "time": 0.8333, "angle": 30, "curve": "stepped" },
					{ "time": 1, "angle": -30, "curve": "stepped" },
					{ "time": 1.1667, "angle": 40, "curve": "stepped" },
					{ "time": 1.3333, "angle": -40, "curve": "stepped" },
					{ "time": 1.5, "angle": 50, "curve": "stepped" },
					{ "time": 1.6667, "angle": -50, "curve": "stepped" },
					{ "time": 1.8333, "angle": 60, "curve": "stepped" },
					{ "time": 2, "angle": -60 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
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
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"root_child": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{
					"time": 0,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.1667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.3333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.5,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.1667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.3333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.5,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.6667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.8333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{ "time": 2 }
			],
			"foot_r": [
				{
					"time": 0,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.1667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.3333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.5,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.6667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 0.8333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.1667,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.3333,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.5,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.6667,
					"bendPositive": false,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{
					"time": 1.8333,
					"curve": [ 0.25, 0, 0.75, 1 ]
				},
				{ "time": 2, "bendPositive": false }
			],
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
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
			{ "time": 0.2 },
			{ "time": 0.4 },
			{ "time": 0.6 },
			{ "time": 0.8 },
			{ "time": 1 },
			{ "time": 1.2 },
			{ "time": 1.4 },
			{ "time": 1.6 },
			{ "time": 1.8 },
			{ "time": 2 }
		],
		"events": [
			{ "time": 2.2333, "name": "Death_End" }
		]
	},
	"default": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"mouth": {
				"attachment": [
					{ "time": 0, "name": "mouth_3" }
				]
			},
			"scull": {
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
			"mouth": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
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
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"arm_r": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"forearm_r": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"hand_r": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"arm_l": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"forearm_l": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"hand_l": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"body": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"head": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
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
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
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
	"fall": {
		"slots": {
			"eyes": {
				"attachment": [
					{ "time": 0, "name": "eyes_1" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9333, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "ffffffff" }
				]
			},
			"nose": {
				"color": [
					{ "time": 0, "color": "ffffffff", "curve": "stepped" },
					{ "time": 1.9333, "color": "ffffffff", "curve": "stepped" },
					{ "time": 2.0667, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 0,
						"curve": [ 0.176, 0.22, 0.752, 1 ]
					},
					{
						"time": 0.0333,
						"angle": -38.16,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0667, "angle": -90.76 },
					{ "time": 0.1, "angle": -131.42 },
					{ "time": 0.1333, "angle": -191.73 },
					{ "time": 0.1667, "angle": 71.3 },
					{ "time": 0.3, "angle": 49.49 },
					{ "time": 0.3333, "angle": 4.62 },
					{ "time": 0.4, "angle": 0.23 },
					{
						"time": 0.5,
						"angle": -3.83,
						"curve": [ 0.25, 0, 0.664, 1 ]
					},
					{
						"time": 0.6667,
						"angle": 2.1,
						"curve": [ 0.244, 0, 0.693, 1 ]
					},
					{
						"time": 0.9,
						"angle": -1.48,
						"curve": [ 0.398, 0, 0.705, 1 ]
					},
					{ "time": 1.1, "angle": 2.82, "curve": "stepped" },
					{ "time": 1.3667, "angle": 2.82 },
					{ "time": 1.8333, "angle": 0.33, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0.33, "curve": "stepped" },
					{ "time": 1.9, "angle": 0.33 },
					{ "time": 1.9333, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": -1,
						"curve": [ 0.539, 0, 0.75, 1 ]
					},
					{ "time": 0.0333, "x": -95.04, "y": 17.53, "curve": "stepped" },
					{ "time": 0.0667, "x": -93.45, "y": 158.03 },
					{ "time": 0.1, "x": -129.3, "y": 224.42 },
					{ "time": 0.1333, "x": -176.45, "y": 237.63 },
					{ "time": 0.1667, "x": -175.12, "y": 228.54 },
					{ "time": 0.3, "x": -236.82, "y": 236.78 },
					{ "time": 0.3333, "x": -274.1, "y": -167.85 },
					{ "time": 0.3667, "x": -278.77, "y": -170.84 },
					{ "time": 1.6, "x": -277.34, "y": -164.95 },
					{ "time": 1.6333, "x": -280.5, "y": -172.52 },
					{ "time": 1.6667, "x": -19.94, "y": 362.4 },
					{ "time": 1.8333, "x": -19.94, "y": 405.68, "curve": "stepped" },
					{ "time": 1.8667, "x": -19.94, "y": 405.68 },
					{ "time": 1.9, "x": -19.94, "y": 57.59 },
					{
						"time": 1.9333,
						"x": 0,
						"y": -74.18,
						"curve": [ 0.539, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "x": 0, "y": -1 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 0.3, "x": 1, "y": 1 },
					{ "time": 0.3667, "x": 0.923, "y": 1.139 },
					{ "time": 0.4333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"head": {
				"rotate": [
					{ "time": 0, "angle": -0.39 },
					{ "time": 0.0333, "angle": -28.72, "curve": "stepped" },
					{ "time": 0.1667, "angle": -43.7 },
					{ "time": 0.2333, "angle": -50.31 },
					{ "time": 0.3, "angle": -33.75 },
					{ "time": 0.3333, "angle": -15.78 },
					{ "time": 0.3667, "angle": 0.36 },
					{
						"time": 0.5333,
						"angle": 5,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": -9.47,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"angle": 2.79,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 1.1,
						"angle": -2.8,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.4667, "angle": 0.62 },
					{ "time": 1.8333, "angle": -0.24, "curve": "stepped" },
					{ "time": 1.8667, "angle": -0.24, "curve": "stepped" },
					{ "time": 1.9, "angle": -0.24 },
					{ "time": 1.9333, "angle": -0.39, "curve": "stepped" },
					{ "time": 2.0667, "angle": -0.39 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 },
					{ "time": 0.0333, "x": 8.07, "y": 39.72 },
					{ "time": 0.3333, "x": 10.13, "y": 14.91 },
					{ "time": 0.3667, "x": -74.79, "y": 15.25 },
					{ "time": 0.4333, "x": 3.93, "y": 7.21 },
					{ "time": 0.4667, "x": 22.45, "y": 7.14 },
					{ "time": 0.5333, "x": -0.71, "y": 7.23, "curve": "stepped" },
					{ "time": 1.4667, "x": -0.71, "y": 7.23 },
					{ "time": 1.5333, "x": -67.54, "y": 1.29 },
					{ "time": 1.5667, "x": -108.91, "y": 2.59 },
					{ "time": 1.6333, "x": -67.54, "y": 1.29 },
					{ "time": 1.6667, "x": -13.04, "y": -1.4, "curve": "stepped" },
					{ "time": 1.8333, "x": -13.04, "y": -1.4, "curve": "stepped" },
					{ "time": 1.8667, "x": -13.04, "y": -1.4, "curve": "stepped" },
					{ "time": 1.9, "x": -13.04, "y": -1.4 },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_ik_l": {
				"rotate": [
					{ "time": 0.1, "angle": -2.79, "curve": "stepped" },
					{ "time": 0.1333, "angle": -2.79 },
					{ "time": 0.1667, "angle": -5.49 },
					{ "time": 1.3667, "angle": -2.79 },
					{ "time": 1.7, "angle": 115.9 },
					{ "time": 1.8333, "angle": 116.74 },
					{ "time": 1.8667, "angle": -2.79, "curve": "stepped" },
					{ "time": 1.9, "angle": -2.79, "curve": "stepped" },
					{ "time": 2.0667, "angle": -2.79 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0333, "x": 49.24, "y": 110.03, "curve": "stepped" },
					{ "time": 0.0667, "x": -75.73, "y": 163.01 },
					{ "time": 0.1, "x": -388.66, "y": 356.71 },
					{ "time": 0.1333, "x": -390.46, "y": 556.62 },
					{ "time": 0.1667, "x": 18.78, "y": 524.43 },
					{ "time": 0.2333, "x": 178.38, "y": 524.14 },
					{ "time": 0.3, "x": 15.03, "y": 481.73 },
					{ "time": 0.3333, "x": -86.16, "y": 142.06 },
					{ "time": 0.3667, "x": -68.88, "y": 1.54 },
					{ "time": 0.4667, "x": -68.8, "y": 1.54 },
					{
						"time": 1.3667,
						"x": -66.33,
						"y": 1.54,
						"curve": [ 0.244, 0, 0.641, 0.57 ]
					},
					{
						"time": 1.5333,
						"x": -88.88,
						"y": 3,
						"curve": [ 0.359, 0.43, 0.702, 0.8 ]
					},
					{
						"time": 1.6,
						"x": -183.07,
						"y": 0.2,
						"curve": [ 0.364, 0.64, 0.701, 1 ]
					},
					{ "time": 1.6333, "x": -177.46, "y": 10.98 },
					{ "time": 1.6667, "x": -22.93, "y": 325.1 },
					{ "time": 1.7, "x": 155.36, "y": 480.9 },
					{ "time": 1.8333, "x": 172.77, "y": 552.57 },
					{ "time": 1.8667, "x": 174.87, "y": 544.24 },
					{ "time": 1.9, "x": -28.52, "y": 164.58 },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_ik_r": {
				"rotate": [
					{ "time": 0.1, "angle": -2.99, "curve": "stepped" },
					{ "time": 0.1333, "angle": -2.99, "curve": "stepped" },
					{ "time": 1.3667, "angle": -2.99, "curve": "stepped" },
					{ "time": 1.8333, "angle": -2.99, "curve": "stepped" },
					{ "time": 1.8667, "angle": -2.99, "curve": "stepped" },
					{ "time": 1.9, "angle": -2.99, "curve": "stepped" },
					{ "time": 2.0667, "angle": -2.99 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0333, "x": -9.38, "y": 53.01, "curve": "stepped" },
					{ "time": 0.0667, "x": -173.16, "y": 230.36 },
					{ "time": 0.1, "x": -281.82, "y": 568.24 },
					{ "time": 0.1333, "x": -186.73, "y": 628.03 },
					{ "time": 0.1667, "x": 53.15, "y": 405.14 },
					{ "time": 0.2333, "x": 223.15, "y": 419.15 },
					{ "time": 0.3, "x": 9.39, "y": 381.37 },
					{ "time": 0.3333, "x": -83.14, "y": 48.14 },
					{ "time": 0.3667, "x": -96.67, "y": 1.54 },
					{ "time": 0.4667, "x": -97.8, "y": 2.75 },
					{
						"time": 1.3667,
						"x": -71.73,
						"y": 1.54,
						"curve": [ 0.244, 0, 0.641, 0.57 ]
					},
					{
						"time": 1.5333,
						"x": -112.71,
						"y": 3.34,
						"curve": [ 0.343, 0.37, 0.679, 0.71 ]
					},
					{
						"time": 1.5667,
						"x": -118.95,
						"y": -8.09,
						"curve": [ 0.352, 0.41, 0.688, 0.76 ]
					},
					{
						"time": 1.6,
						"x": -183.96,
						"y": 0.2,
						"curve": [ 0.364, 0.64, 0.701, 1 ]
					},
					{ "time": 1.6333, "x": -162.48, "y": 9.77 },
					{ "time": 1.6667, "x": -2.45, "y": 327.72 },
					{ "time": 1.7, "x": 57.58, "y": 396.52 },
					{ "time": 1.8333, "x": -7.73, "y": 468.09 },
					{ "time": 1.8667, "x": -8.17, "y": 455.9 },
					{ "time": 1.9, "x": -4.33, "y": 26.67 },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"toes_r": {
				"rotate": [
					{ "time": 0.3667, "angle": -5.75, "curve": "stepped" },
					{ "time": 1.3667, "angle": -5.75 },
					{ "time": 1.6667, "angle": 26.52 },
					{ "time": 1.8333, "angle": -5.75, "curve": "stepped" },
					{ "time": 1.8667, "angle": -5.75, "curve": "stepped" },
					{ "time": 1.9, "angle": -5.75, "curve": "stepped" },
					{ "time": 2.0667, "angle": -5.75 }
				],
				"translate": [
					{
						"time": 0,
						"x": 1.21,
						"y": -3.62,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0333, "x": -2.48, "y": 16.85, "curve": "stepped" },
					{ "time": 0.0667, "x": -25.64, "y": -24.5 },
					{ "time": 0.1, "x": -65.92, "y": -39.83 },
					{ "time": 0.1333, "x": -63.59, "y": 8.57 },
					{ "time": 0.1667, "x": -26.93, "y": 38.22 },
					{ "time": 0.3333, "x": -21.29, "y": 28.2 },
					{ "time": 0.3667, "x": 1.19, "y": 37.84, "curve": "stepped" },
					{ "time": 1.3667, "x": 1.19, "y": 37.84 },
					{ "time": 1.5333, "x": -22.37, "y": 25.73 },
					{ "time": 1.5667, "x": 1.19, "y": 37.84 },
					{ "time": 1.6333, "x": -16.79, "y": 24.05 },
					{ "time": 1.6667, "x": -16.19, "y": -12.38 },
					{ "time": 1.8333, "x": -42.05, "y": -34.41 },
					{ "time": 1.8667, "x": -26.56, "y": -29.11 },
					{ "time": 1.9, "x": -30.66, "y": -23.35 },
					{
						"time": 1.9333,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "x": 1.21, "y": -3.62 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"toes_l": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{
						"time": 0,
						"x": 0,
						"y": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0333, "x": -16.04, "y": 30.54, "curve": "stepped" },
					{ "time": 0.0667, "x": -4.63, "y": -8.94 },
					{ "time": 0.1, "x": -54.04, "y": -49.41 },
					{ "time": 0.1333, "x": -65.46, "y": -8.42 },
					{ "time": 0.1667, "x": -42.43, "y": 43.89 },
					{ "time": 0.3333, "x": -33.09, "y": 45.84 },
					{ "time": 0.3667, "x": -9.26, "y": 37.06, "curve": "stepped" },
					{ "time": 1.3667, "x": -9.26, "y": 37.06 },
					{ "time": 1.5333, "x": 1.3, "y": -0.85 },
					{ "time": 1.6, "x": -21.61, "y": -26.09 },
					{ "time": 1.6333, "x": -17.44, "y": -19.45 },
					{
						"time": 1.6667,
						"x": -56.22,
						"y": -24.22,
						"curve": [ 0.255, 0.33, 0.75, 1 ]
					},
					{ "time": 1.8333, "x": -28.65, "y": -45.27 },
					{ "time": 1.8667, "x": -14.36, "y": 31.94 },
					{ "time": 1.9, "x": -40.94, "y": -38.39 },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"mouth": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 0.0333, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 1.3667, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 1.9333, "x": 0.85, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 0.85, "y": 1 }
				]
			},
			"eyes": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"hand_ik_r": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
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
						"time": 0.0333,
						"angle": 184.85,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0667, "angle": 189.65 },
					{ "time": 0.1333, "angle": 187.34 },
					{ "time": 0.1667, "angle": 153.42 },
					{ "time": 0.2333, "angle": 133.95 },
					{ "time": 0.3, "angle": 144.13 },
					{ "time": 0.3333, "angle": 163.61 },
					{ "time": 0.3667, "angle": 154.65 },
					{ "time": 0.4333, "angle": 210.82 },
					{ "time": 0.6, "angle": 359.67 },
					{ "time": 0.6333, "angle": 354.57 },
					{ "time": 0.6667, "angle": 341.53 },
					{ "time": 0.9, "angle": 348.15, "curve": "stepped" },
					{ "time": 1.4667, "angle": 348.15 },
					{
						"time": 1.5,
						"angle": 292.89,
						"curve": [ 0.344, 0.37, 0.704, 0.79 ]
					},
					{
						"time": 1.5333,
						"angle": 277.49,
						"curve": [ 0.356, 0.47, 0.692, 0.82 ]
					},
					{
						"time": 1.6,
						"angle": 282.74,
						"curve": [ 0.35, 0.65, 0.684, 1 ]
					},
					{
						"time": 1.6333,
						"angle": 277.49,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 1.6667, "angle": 6.04 },
					{ "time": 1.7, "angle": 298.67 },
					{ "time": 1.8333, "angle": 274.42 },
					{ "time": 1.8667, "angle": 280.52 },
					{ "time": 1.9, "angle": 239.14 },
					{
						"time": 1.9333,
						"angle": 233.93,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "angle": 360 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 },
					{ "time": 0.0333, "x": 76.05, "y": -16.83 },
					{ "time": 0.0667, "x": 75.91, "y": -16.63 },
					{ "time": 0.1667, "x": 75.5, "y": -16.05 },
					{ "time": 0.2333, "x": 75.22, "y": -15.66 },
					{ "time": 0.3, "x": 74.95, "y": -15.27 },
					{ "time": 0.3333, "x": 74.81, "y": -15.08 },
					{ "time": 0.3667, "x": 74.91, "y": 11.17 },
					{ "time": 0.4333, "x": 59.54, "y": 28.21 },
					{ "time": 0.6, "x": 30.14, "y": 11.35, "curve": "stepped" },
					{ "time": 0.6333, "x": 30.14, "y": 11.35, "curve": "stepped" },
					{ "time": 0.6667, "x": 30.14, "y": 11.35, "curve": "stepped" },
					{ "time": 0.9, "x": 30.14, "y": 11.35, "curve": "stepped" },
					{
						"time": 1.4667,
						"x": 30.14,
						"y": 11.35,
						"curve": [ 0.256, 0, 0.619, 0.46 ]
					},
					{
						"time": 1.5,
						"x": 3.17,
						"y": 21.19,
						"curve": [ 0.344, 0.37, 0.704, 0.79 ]
					},
					{ "time": 1.5333, "x": -31.52, "y": 33.86, "curve": "stepped" },
					{
						"time": 1.6333,
						"x": -31.52,
						"y": 33.86,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 1.6667, "x": -10.46, "y": 2.68, "curve": "stepped" },
					{ "time": 1.7, "x": -10.46, "y": 2.68, "curve": "stepped" },
					{ "time": 1.8333, "x": -10.46, "y": 2.68, "curve": "stepped" },
					{ "time": 1.8667, "x": -10.46, "y": 2.68, "curve": "stepped" },
					{ "time": 1.9, "x": -10.46, "y": 2.68 },
					{ "time": 1.9333, "x": -2.48, "y": -2.48 },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 0.04,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.0333,
						"angle": 125.47,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.1667, "angle": 94.47 },
					{ "time": 0.2333, "angle": 104.3 },
					{ "time": 0.3, "angle": 128.84 },
					{ "time": 0.3333, "angle": 144.66 },
					{ "time": 0.3667, "angle": 211.52 },
					{ "time": 0.4333, "angle": 150.03 },
					{ "time": 0.6, "angle": 5.12 },
					{ "time": 0.6667, "angle": 14.92 },
					{ "time": 0.9, "angle": 15.31 },
					{ "time": 1.1333, "angle": 12.92 },
					{ "time": 1.4667, "angle": 15.31 },
					{
						"time": 1.5,
						"angle": 62.71,
						"curve": [ 0.375, 0.5, 0.75, 1 ]
					},
					{ "time": 1.5333, "angle": 86.54 },
					{ "time": 1.6, "angle": 85.01 },
					{ "time": 1.6333, "angle": 95.4 },
					{ "time": 1.6667, "angle": 351.44 },
					{ "time": 1.7, "angle": 67.05 },
					{ "time": 1.8333, "angle": 71.8 },
					{ "time": 1.8667, "angle": 63.32 },
					{ "time": 1.9, "angle": 121.77 },
					{
						"time": 1.9333,
						"angle": 117.83,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "angle": 54.49 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 },
					{ "time": 0.0333, "x": 58.47, "y": -9.22 },
					{ "time": 0.1667, "x": 41.43, "y": -15.26 },
					{ "time": 0.2333, "x": 63.88, "y": -32.72 },
					{ "time": 0.3, "x": 70.93, "y": -27.33 },
					{ "time": 0.3333, "x": 49.92, "y": -17.18 },
					{ "time": 0.3667, "x": 76.06, "y": -10.74 },
					{ "time": 0.4333, "x": 49.66, "y": -11.33 },
					{ "time": 0.6, "x": 35.86, "y": -26.02, "curve": "stepped" },
					{ "time": 0.6667, "x": 35.86, "y": -26.02, "curve": "stepped" },
					{
						"time": 0.9,
						"x": 35.86,
						"y": -26.02,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.1333, "x": 27.83, "y": -25.8 },
					{ "time": 1.4667, "x": 19.8, "y": -25.38 },
					{ "time": 1.5333, "x": -37.1, "y": -30.02 },
					{ "time": 1.6333, "x": -39.59, "y": -32.36 },
					{ "time": 1.6667, "x": -8.97, "y": -22.56, "curve": "stepped" },
					{ "time": 1.8333, "x": -8.97, "y": -22.56, "curve": "stepped" },
					{ "time": 1.8667, "x": -8.97, "y": -22.56, "curve": "stepped" },
					{ "time": 1.9, "x": -8.97, "y": -22.56 },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
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
						"time": 0.0333,
						"angle": -26.59,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0667, "angle": -3.88 },
					{ "time": 0.3667, "angle": -25.86 },
					{ "time": 0.4333, "angle": -2.81 },
					{ "time": 0.6, "angle": -20.52 },
					{ "time": 0.6333, "angle": -29.94 },
					{ "time": 0.6667, "angle": -5.69 },
					{ "time": 0.9, "angle": -13.67 },
					{ "time": 1.1, "angle": -25.54 },
					{
						"time": 1.4667,
						"angle": -23.23,
						"curve": [ 0.256, 0, 0.619, 0.46 ]
					},
					{
						"time": 1.5,
						"angle": 72.68,
						"curve": [ 0.344, 0.37, 0.704, 0.79 ]
					},
					{
						"time": 1.5333,
						"angle": 104.29,
						"curve": [ 0.356, 0.47, 0.692, 0.82 ]
					},
					{
						"time": 1.6,
						"angle": 110.48,
						"curve": [ 0.35, 0.65, 0.684, 1 ]
					},
					{
						"time": 1.6333,
						"angle": 119.64,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 1.6667, "angle": -2.11 },
					{ "time": 1.7, "angle": 66.7 },
					{ "time": 1.8333, "angle": 103.14, "curve": "stepped" },
					{ "time": 1.8667, "angle": 103.14 },
					{ "time": 1.9, "angle": -0.53 },
					{
						"time": 1.9333,
						"angle": -34.85,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.4667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
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
						"time": 0.0333,
						"angle": -9.9,
						"curve": [ 0.254, 0, 0.621, 0.47 ]
					},
					{
						"time": 0.1667,
						"angle": 10.09,
						"curve": [ 0.369, 0.47, 0.753, 1 ]
					},
					{ "time": 0.3333, "angle": -0.22 },
					{ "time": 0.3667, "angle": 23.99 },
					{ "time": 0.4333, "angle": 2.97 },
					{ "time": 0.6, "angle": -6.04 },
					{ "time": 0.6667, "angle": 0.17, "curve": "stepped" },
					{
						"time": 1.4667,
						"angle": 0.17,
						"curve": [ 0.256, 0, 0.619, 0.46 ]
					},
					{
						"time": 1.5,
						"angle": -74.7,
						"curve": [ 0.344, 0.37, 0.704, 0.79 ]
					},
					{
						"time": 1.5333,
						"angle": -77.23,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 1.5667, "angle": -110.86 },
					{ "time": 1.6, "angle": -104.3 },
					{
						"time": 1.6333,
						"angle": -92.92,
						"curve": [ 0.371, 0.62, 0.71, 1 ]
					},
					{ "time": 1.6667, "angle": 2.29 },
					{ "time": 1.7, "angle": 50.31 },
					{ "time": 1.8333, "angle": 27.37 },
					{ "time": 1.8667, "angle": 0.57, "curve": "stepped" },
					{ "time": 1.9, "angle": 0.57 },
					{
						"time": 1.9333,
						"angle": 48.43,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 2.0667, "angle": 30.78 }
				],
				"translate": [
					{ "time": 1.4667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"hand_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{
						"time": 0.0333,
						"angle": 0,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.0667, "angle": -16.97 },
					{ "time": 0.3333, "angle": 1.56, "curve": "stepped" },
					{ "time": 0.3667, "angle": 1.56, "curve": "stepped" },
					{ "time": 1.4667, "angle": 1.56 },
					{ "time": 1.8333, "angle": 0.22, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0.22, "curve": "stepped" },
					{ "time": 1.9, "angle": 0.22 },
					{ "time": 1.9333, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.4667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"hand_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.0333, "angle": 0, "curve": "stepped" },
					{ "time": 1.4667, "angle": 0 },
					{ "time": 1.7, "angle": -1.73 },
					{ "time": 1.8333, "angle": 32.13, "curve": "stepped" },
					{ "time": 1.8667, "angle": 32.13 },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 1.9333, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.4667, "x": 0, "y": 0 },
					{ "time": 1.7, "x": 1.63, "y": -0.46 },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.4667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.3, "angle": 0 },
					{ "time": 0.3333, "angle": 12.42 },
					{ "time": 0.4667, "angle": 7.18, "curve": "stepped" },
					{ "time": 1.3667, "angle": 7.18, "curve": "stepped" },
					{ "time": 1.8333, "angle": 7.18, "curve": "stepped" },
					{ "time": 1.8667, "angle": 7.18, "curve": "stepped" },
					{ "time": 1.9, "angle": 7.18 },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 0.0333, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 0.3, "x": -0.67, "y": 0 },
					{ "time": 0.3333, "x": 219.28, "y": 50.18 },
					{ "time": 0.3667, "x": 268.54, "y": -14.42 },
					{ "time": 0.4, "x": 152.59, "y": -12.79 },
					{ "time": 0.4667, "x": 1.33, "y": 0.13, "curve": "stepped" },
					{ "time": 1.3667, "x": 1.33, "y": 0.13 },
					{ "time": 1.8333, "x": -0.44, "y": 0.02, "curve": "stepped" },
					{ "time": 1.8667, "x": -0.44, "y": 0.02, "curve": "stepped" },
					{ "time": 1.9, "x": -0.44, "y": 0.02 },
					{ "time": 1.9333, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": -0.67, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 0.3, "angle": 0 },
					{ "time": 0.3333, "angle": 9.13 },
					{ "time": 0.3667, "angle": -7.38 },
					{ "time": 0.4667, "angle": -3.69, "curve": "stepped" },
					{ "time": 1.3667, "angle": -3.69, "curve": "stepped" },
					{ "time": 1.8333, "angle": -3.69, "curve": "stepped" },
					{ "time": 1.8667, "angle": -3.69, "curve": "stepped" },
					{ "time": 1.9, "angle": -3.69 },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 0.0333, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 0.3, "x": -0.67, "y": 0 },
					{ "time": 0.3333, "x": 228.81, "y": 40.25 },
					{ "time": 0.3667, "x": 271.77, "y": -23.93 },
					{ "time": 0.4, "x": 155.69, "y": -17.15 },
					{ "time": 0.4667, "x": 1.26, "y": 0.13, "curve": "stepped" },
					{ "time": 1.3667, "x": 1.26, "y": 0.13 },
					{ "time": 1.8333, "x": -0.44, "y": 0.02, "curve": "stepped" },
					{ "time": 1.8667, "x": -0.44, "y": 0.02, "curve": "stepped" },
					{ "time": 1.9, "x": -0.44, "y": 0.02 },
					{ "time": 1.9333, "x": -0.67, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": -0.67, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"root_child": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9333, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"root": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9333, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"thigh_l": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": -3.88, "y": -5.05 },
					{ "time": 0.0333, "x": 9.53, "y": 5.97 },
					{
						"time": 0.1333,
						"x": -0.47,
						"y": -6.58,
						"curve": [ 0.214, 0.33, 0.631, 1 ]
					},
					{ "time": 0.1667, "x": -17.76, "y": 0.75 },
					{ "time": 0.3333, "x": 21.37, "y": -19.22 },
					{ "time": 0.3667, "x": 1.76, "y": -25.14, "curve": "stepped" },
					{ "time": 1.3667, "x": 1.76, "y": -25.14 },
					{ "time": 1.6, "x": -13.97, "y": -12.1 },
					{ "time": 1.6333, "x": -7.68, "y": -7.68 },
					{ "time": 1.6667, "x": -26.83, "y": -5.05, "curve": "stepped" },
					{ "time": 1.8333, "x": -26.83, "y": -5.05, "curve": "stepped" },
					{ "time": 1.8667, "x": -26.83, "y": -5.05, "curve": "stepped" },
					{ "time": 1.9, "x": -26.83, "y": -5.05 },
					{ "time": 2.0667, "x": -3.88, "y": -5.05 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"thigh_r": {
				"rotate": [
					{ "time": 0, "angle": 0, "curve": "stepped" },
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": -4.77, "y": 0.21 },
					{ "time": 0.0333, "x": -2.83, "y": -5.97 },
					{ "time": 0.0667, "x": 5.44, "y": 5.29 },
					{
						"time": 0.1333,
						"x": -3.17,
						"y": 9.37,
						"curve": [ 0.214, 0.33, 0.631, 1 ]
					},
					{ "time": 0.3333, "x": 1.03, "y": 3.75 },
					{ "time": 0.3667, "x": -16.7, "y": 2.78 },
					{ "time": 0.4667, "x": -15.6, "y": 5.24 },
					{ "time": 1.3667, "x": -16.7, "y": 2.78 },
					{ "time": 1.5333, "x": -17.54, "y": 7.11 },
					{ "time": 1.6, "x": -10.69, "y": 6.23 },
					{ "time": 1.6333, "x": -7.17, "y": 9.44 },
					{ "time": 1.6667, "x": -27.73, "y": 0.21, "curve": "stepped" },
					{ "time": 1.8333, "x": -27.73, "y": 0.21, "curve": "stepped" },
					{ "time": 1.8667, "x": -27.73, "y": 0.21, "curve": "stepped" },
					{ "time": 1.9, "x": -27.73, "y": 0.21 },
					{ "time": 2.0667, "x": -4.77, "y": 0.21 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"hand_ik_l": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0.0333, "x": 0, "y": 3.62 },
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"shin_l": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"shin_r": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_dummy_l": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_dummy_r": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_l": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"foot_r": {
				"rotate": [
					{ "time": 1.3667, "angle": 0, "curve": "stepped" },
					{ "time": 1.8333, "angle": 0, "curve": "stepped" },
					{ "time": 1.8667, "angle": 0, "curve": "stepped" },
					{ "time": 1.9, "angle": 0, "curve": "stepped" },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 1.3667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8333, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.8667, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 1.9, "x": 0, "y": 0, "curve": "stepped" },
					{ "time": 2.0667, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 1.3667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"body_child": {
				"rotate": [
					{ "time": 0, "angle": 0 },
					{ "time": 0.3, "angle": -0.35 },
					{ "time": 1.5333, "angle": -1.8, "curve": "stepped" },
					{ "time": 1.6333, "angle": -1.8, "curve": "stepped" },
					{ "time": 1.8333, "angle": -1.8, "curve": "stepped" },
					{ "time": 1.8667, "angle": -1.8, "curve": "stepped" },
					{ "time": 1.9, "angle": -1.8 },
					{ "time": 2.0667, "angle": 0 }
				],
				"translate": [
					{ "time": 0, "x": 2.77, "y": 2.77 },
					{ "time": 1.5, "x": -13.16, "y": 0.5 },
					{ "time": 1.5333, "x": -18.95, "y": 0.99 },
					{ "time": 1.5667, "x": -23.65, "y": 1.16 },
					{ "time": 1.6, "x": -17.07, "y": 0.96 },
					{ "time": 1.6333, "x": -6.73, "y": 0.71 },
					{ "time": 1.8333, "x": -22.71, "y": 1.12, "curve": "stepped" },
					{ "time": 1.8667, "x": -22.71, "y": 1.12, "curve": "stepped" },
					{ "time": 1.9, "x": -22.71, "y": 1.12 },
					{ "time": 2.0667, "x": 2.77, "y": 2.77 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1, "curve": "stepped" },
					{
						"time": 1.4333,
						"x": 1,
						"y": 1,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1.5667, "x": 0.642, "y": 1.147 },
					{ "time": 1.6667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8333, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.8667, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 1.9, "x": 1, "y": 1, "curve": "stepped" },
					{ "time": 2.0667, "x": 1, "y": 1 }
				]
			},
			"hand_tip": {
				"translate": [
					{ "time": 0.1333, "x": 0, "y": -1.21 }
				]
			},
			"body_back": {
				"rotate": [
					{ "time": 0.3, "angle": 0 }
				],
				"translate": [
					{ "time": 0.3, "x": 0, "y": 0 },
					{ "time": 0.3333, "x": 90.04, "y": -7 },
					{ "time": 0.5, "x": 88.38, "y": 18.37, "curve": "stepped" },
					{ "time": 1.6333, "x": 88.38, "y": 18.37 },
					{ "time": 1.6667, "x": 0, "y": 0 }
				]
			}
		},
		"ik": {
			"foot_l": [
				{ "time": 0, "bendPositive": false, "curve": "stepped" },
				{ "time": 1.9333, "bendPositive": false, "curve": "stepped" },
				{ "time": 2.0667, "bendPositive": false }
			],
			"foot_r": [
				{ "time": 0, "bendPositive": false, "curve": "stepped" },
				{ "time": 1.9333, "bendPositive": false, "curve": "stepped" },
				{ "time": 2.0667, "bendPositive": false }
			],
			"hand_L_tip": [
				{ "time": 0, "mix": 0, "curve": "stepped" },
				{ "time": 2.0667, "mix": 0 }
			],
			"hand_l": [
				{ "time": 0, "mix": 0, "curve": "stepped" },
				{ "time": 2.0667, "mix": 0 }
			],
			"hand_r": [
				{ "time": 0, "mix": 0, "curve": "stepped" },
				{ "time": 1.9333, "mix": 0, "curve": "stepped" },
				{ "time": 2.0667, "mix": 0 }
			],
			"toes_l": [
				{ "time": 0, "curve": "stepped" },
				{ "time": 1.9333, "curve": "stepped" },
				{ "time": 2.0667 }
			],
			"toes_r": [
				{ "time": 0, "curve": "stepped" },
				{ "time": 1.9333, "curve": "stepped" },
				{ "time": 2.0667 }
			]
		},
		"drawOrder": [
			{
				"time": 0.3333,
				"offsets": [
					{ "slot": "foot_r", "offset": 1 }
				]
			},
			{
				"time": 0.4667,
				"offsets": [
					{ "slot": "body", "offset": -3 }
				]
			},
			{ "time": 1.6667 }
		],
		"events": [
			{ "time": 2.0667, "name": "Got_up" }
		]
	},
	"finish_him": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"scull": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"toes_l": {
				"translate": [
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
			"brow_r": {
				"rotate": [
					{ "time": 0, "angle": 5 }
				],
				"translate": [
					{ "time": 0, "x": 7.37, "y": -0.23 }
				]
			},
			"body": {
				"rotate": [
					{
						"time": 0,
						"angle": 4.32,
						"curve": [ 0.382, 0.57, 0.735, 1 ]
					},
					{
						"time": 0.1667,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.6667,
						"angle": -10,
						"curve": [ 0.243, 0, 0.649, 0.6 ]
					},
					{ "time": 1, "angle": 4.32 }
				],
				"translate": [
					{
						"time": 0,
						"x": -20,
						"y": -20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.5,
						"x": 20,
						"y": -20,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 1, "x": -20, "y": -20 }
				]
			},
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"mouth": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				],
				"scale": [
					{ "time": 0, "x": 1, "y": 1 }
				]
			},
			"hand_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 7.4,
						"curve": [ 0.32, 0.29, 0.757, 1 ]
					},
					{
						"time": 0.4,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.9,
						"angle": 10,
						"curve": [ 0.284, 0, 0.625, 0.38 ]
					},
					{ "time": 1, "angle": 7.4 }
				]
			},
			"brow_l": {
				"rotate": [
					{ "time": 0, "angle": -5 }
				],
				"translate": [
					{ "time": 0, "x": 7.11, "y": 0.25 }
				]
			},
			"head": {
				"rotate": [
					{
						"time": 0,
						"angle": -4.32,
						"curve": [ 0.351, 0.4, 0.757, 1 ]
					},
					{
						"time": 0.3333,
						"angle": 10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8333,
						"angle": -10,
						"curve": [ 0.351, 0.4, 0.757, 1 ]
					},
					{ "time": 1, "angle": -4.32 }
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"hand_ik_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"toes_r": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"foot_ik_r": {
				"translate": [
					{ "time": 0, "x": -25, "y": 0 }
				]
			},
			"arm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 1.76,
						"curve": [ 0.372, 0.48, 0.752, 1 ]
					},
					{
						"time": 0.2667,
						"angle": 340,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7667,
						"angle": 380,
						"curve": [ 0.252, 0, 0.622, 0.48 ]
					},
					{ "time": 1, "angle": 1.76 }
				]
			},
			"hand_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 5.95,
						"curve": [ 0.337, 0.35, 0.758, 1 ]
					},
					{
						"time": 0.3667,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8667,
						"angle": 10,
						"curve": [ 0.273, 0, 0.62, 0.41 ]
					},
					{ "time": 1, "angle": 5.95 }
				]
			},
			"weapon": {
				"scale": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"forearm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": 2.64,
						"curve": [ 0.363, 0.44, 0.755, 1 ]
					},
					{
						"time": 0.3,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8,
						"angle": 10,
						"curve": [ 0.258, 0, 0.619, 0.45 ]
					},
					{ "time": 1, "angle": 2.64 }
				]
			},
			"forearm_l": {
				"rotate": [
					{
						"time": 0,
						"angle": 4.32,
						"curve": [ 0.351, 0.4, 0.757, 1 ]
					},
					{
						"time": 0.3333,
						"angle": -10,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.8333,
						"angle": 10,
						"curve": [ 0.265, 0, 0.618, 0.43 ]
					},
					{ "time": 1, "angle": 4.32 }
				]
			},
			"arm_r": {
				"rotate": [
					{
						"time": 0,
						"angle": -1.76,
						"curve": [ 0.378, 0.52, 0.748, 1 ]
					},
					{
						"time": 0.2333,
						"angle": 340,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.7333,
						"angle": 380,
						"curve": [ 0.248, 0, 0.628, 0.52 ]
					},
					{ "time": 1, "angle": -1.76 }
				]
			},
			"hat": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
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
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
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
	"grenade_draw": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"scull": {
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
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
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
					{ "time": 0.2, "x": -6.72, "y": -2.2 }
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
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
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
			"hand_L_tip": [
				{ "time": 0, "mix": 0.003 }
			],
			"hand_l": [
				{ "time": 0, "mix": 0.003 }
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
		],
		"events": [
			{ "time": 0.1667, "name": "Weapon_Visible" },
			{ "time": 0.4667, "name": "Draw_End" }
		]
	},
	"grenade_shot": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"scull": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			}
		},
		"bones": {
			"mouth": {
				"translate": [
					{
						"time": 0,
						"x": -5.59,
						"y": 0.09,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{
						"time": 0.1667,
						"x": 2.18,
						"y": -47.6,
						"curve": [ 0.25, 0, 0.087, 1 ]
					},
					{
						"time": 0.4,
						"x": -4.73,
						"y": -50.15,
						"curve": [ 0.25, 0, 0.75, 1 ]
					},
					{ "time": 0.6, "x": -8.37, "y": 0.71 }
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
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
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
			"hand_ik_l": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root_child": {
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
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
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
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
		],
		"events": [
			{ "time": 0.1667, "name": "Shot_End" }
		]
	},
	"idle_apple": {
		"slots": {
			"body_back": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"head": {
				"color": [
					{ "time": 0, "color": "ffffffff" }
				]
			},
			"scull": {
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
				],
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
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
				"translate": [
					{ "time": 0, "x": 0, "y": 0 }
				]
			},
			"root": {
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
			"hand_L_tip": [
				{ "time": 0, "mix": 0 }
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
	}
}
}