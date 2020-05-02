import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoInterface } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {

  public status: string;

  constructor(

    public authService: ProductoService,
  ) {
  }

  public prod: ProductoInterface = {
    name: "",
    detail: "",
    price: 0,
    lot: "",
    quantity: 0,
    category: 0
  };

  ngOnInit() {
  }
  
  onSubmit(): void {
    this.authService.createProd(this.prod.name, this.prod.detail, this.prod.price, this.prod.lot, this.prod.quantity,this.prod.category)
      .subscribe(
        response => {
          if (response.status == 'success') {
            console.log("this.producto")
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


