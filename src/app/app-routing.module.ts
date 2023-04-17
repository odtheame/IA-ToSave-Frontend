import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { InformesComponent } from './components/informes/informes.component';
import { PersonasComponent } from './components/personas/personas.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:"", component:PersonasComponent},
  {path:"Personas", component:PersonasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Ubicaciones", component:UbicacionesComponent},
  {path:"Incidencias", component:IncidenciasComponent},
  {path:"Informes", component:InformesComponent},
  {path:"Documentos", component:DocumentosComponent},
  {path:"Personas/:id", component:PersonasComponent},
  {path:"Usuarios/:id", component:UsuariosComponent},
  {path:"Clientes/:id", component:ClientesComponent},
  {path:"Ubicaciones/:id", component:UbicacionesComponent},
  {path:"Incidencias/:id", component:IncidenciasComponent},
  {path:"Informes/:id", component:InformesComponent},
  {path:"Documentos/:id", component:DocumentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
