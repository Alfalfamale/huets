export class tooLongError extends Error{

	constructor(value: string, max_length: number){

		super(`'${value}' is too long, maximum length: '${max_length}'`);
	}
}