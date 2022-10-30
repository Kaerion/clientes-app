import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  constructor() { }

  clientList: string[] = ['Cliente1', 'Cliente2', 'Cliente3'];
  enabled: boolean = true;
}
