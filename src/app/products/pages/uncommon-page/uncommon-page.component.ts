import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select

  public name:string = 'Victor';
  public gender: 'male'| 'female' | 'no existe' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'no existe';
  }


  //i18plural

  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Victor', 'Fernando'];
  public clientMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  deleteClient():void {
    this.clients.shift();
  }

  //keyvaleu pipe
  public person = {
    name: 'Victor',
    age: 24,
    address: 'Montecristi'
  }


  //async pipe

  public myObservableTimer:Observable<number> = interval(2000)
  .pipe
  (
    tap(data => console.log('tap:', data)),
  );

  public promiseValue:Promise<string | number> = new Promise((resolve, reject) =>
  {
   setTimeout(()=>{
    resolve('Tenemos data en la promesa')
    console.log('Tenemos data en la promesa');
    this.person.name = 'Otro nombre';
   }, 3000)
  }
)

}
