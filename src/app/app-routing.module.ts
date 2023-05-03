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


const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"Personas", component:PersonasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Documentos", component:DocumentosComponent},
  {path:"Incidencias", component:IncidenciasComponent},
  {path:"Informes", component:InformesComponent},
  {path:"Ubicaciones", component:UbicacionesComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Form", component:UbicacionesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }