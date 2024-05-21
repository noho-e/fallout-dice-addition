Hooks.on('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "fallout-additions", name: "Fallout Additions" }, true);

	dice3d.addColorset({
		name: "fallout-additions",
		description: "Fallout Additions",
		category: "Colors",
		foreground: "#e3dd71",
		background: "#415881",
		outline: "none",
		texture: "none",
		material: "wood",
		font: "Futura-BoldItalic"
	});

	dice3d.addDicePreset({
		type: "d2",
		modelFile: "modules/fallout-dice-addition/models/d2/cap.glb",
		system: "fallout-additions"
	});

	dice3d.addDicePreset({
		type: "d2",
		material: "metal",
		labels:[
			"modules/fallout-dice-addition/textures/d2/albedo.webp"
		],
		bumpMaps: [
			"modules/fallout-dice-addition/textures/d2/normal.webp"
		],
		system: "fallout-additions",
	});

	dice3d.addDicePreset({
		type: "dc",
		labels: [
			"modules/fallout-dice-addition/textures/dc/bang.webp",
			"modules/fallout-dice-addition/textures/dc/bangbang.webp",
			"modules/fallout-dice-addition/textures/dc/empty.webp",
			"modules/fallout-dice-addition/textures/dc/empty.webp",
			"modules/fallout-dice-addition/textures/dc/boy.webp",
			"modules/fallout-dice-addition/textures/dc/boy.webp"
		],
		bump: [
			"modules/fallout-dice-addition/textures/dc/bang.webp",
			"modules/fallout-dice-addition/textures/dc/bangbang.webp",
			"modules/fallout-dice-addition/textures/dc/empty.webp",
			"modules/fallout-dice-addition/textures/dc/empty.webp",
			"modules/fallout-dice-addition/textures/dc/boy.webp",
			"modules/fallout-dice-addition/textures/dc/boy.webp"
		],
		system: "fallout-additions",

	});

	dice3d.addDicePreset({
		type: "dh",
		fontScale: 1.3,
		labels: [
			"modules/fallout-dice-addition/textures/dh/head.webp",
			"modules/fallout-dice-addition/textures/dh/head.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/body.webp",
			"modules/fallout-dice-addition/textures/dh/arm-l.webp",
			"modules/fallout-dice-addition/textures/dh/arm-l.webp",
			"modules/fallout-dice-addition/textures/dh/arm-l.webp",
			"modules/fallout-dice-addition/textures/dh/arm-r.webp",
			"modules/fallout-dice-addition/textures/dh/arm-r.webp",
			"modules/fallout-dice-addition/textures/dh/arm-r.webp",
			"modules/fallout-dice-addition/textures/dh/leg-l.webp",
			"modules/fallout-dice-addition/textures/dh/leg-l.webp",
			"modules/fallout-dice-addition/textures/dh/leg-l.webp",
			"modules/fallout-dice-addition/textures/dh/leg-r.webp",
			"modules/fallout-dice-addition/textures/dh/leg-r.webp",
			"modules/fallout-dice-addition/textures/dh/leg-r.webp"
		],
		system: "fallout-additions",
		colorset: "fallout-additions",
	});

});