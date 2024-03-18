import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-burger',
  templateUrl: './new-burger.component.html',
  styleUrl: './new-burger.component.scss'
})
export class NewBurgerComponent {
  ingredients: string[] = []
  carneList: string[] = []
  molhoList: string[] = []
  paesList: string[] = []
  acompanhamentoList: string[] = []
  saladaList: string[] = []
  queijoList: string[] = []
  carnes: string[] = []
  molhos: string[] = []
  paes: string[] = []
  acompanhamentos: string[] = []
  saladas: string[] = []
  queijos: string[] = []
  alertText: string = ''
  alertStatus: boolean = false
  showAlert: boolean = false

  constructor(private api: ApiService) {
  }

  async ngOnInit() {
    // coleta todos os ingredientes da api
    let response = await this.api.getIngredients()
    this.carneList = response.carnes
    this.molhoList = response.molhos
    this.paesList = response.paes
    this.acompanhamentoList = response.acompanhamento
    this.saladaList = response.salada
    this.queijoList = response.queijos
    
    // inicializa alerta
    this.openAlert(true, 'Hamburguer montado aqui sera adicionado ao catalogo!')
  }

  // salva escolha do ingrediente
  choseIng(choice: string, type: string) {
    console.log(type)

    switch (type) {
      case 'carnes':
        this.carnes = []
        this.carnes.push(choice)
        break;
      case 'molhos':
        this.molhos = []
        this.molhos.push(choice)
        break;
      case 'paes':
        this.paes = []
        this.paes.push(choice)
        break;
      case 'acompanhamentos':
        this.acompanhamentos = []
        this.acompanhamentos.push(choice)
        break;
      case 'saladas':
        this.saladas = []
        this.saladas.push(choice)
        break;
      case 'queijos':
        this.queijos = []
        this.queijos.push(choice)
        break;
    }

    console.log(this.carnes, this.molhos, this.paes, this.acompanhamentos, this.saladas, this.queijos)
  }

  // salva hamburger montado
  async onSubmit(e: NgForm) {
    console.log(e.value)
    let allIngredients: string[] = []
    allIngredients = allIngredients.concat(this.carnes)
    allIngredients = allIngredients.concat(this.molhos)
    allIngredients = allIngredients.concat(this.paes)
    allIngredients = allIngredients.concat(this.acompanhamentos)
    allIngredients = allIngredients.concat(this.saladas)
    allIngredients = allIngredients.concat(this.queijos)

    if(this.paes.length == 0){
      console.log('selecione algum pão')
      this.openAlert(false, 'Selecione o tipo de pão...')
      return
    }

    if(e.value.burgerName && e.value.price && allIngredients.length > 0){
      let response = await this.api.addHamburguer(e.value.burgerName, e.value.price, allIngredients)
      console.log(response)
      this.openAlert(true, 'Hamburguer adicionado ao catalogo!')
      window.scrollTo(0, 0);
    }else{
      this.openAlert(false, 'Preencha todas as áreas...')
    }

  }

  // chama alerta exibindo status e texto
  openAlert(status: boolean, text: string){
    this.showAlert = true
    this.alertText = text
    this.alertStatus = status
  }
}
