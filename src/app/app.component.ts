import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postando = {
    title:'title',
    favorito: true
  };


  mudando(postando){
    console.log("elemento", postando);
   console.log("favorito alterado", postando.title + " " + postando.favorito);
  }

  }
