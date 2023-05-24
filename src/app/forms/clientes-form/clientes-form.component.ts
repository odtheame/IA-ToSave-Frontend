import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  values: any[];
  nom: any = null;
  direccion: any = null;
  nit: any = null;
  idPersona: any = null;

  addressForm = this.fb.group({
    nom: [this.nom, Validators.required],
    direccion: [this.direccion, Validators.required],
    nit: [this.nit, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    idPersona: [this.idPersona, Validators.required]
  });
 
  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    console.log(this.values)
    this.nom = this.values["nom"];
    this.direccion = this.values["dir"];
    this.nit = this.values["nit"];
    this.idPersona = this.values["idPrsn"];
    this.addressForm = this.fb.group({
      nom: [this.nom, Validators.required],
      direccion: [this.direccion, Validators.required],
      nit: [this.nit, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      idPersona: [this.idPersona, Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )
  }
}