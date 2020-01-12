import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatNavComponent } from './front-end/mat-nav/mat-nav.component';
import { ToolbarHeaderComponent } from './front-end/toolbar-header/toolbar-header.component';
import { D3ScatterchartComponent } from './front-end/d3-scatterchart/d3-scatterchart.component';
import { D3PiechartComponent } from './front-end/d3-piechart/d3-piechart.component';
import { D3BarchartComponent } from './front-end/d3-barchart/d3-barchart.component';
import { TableComponent } from './front-end/table/table.component';
import {MatSidenavModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatListModule, 
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule  } from '@angular/forms';
import { from } from 'rxjs';
import { RegisterComponent } from './front-end/register/register.component';
import { LoginComponent } from './front-end/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    ToolbarHeaderComponent,
    D3ScatterchartComponent,
    D3PiechartComponent,
    D3BarchartComponent,
    TableComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    CdkStepperModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
