import { Component, OnInit } from '@angular/core';
import {HeroesService, heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
heroes : heroe[] = [];
  
  constructor(private heroesService: HeroesService, private router:Router) { }

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  ver_heroe( index : number) {

    this.router.navigate(['heroes/heroe',index]);
    console.log('index',index);
  
  }

}
