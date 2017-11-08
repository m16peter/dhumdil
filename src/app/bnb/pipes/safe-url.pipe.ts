/*
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform
{
	constructor(private domSanitizer: DomSanitizer)
	{}

	transform(url)
	{
		return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
*/
/* HowTo: <a href="'unsafe-url' | safeUrl"></a> */
