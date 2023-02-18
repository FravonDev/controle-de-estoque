import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/template/header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    InputNumberModule,
    ConfirmDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
