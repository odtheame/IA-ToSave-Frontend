import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { InformesComponent } from './components/informes/informes.component';
import { PersonasComponent } from './components/personas/personas.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { TableComponent } from './components/table/table.component';
import { UbicacionesFormComponent } from './forms/ubicaciones-form/ubicaciones-form.component';
import { PersonasFormComponent } from './forms/personas-form/personas-form.component';
import { UsuariosFormComponent } from './forms/usuarios-form/usuarios-form.component';
import { ClientesFormComponent } from './forms/clientes-form/clientes-form.component';
import { DocumentosFormComponent } from './forms/documentos-form/documentos-form.component';
import { IncidenciasFormComponent } from './forms/incidencias-form/incidencias-form.component';
import { InformesFormComponent } from './forms/informes-form/informes-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    DocumentosComponent,
    IncidenciasComponent,
    InformesComponent,
    PersonasComponent,
    UbicacionesComponent,
    UsuariosComponent,
    MenuComponent,
    LoginComponent,
    InicioComponent,
    TableComponent,
    UbicacionesFormComponent,
    PersonasFormComponent,
    UsuariosFormComponent,
    ClientesFormComponent,
    DocumentosFormComponent,
    IncidenciasFormComponent,
    InformesFormComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }