import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentos-form',
  templateUrl: './documentos-form.component.html',
  styleUrls: ['./documentos-form.component.css']
})
export class DocumentosFormComponent {

  values: any[];
  bucket: any = null;
  idBucket: any = null;

  addressForm = this.fb.group({
    bucket: [this.bucket, Validators.required],
    idBucket: [this.idBucket, Validators.required]
  });

  constructor(private fb: FormBuilder, public tableService: TableService) {}

  ngOnInit(){
    this.values = this.tableService.getValues();
    this.bucket = this.values["bucket"];
    this.idBucket = this.values["idBucket"];
    this.addressForm = this.fb.group({
      bucket: [this.bucket, Validators.required],
      idBucket: [this.idBucket, Validators.required]
    });
  }

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}