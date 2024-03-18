import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  myControl = new FormControl('');
  burgers: any[] = []
  search: string = ''
  ingredients: string[] = []
  carneList: string[] = []
  molhoList: string[] = []
  paesList: string[] = []
  acompanhamentoList: string[] = []
  saladaList: string[] = []
  queijoList: string[] = []
  all: Array<{ name: string, ingredients: string[] }> = []
  loaded: boolean = false

  constructor(private list: ApiService) {
  }

  async ngOnInit() {
    this.all = await this.list.getAll()
    if(this.all.length > 0){
      this.loaded = true
    }

    this.burgers = this.all
    let response = await this.list.getIngredients()
    this.carneList = response.carnes
    this.molhoList = response.molhos
    this.paesList = response.paes
    this.acompanhamentoList = response.acompanhamento
    this.saladaList = response.salada
    this.queijoList = response.queijos
  }

  async onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    this.burgers = await this.list.getAll(f.value.burgerName)
    console.log(f.valid); // false
  }

  choseIng(choice: string) {
    if (this.ingredients.includes(choice)) {
      this.ingredients = this.ingredients.filter(value => value != choice)
    } else {
      this.ingredients.push(choice)
    }

    if (this.ingredients.length > 0) {
      this.burgers = this.all.filter(value => value.ingredients.includes(choice))
    } else {
      this.burgers = this.all
    }
    console.log(this.ingredients)
  }

}
