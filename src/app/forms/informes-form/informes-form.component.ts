import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informes-form',
  templateUrl: './informes-form.component.html',
  styleUrls: ['./informes-form.component.css']
})
export class InformesFormComponent {

  values: any[];
  nInf: any = null;
  idIcdc: any = null;
  descr: any = null;
  idDoc: any = null;

  addressForm = this.fb.group({
    nInf: [this.nInf, Validators.required],
    idIcdc: [this.idIcdc, Validators.required],
    descr: [this.descr, [Validators.required, Validators.maxLength(255)]],
    idDoc: [this.idDoc, Validators.required]
  });
  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.nInf = this.values["nInf"];
    this.idIcdc = this.values["idIcdc"];
    this.descr = this.values["descr"];
    this.idDoc = this.values["idDoc"];
    this.addressForm = this.fb.group({
      nInf: [this.nInf, Validators.required],
      idIcdc: [this.idIcdc, Validators.required],
      descr: [this.descr, [Validators.required, Validators.maxLength(255)]],
      idDoc: [this.idDoc, Validators.required]
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}