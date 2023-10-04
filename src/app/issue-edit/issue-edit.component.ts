import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

interface IssueForm {
	title: FormControl<string>;
	description: FormControl<string>;
	priority: FormControl<string>;
	type: FormControl<string>;
}

@Component({
	selector: 'app-issue-edit',
	templateUrl: './issue-edit.component.html',
	styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
	issueForm: FormGroup<IssueForm> | undefined;

	@Input() issue: Issue | undefined;
	@Output() formClose = new EventEmitter();
	constructor(private builder: FormBuilder, private issueService: IssuesService) { }
	ngOnInit(): void {
		if (this.issue) {
			this.issueForm = this.builder.group<IssueForm>({
				title: new FormControl(this.issue.title, { nonNullable: true, validators: Validators.required }),
				description: new FormControl(this.issue.description, { nonNullable: true, validators: Validators.required }),
				priority: new FormControl(this.issue.priority, { nonNullable: true, validators: Validators.required }),
				type: new FormControl(this.issue.type, { nonNullable: true, validators: Validators.required }),
			})
		}
	}
	editIssue() {
		if (this.issue) {
			this.issueService.updateIssue(this.issue.issueNo, this.issueForm?.getRawValue() as Issue);
			this.formClose.emit();
		}
	}
}
