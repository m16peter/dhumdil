import { Component } from "@angular/core";
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-error',
	templateUrl: './error.view.html',
	styleUrls: ['./error.style.scss']
})

export class ErrorComponent
{
	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Page Not Found | 404');
		meta.addTags([{
			name: 'description',
			content: 'The requested resource could not be found.'
		}]);
	}
}
