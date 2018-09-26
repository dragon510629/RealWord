import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingComponent } from './Components/setting/setting.component';
import { EditorComponent } from './Components/editor/editor.component';

const appRoutes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'setting',
    component : SettingComponent
  },
  {
    path : 'editor',
    component : EditorComponent
  },
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent,
    SettingComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
