import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent {

  values: any[];
  anmla: any = null;
  idUbi: any = null;
  fecha: any = null;
  hora: any = null;
  sjts: any = null;
  apbc: any = null;

  addressForm = this.fb.group({
    anmla: [this.anmla, Validators.required],
    idUbi: [this.idUbi, Validators.required],
    fecha: [this.fecha, Validators.required],
    hora: [this.hora, Validators.required],
    sjts: [this.sjts, Validators.required],
    apbc: [this.apbc, Validators.required]
  });

  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.anmla = this.values["anmla"];
    this.idUbi = this.values["idUbi"];
    this.fecha = this.values["fecha"];
    this.hora = this.values["hora"];
    this.sjts = this.values["sjts"];
    this.apbc = this.values["apbc"];
    this.addressForm = this.fb.group({
      anmla: [this.anmla, Validators.required],
      idUbi: [this.idUbi, Validators.required],
      fecha: [this.fecha, Validators.required],
      hora: [this.hora, Validators.required],
      sjts: [this.sjts, Validators.required],
      apbc: [this.apbc, Validators.required]
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}