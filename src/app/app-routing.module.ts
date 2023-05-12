import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { InformesComponent } from './components/informes/informes.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UbicacionesFormComponent } from './forms/ubicaciones-form/ubicaciones-form.component';
import { PersonasFormComponent } from './forms/personas-form/personas-form.component';
import { UsuariosFormComponent } from './forms/usuarios-form/usuarios-form.component';
import { ClientesFormComponent } from './forms/clientes-form/clientes-form.component';
import { DocumentosFormComponent } from './forms/documentos-form/documentos-form.component';
import { IncidenciasFormComponent } from './forms/incidencias-form/incidencias-form.component';
import { InformesFormComponent } from './forms/informes-form/informes-form.component';


const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"Personas", component:PersonasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Documentos", component:DocumentosComponent},
  {path:"Incidencias", component:IncidenciasComponent},
  {path:"Informes", component:InformesComponent},
  {path:"Ubicaciones", component:UbicacionesComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"FormClientes", component:ClientesFormComponent},
  {path:"FormDocumentos", component:DocumentosFormComponent},
  {path:"FormIncidencias", component:IncidenciasFormComponent},
  {path:"FormInformes", component:InformesFormComponent},
  {path:"FormPersonas", component:PersonasFormComponent},
  {path:"FormUbicaciones", component:UbicacionesFormComponent},
  {path:"FormUsuarios", component:UsuariosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }