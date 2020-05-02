import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryInterface } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  public status: string;

  constructor(

    public authService: CategoryService,

  ) {
   
  }

  public cate: CategoryInterface = {
    name: "",
    description: ""
  };

  ngOnInit() {
    
  }
  

  onSubmit(): void {
    this.authService.createCate(this.cate.name, this.cate.description)
      .subscribe(
        response => {
          if (response.status == 'success') {
            console.log("this.category")
            this.status = 'success ';
            console.log(response);
            location.reload();
          } else {
            this.status = 'error'
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      )
  }
}


