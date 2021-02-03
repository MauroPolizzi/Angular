import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number;

  constructor() {
    // nos obtiene el año actual
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
