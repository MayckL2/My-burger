import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://gifted-sweltering-butterfly.glitch.me/'

  constructor() { }

  async getAll(search = '') {
    try {
      let query = search ? `?name=${search}` : ''
      let response = await fetch(this.url + 'myburger' + query)
      let data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async getIngredients() {
    try {
      let response = await fetch(this.url + 'ingredients')
      let data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async addHamburguer(name: string, price: string|number, ingredients: string[]) {
    try {
      let response = await fetch(this.url + 'myburger', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          price,
          ingredients
        })
      })
      let data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async getBurguer(id: string|number) {
    try {
      let response = await fetch(this.url + 'myburger/' + id , {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      let data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }
}
