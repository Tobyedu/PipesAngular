import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform{
  transform(hero: Hero[], sortBy?: keyof Hero | ''): Hero[] {


    switch(sortBy){
      case 'name':
      return hero.sort((a,b)=> (a.name > b.name) ? 1 : -1);

      case 'canFly':
      return hero.sort((a,b)=> (a.canFly > b.canFly) ? 1 : -1);

      case 'color':
      return hero.sort((a,b)=> (a.color > b.color) ? 1 : -1);

      default:
      return hero;
    }

    

  }

}
