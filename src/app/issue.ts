export interface Issue {
	ussueNo: Number;
	title: string;
	description: string;
	priority: 'low' | 'high';
	type: 'Feature' | 'Bug' | 'Documentation';
	completed?: Date;
}
