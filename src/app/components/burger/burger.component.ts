import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})
export class BurgerComponent implements OnInit{
  @Input() id: string|number = ''
  img: string = ''
  @Input() name: string = ''
  @Input() price: number = 0
  @Input() ingredients: string[] = []
  openIngredients: boolean = false
  rota: string = ''

  constructor(){
  }
  
  ngOnInit(): void {
    this.price = Number(this.price)
    if(this.ingredients.includes('americano')){
      this.img = '../../../assets/burguers/americano.jpg'
    }else if(this.ingredients.includes('brioche')){
      this.img = '../../../assets/burguers/brioche.jpg'
    }else if(this.ingredients.includes('pão de cebola')){
      this.img = '../../../assets/burguers/cebola.jpg'
    }else if(this.ingredients.includes('ciabatta')){
      this.img = '../../../assets/burguers/ciabatta.jpg'
    }else if(this.ingredients.includes('italiano')){
      this.img = '../../../assets/burguers/italiano.jpg'
    }else if(this.ingredients.includes('xis')){
      this.img = '../../../assets/burguers/xis.jpg'
    }else{
      this.img = '../../../assets/burguers/xis.jpg'
    }
  }

  handleIngredients(){
    this.openIngredients = !this.openIngredients
  }
}
