export default class ApplicationLeaderboardItem
{
    private _id: string;
    private _name: string;
    private _coverage: string;
    private _linesOfCode: number;
    private _score: number;
    private _movement: number;

    constructor(id: string, name: string, coverage: string, linesOfCode: number, score: number, movement: number)
    {
        this._id = id;
        this._name = name;
        this._coverage = coverage;
        this._linesOfCode = linesOfCode;
        this._score = score;
        this._movement = movement;
    }


    get id() : string
    {
        return this._id;
    }


    get name() : string
    {
        return this._name;
    }


    get coverage() : string
    {
        return this._coverage;
    }

    get linesOfCode() : number
    {
        return this._linesOfCode;
    }

    get score(): number
    {
        return this._score;
    }

    get movement() : number
    {
        return this._movement;
    }
}