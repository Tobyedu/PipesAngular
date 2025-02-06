import { Component } from '@angular/core';
import{PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private primengconfig: PrimeNGConfig){

  }
  ngOnInit(): void {
    this.primengconfig.ripple = true;
  }

}
