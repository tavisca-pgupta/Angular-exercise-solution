import { Component } from '@angular/core';

// selector : The custom HTML Tag that will be used to load and render
// the component

// templateUrl : The UTL of HTML file that contains UI of Component
// template: Inline HTML Template String ``

// style and styleUrls: Inline and external CSS Styles

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myngapp';
}
