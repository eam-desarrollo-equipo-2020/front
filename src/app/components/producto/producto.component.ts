import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoInterface } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {

  public status: string;
  tittle="prueba";

  constructor(
    private toastr:ToastrService,  
    public authService: ProductoService,
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
    this.toastr.warning(' Verifique los Datos Ingresador','fallo',{
      timeOut:10,
      progressBar:true
    });
  }

  public prod: ProductoInterface = {
    name: "",
    detail: "",
    price: 0,
    lot: "",
    quantity: 0,
    category: ""
  };

  ngOnInit() {
  }
  
  onSubmit(): void {
    this.authService.createProd(this.prod.name, this.prod.detail, this.prod.price, this.prod.lot, this.prod.quantity,this.prod.category)
      .subscribe(
        response => {
          this.alert();
          if (response.status == 'success') {
            console.log("this.producto")
            this.status = 'success ';
            console.log(response);
            location.reload();
          } else {
            this.status = 'error';

          this.alert2();
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


