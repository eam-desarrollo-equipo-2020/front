import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryInterface } from 'src/app/models/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  public status: string;
  tittle="prueba";
  public nombre:string;
  descripcion="";

  constructor(
    private toastr:ToastrService,  
    public authService: CategoryService,

  ) {
   
  }
  alert(){
    this.toastr.success('Registrado Correctamente','success',{
      timeOut:1000,
      progressBar:true
    });
    location.reload();
  }
  

  alert2(){
    this.toastr.warning(' Verifique los Datos Ingresados','fallo',{
      timeOut:1000,
      progressBar:true
    });
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
          this.alert();
          if (response.status == 'success') {
            this.alert();
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
          this.alert2();
        }
      )
  }

 

  
}


