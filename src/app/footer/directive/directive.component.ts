import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  constructor() { }

  clientList: string[] = ['Producto1', 'Producto2', 'Producto3'];
  enabled: boolean = true;
}
