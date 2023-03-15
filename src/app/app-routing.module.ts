import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './Components/personas/personas.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { DocumentosComponent } from './Components/documentos/documentos.component';
import { IncidenciasComponent } from './Components/incidencias/incidencias.component';
import { InformesComponent } from './Components/informes/informes.component';
import { UbicacionesComponent } from './Components/ubicaciones/ubicaciones.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"",component:PersonasComponent},
  {path:"Personas", component:PersonasComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"Documentos", component:DocumentosComponent},
  {path:"Incidencias", component:IncidenciasComponent},
  {path:"Informes", component:InformesComponent},
  {path:"Ubicaciones", component:UbicacionesComponent},
  {path:"Clientes", component:ClientesComponent},
  {path:"Tabla", component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
