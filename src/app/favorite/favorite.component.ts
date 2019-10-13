import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('favorito') postando: any;
  @Output('change') change = new EventEmitter ;
  testando: "testando outro parametro";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.postando.favorito = !this.postando.favorito;
    this.postando.title = "trocadooooo"
    this.change.emit(this.postando);
  
  }

  mudando2(objeto){
    console.log("favorito alterado", objeto);
   }

}
