import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent {

  values: any[];
  prNom: any = null;
  sdNom: any = null;
  prApe: any = null;
  sdApe: any = null;
  correo: any = null;
  telef: any = null;
  feNaci: any = null;
  feIngr: any = null;

  addressForm = this.fb.group({
    prNom: [this.prNom, Validators.required],
    sdNom: this.sdNom,
    prApe: [this.prApe, Validators.required],
    sdApe: [this.sdApe, Validators.required],
    correo: [this.correo, [Validators.required, Validators.email]],
    telef: [this.telef, [Validators.required, Validators.min(1000000), Validators.max(9999999999999)]],
    feNaci: [this.feNaci, Validators.required],
    feIngr: [this.feIngr, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.prNom = this.values["prNom"];
    this.sdNom = this.values["sdNom"];
    this.prApe = this.values["prApe"];
    this.sdApe = this.values["sdApe"];
    this.correo = this.values["correo"];
    this.telef = this.values["telef"];
    this.feNaci = this.values["feNaci"];
    this.feIngr = this.values["feIngr"];
    this.addressForm = this.fb.group({
      prNom: [this.prNom, Validators.required],
      sdNom: this.sdNom,
      prApe: [this.prApe, Validators.required],
      sdApe: [this.sdApe, Validators.required],
      correo: [this.correo, [Validators.required, Validators.email]],
      telef: [this.telef, [Validators.required, Validators.min(1000000), Validators.max(9999999999999)]],
      feNaci: [this.feNaci, Validators.required],
      feIngr: [this.feIngr, Validators.required]
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
