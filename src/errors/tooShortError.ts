export class tooShortError extends Error{

	constructor(value: string, min_length: number){

		super(`'${value}' is too short, minimum length: '${min_length}'`);
	}
}