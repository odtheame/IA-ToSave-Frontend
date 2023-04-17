import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { FormComponent } from './components/form/form.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { InformesComponent } from './components/informes/informes.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path:"", component:PersonasComponent},
  {path:"Personas", component:PersonasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Ubicaciones", component:UbicacionesComponent},
  {path:"Incidencias", component:IncidenciasComponent},
  {path:"Informes", component:InformesComponent},
  {path:"Documentos", component:DocumentosComponent},
  {path:"Form", component:FormComponent},
  {path:"Tabla", component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
