/// <reference path="typings/main.d.ts" />

declare module expect {

	type JsxElement = JSX.Element | JSX.ElementClass

	interface IJsxExpectation<TElement extends JsxElement> extends IExpectation<TElement> {

		toEqualJSX(element: TElement): this;

		toNotEqualJSX(element: TElement): this;

		toIncludeJSX(element: TElement): this;

		toNotIncludeJSX(element: TElement): this;
	}

	interface IExpect {
		<TElement extends JsxElement>(compare: TElement): IJsxExpectation<TElement>;
	}
}

declare module "expect-jsx" {
	let expect: expect.IJsxExpectation<JSX.Element>;
	export = expect;
}