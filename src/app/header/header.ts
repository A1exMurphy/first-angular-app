import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    // standalone should be set to true by default in Angular 19 and higher, so it shouldn't be necessary to include here
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class HeaderComponent {}