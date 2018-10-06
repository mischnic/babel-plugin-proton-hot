const pluginTester = require("babel-plugin-tester");
const fs = require("fs");
const path = require("path");
const flatMap = require("array.prototype.flatmap");

const plugin = require(".");

const files = fs.readdirSync("test/units");

pluginTester({
	pluginName: "babel-plugin-proton-hot",
	plugin: plugin,
	filename: __filename,
	babelOptions: {
		ast: false,
		babelrc: false
	},
	tests: flatMap(files.filter(v => !v.startsWith(".")), v => [
		{
			title: v,
			fixture: path.join("test", "units", v, "app.js"),
			outputFixture: path.join("test", "units", v, "_ref", "app.js"),
			babelOptions: {
				presets: ["react"]
			}
		},
		{
			title: v + " (env)",
			fixture: path.join("test", "units", v, "app.js"),
			outputFixture: path.join("test", "units", v, "_ref_env", "app.js"),
			babelOptions: {
				presets: ["env", "react"]
			}
		}
	])
});
