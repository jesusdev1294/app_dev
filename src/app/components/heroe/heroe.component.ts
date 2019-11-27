import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe : any = {};

  constructor(private activatedRoute :ActivatedRoute, private heroe_i: HeroesService) { 

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe=this.heroe_i.getheroe(params['id']);
    });

  }

  ngOnInit() {
  }


}
