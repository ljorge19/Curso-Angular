import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  @Input('coracao') coracao: boolean;
  @Output() change = new EventEmitter ;
  contador =0;
  likeOnOff: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
   /*  this.coracao = !this.coracao; */
    this.change.emit({newValue: this.coracao})
    this.contador++;
    this.likeOnOff = !this.likeOnOff
  }

  mudando2(objeto){
    console.log("favorito alterado", objeto);
   }

}
}
