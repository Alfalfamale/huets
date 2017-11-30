import {suite, test} from 'mocha-typescript';
import {assert, expect} from 'chai';
import {StringNM} from './stringnm';
import {tooLongError} from "../errors/tooLongError";
import {tooShortError} from "../errors/tooShortError";

class TestStringNM extends StringNM{

	public constructor(value: string){

		super(value, 4, 8);
	}
}

@suite
class StringnmTest{

	@test
	public validateTooShortException(){

		expect(() => {new TestStringNM('abc')}).to.throw(tooShortError);
	}

	@test
	public validateTooLongException(){

		expect(() => {new TestStringNM('abcdefghijk')}).to.throw(tooLongError);
	}

	@test
	public validatePercentSymbol(){

		expect(() => {new TestStringNM('abc%def')}).to.throw(Error);
	}

	@test
	public validateValue(){

		let value = 'abcdefg';
		let test = new TestStringNM(value);
		assert(`${test}`, value);
	}
}
