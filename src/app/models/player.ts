export class Player {
	name: string;
	number: number;
	shirtColor: string;
	shortsColor: string;

	constructor(name?: string, number?: number, shirtColor?: string, shortsColor?: string) {
		this.name = name;
		this.number = number;
		this.shirtColor = shirtColor;
		this.shortsColor = shortsColor;
	}
}
