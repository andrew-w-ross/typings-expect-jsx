/// <reference path="typings/main.d.ts" />
/// <reference path="expect-jsx.d.ts" />

import * as React from "react";
import * as expect from "expect";
import * as expectJsx from "expect-jsx";

expect.extend(expectJsx);

class TestComponent extends React.Component<{ showMessage: boolean }, {}>{
	render() {
		return (
			<div>
				{this.props.showMessage ? <h1>Hello</h1> : <h2>World</h2>}
			</div>
		);
	}
}

const StatelessElem = ({message = "Hello"}) => <h1>{message}</h1>;

expect(<StatelessElem />).toIncludeJSX(<h1>Hello</h1>);
expect(<TestComponent showMessage={true} />).toIncludeJSX(<h1>Hello</h1>);
expect(<TestComponent showMessage={false} />).toIncludeJSX(<h2>World</h2>);
