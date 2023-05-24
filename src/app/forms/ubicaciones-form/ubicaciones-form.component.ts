import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubicaciones-form',
  templateUrl: './ubicaciones-form.component.html',
  styleUrls: ['./ubicaciones-form.component.css']
})
export class UbicacionesFormComponent {

  values: any[];
  dpto: any = null;
  cdad: any = null;
  lcld: any = null;
  ncdt: any = null;
  idUsr: any = null;

  addressForm = this.fb.group({
    dpto: [this.dpto, Validators.required],
    cdad: [this.cdad, Validators.required],
    lcld: [this.lcld, Validators.required],
    ncdt: [this.ncdt, Validators.required],
    idUsr: [this.idUsr, Validators.required],
  });

  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.dpto = this.values["dpto"];
    this.cdad = this.values["cdad"];
    this.lcld = this.values["lcld"];
    this.ncdt = this.values["ncdt"];
    this.idUsr = this.values["idUsr"];
    this.addressForm = this.fb.group({
      dpto: [this.dpto, Validators.required],
      cdad: [this.cdad, Validators.required],
      lcld: [this.lcld, Validators.required],
      ncdt: [this.ncdt, Validators.required],
      idUsr: [this.idUsr, Validators.required],
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
