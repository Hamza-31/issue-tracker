import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues as data } from 'src/assets/mock-issues';

@Injectable({
	providedIn: 'root'
})
export class IssuesService {
	private issues: Issue[] = [];

	constructor() {
		this.issues = data;
	}
	getPendingIssues(): Issue[] {
		return this.issues.filter(issue => !issue.completed)
	}
}
