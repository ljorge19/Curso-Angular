import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('favorito') banana: boolean;
  @Output() change = new EventEmitter ;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.banana = !this.banana;
    this.change.emit({newValue: this.banana});

  }

  mudando2(objeto){
    console.log("favorito alterado", objeto);
   }

}
