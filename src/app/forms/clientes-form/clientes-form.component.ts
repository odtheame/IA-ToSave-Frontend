import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
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
  idRegistro: any = null;
  personaSeleccion: any []= null;
  selected: string;

  addressForm = this.fb.group({
    nom: [this.nom, Validators.required],
    direccion: [this.direccion, Validators.required],
    nit: [this.nit, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    idPersona: [this.idPersona, Validators.required]
  });

  constructor(private fb: FormBuilder, public tableService: TableService, public api: ApiService) { }

  ngOnInit() {
    this.values = this.tableService.getValues();
    this.personaSeleccion = this.tableService.getResponse();
    console.log(this.values)
    this.nom = this.values["nombre"];
    this.direccion = this.values["direccion"];
    this.nit = this.values["nit"];
    this.idRegistro = this.values["idCliente"];
    this.idPersona = this.values["primer_Nombre"];

    this.addressForm = this.fb.group({
      nom: [this.nom, Validators.required],
      direccion: [this.direccion, Validators.required],
      nit: [this.nit, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      idPersona: [this.idPersona, Validators.required] 
    });
    this.selected = this.idPersona;
    console.log(this.idPersona)
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )
  }

  borrar(){
    this.api.delete("Clientes", this.idRegistro);
  }

}