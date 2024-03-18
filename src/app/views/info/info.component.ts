import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  userId: string = ''
  info: {name: string, price: number, ingredients: string[]}|null = null
  price: string|number|undefined = 0
  showAlert: boolean = false
  alertText: string = ''
  endereco: string = ''
  entrega: boolean = false
  infoEntrega: boolean = false 

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.queryParams.subscribe(async params => {
      this.userId = params['id'] || 'Não fornecido';
      console.log(this.userId)

      if(this.userId != 'Não fornecido' && this.userId){
        this.info = await this.api.getBurguer(this.userId)
        this.price = Number(this.info?.price).toFixed(2)
      }
    });
  }

  buy(type: string = ''){
    if(type == 'distancia'){
      this.showAlert = false
      this.entrega = true
      this.infoEntrega = true
    }else{
      this.showAlert = true
      this.entrega = false
      this.infoEntrega = false
      this.alertText = 'Pode vir retirar a qualquer comento, estamos no aguardo.'
      window.scrollTo(0, 0);
    }
  }

  inputControl = new FormControl('', [Validators.required]);
  
  buyEntrega(e: any){
    e.preventDefault()

    let bairro = e.target[0].value
    let rua = e.target[1].value
    let numero = e.target[2].value

    console.log(numero)
    if(!numero || !bairro || !rua){
      return
    }

    this.showAlert = true
    this.entrega = true
    this.infoEntrega = false
    this.alertText = `Sera entregue no endereço ${rua}, ${numero}, ${bairro} em torno de 30 minutos.`
    window.scrollTo(0, 0);
  }
}