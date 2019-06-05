import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  netImage:string = "../assets/butterchicken.jpg";
  recipes : Recipe[] = [
    new Recipe('Butter Chicken', 'Recipe of butter Chicken',  this.netImage),
    new Recipe('Butter Chicken', 'Recipe of butter Chicken',  this.netImage)
  ];
  constructor() { }

  ngOnInit() {
  }

}
