import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent {

  values: any[];
  usr: any = null;
  pass: any = null;
  idPrsn: any = null;

  addressForm = this.fb.group({
    usr: [this.usr, Validators.required],
    pass: [this.pass, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    idPrsn: [this.idPrsn, Validators.required]
  });

  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.usr = this.values["usr"];
    this.pass = this.values["pass"];
    this.idPrsn = this.values["idPrsn"];
    this.addressForm = this.fb.group({
      usr: [this.usr, Validators.required],
      pass: [this.pass, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      idPrsn: [this.idPrsn, Validators.required]
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}