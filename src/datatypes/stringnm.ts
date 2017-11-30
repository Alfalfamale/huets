import {tooLongError} from '../errors/tooLongError';
import {tooShortError} from "../errors/tooShortError";

export abstract class StringNM {

	constructor(public value: string, n: number, m: number){

		if (value.length < n) {

			throw new tooShortError(value, n);
		}

		if (value.length > m) {

			throw new tooLongError(value, m);
		}

		if(value.indexOf('%') !== -1){

			throw new Error(`'%' character is not allowed`);
		}
	}

	public toString(){

		return this.value;
	}
}