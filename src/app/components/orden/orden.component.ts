import { Component, OnInit } from '@angular/core';
import { OrdenInterface } from '../../Models/orden';
import { ToastrService } from 'ngx-toastr';
import { OrdenService } from '../../services/orden.service';
import { ProductoInterface } from '../../Models/producto';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  public status: string;
  ordenData = {} as OrdenInterface;
  productData = {} as ProductoInterface;
  orden: OrdenInterface[] = [];
  producto: ProductoInterface[]=[];

  public quantity: number;
  public prod: any;
  public totPrice: number;
  public price: number;
  public prodOrd: {};
  public totalP: number = 0;

  constructor(
    private toastr: ToastrService,
    public authService: OrdenService,

  ) { }

  getListProduct(){
    /**Se llama al metodo de listar definido en el servicio */
    this.authService.getListProduct().subscribe(
      (data) => { 
        let respuesta: any;
        respuesta = data;
        
      this.producto = respuesta.products;
      console.log(this.producto);
       
      },
      (error) => {
        console.log("error en el servicio");
      }
    );
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  alert() {
    this.toastr.success('Registrado Correctamente', 'success', {
      timeOut: 10000,
      progressBar: true
    });
  }

  alert2() {
    this.toastr.warning(' No se pudo registrar', 'fallò', {
      timeOut: 1000,
      progressBar: true
    });
  }
  public ord: OrdenInterface={
   name: "",
    client: "",
    responsible: "",
    total: 0,
    status: false,
    detail: []
  }
  limpiar(){
    this.ordenData = {} as OrdenInterface;
  }

  ordenSubmit(form): void {
    this.ord.total = this.totalP;
    console.log(this.ord);
    this.authService.createOrden(this.ord.name, this.ord.client, this.ord.responsible, this.ord.total, this.ord.status, this.ord.detail)
      .subscribe(
        response => {
          this.alert();
          
          if (response.status == 'success') {
            this.status = 'success ';
            //console.log(response);
            form.reset();
          } else {
            this.status = 'error'
            this.alert2;
          }
          form.reset();
        },
        error => {
          console.log(error);
          this.status = 'error';
          this.alert2();
        }
      )

  }

  detailSubmit(form): void {
    
    this.totPrice = this.quantity * this.prod.price;
    this.prodOrd = {'product': this.prod.name, 'quantity': this.quantity, 'price': this.totPrice}
    this.ord.detail.push(this.prodOrd) 
    this.totalP += this.totPrice;
    console.log(this.totalP);
    form.reset();
  }


}
