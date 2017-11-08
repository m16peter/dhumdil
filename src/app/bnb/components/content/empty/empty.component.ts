import { Component } from "@angular/core";
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-empty',
	templateUrl: './empty.view.html',
	styleUrls: ['./empty.style.scss']
})

export class EmptyComponent
{
	constructor(title: Title, meta: Meta)
	{
		title.setTitle('EmptyComponent');
		meta.addTags([{
			name: 'description',
			content: 'EmptyComponent\'s description...'
		}]);
	}
}
