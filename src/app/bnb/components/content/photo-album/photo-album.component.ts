import { Component } from "@angular/core";
import { Meta, Title }	from '@angular/platform-browser';

@Component({
	selector: 'bnb-photo-album',
	templateUrl: './photo-album.view.html',
	styleUrls: ['./photo-album.style.scss']
})

export class PhotoAlbumComponent
{
	constructor(title: Title, meta: Meta)
	{
		title.setTitle('Photo Album');
		meta.addTags([{
			name: 'description',
			content: 'The requested resource could not be found.'
		}]);
	}
}
