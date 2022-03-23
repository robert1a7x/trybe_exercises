import { Evaluation } from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(evaluation: Evaluation) {
    this._evaluation = evaluation;
  }

  get score(): number {
    return this._score;
  }

  set score(score: number) {
    if (score < 0) throw new Error("A pontução deve ser positiva.");
    if (score > this.evaluation.score) {
      throw new Error(`A pontução máxima é ${this.evaluation.score} pontos.`);
    }

    this._score = score;
  }
}
