import Teacher from "./Teacher";

export abstract class Evaluation {
	private _score: number;
	private _teacher: Teacher;

	constructor(score: number, teacher: Teacher) {
		this._score = score;
		this._teacher = teacher;
	}

	get score(): number {
		return this._score;
	}

	set score(score: number) {
		if (score < 0) throw new Error('O score nao pode ser menor que 0');

		this._score = score;
	}

	get teacher(): Teacher {
		return this._teacher;
	}

	set teacher(teacher: Teacher) {
		this._teacher = teacher;
	}
}

export class Exam extends Evaluation {
	constructor(score: number, teacher: Teacher) {
		super(score, teacher);
	}

	set score(score: number) {
		if (score > 25) {
			throw new Error('A pontução deve ser menor que 25 pontos.');
		}

		super.score = score;
	}
}

export class Work extends Evaluation {

	constructor(score: number, teacher: Teacher) {
		super(score, teacher);
	}

	set score(score: number) {
		if (score > 50) throw new Error('A pontução deve ser menor que 50 pontos.');

		super.score = score;
	}
}