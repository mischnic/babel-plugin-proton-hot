import React, { Component } from "React";
import { Text } from "proton-native";

class Example extends Component {
	render() {
		return React.createElement(
			Text,
			null,
			"Test"
		);
	}
}

const _Example = {
	___component: Example
};
export { _Example as Example };