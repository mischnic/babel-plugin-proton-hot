import React, { Component } from "React";
import { App, Window, render } from "proton-native";
import { Example, Test } from "./app.js";

class HotApp extends Component {
	render() {
		return (
			<App>
				<Window title="Notes" size={{ w: 500, h: 350 }} margined>
					<Example />
					<Test />
				</Window>
			</App>
		);
	}
}
