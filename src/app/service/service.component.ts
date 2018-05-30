import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  categories;


  constructor(private categorieService: CategorieService ) { }

  ngOnInit() {
    this.categorieService.getCategorieServices().subscribe( res => {
      this.categories = res.json().data;

     });
  }

}
