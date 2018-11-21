import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-routing',
  templateUrl: './archive-routing.component.html',
  styleUrls: ['./archive-routing.component.css']
})
export class ArchiveRoutingComponent  {

  dia: number;

  listas = [
    {ano: 2017, mes: 1},
    {ano: 2017, mes: 2},
    {ano: 2017, mes: 3},
  ]
  
  /* constructor(private router: Router) { } */

  /* submit() {
    this.router.navigate(['/archive/:mes/:dia'], {
        //queryParams: { mes, this.dia}
    });
  } */

}
