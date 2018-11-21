import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  ano:number;
  mes:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.ano = +params.get('ano');
    this.mes = +params.get('mes');

  }

  submit(){
    this.router.navigate(['/archive'])
  }
  

}
