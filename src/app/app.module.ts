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
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { ArticleComponent } from './Components/article/article.component';
import { EditComponent } from './Components/editor/edit/edit.component';
import { TagComponent } from './Components/dashboard/tag/tag.component';
import { FeedComponent } from './Components/dashboard/feed/feed.component';

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
  },
  {
    path : 'profile/:name',
    component : ProfileComponent 
  },
  {
    path : 'article/:slug',
    component : ArticleComponent 
  },
  {
    path : 'editor/:id',
    component : EditComponent 
  },
  {
    path : 'tag/:tag',
    component : TagComponent
  },
  {
    path : 'feed',
    component : FeedComponent
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
    EditorComponent,
    ProfileComponent,
    ArticleComponent,
    EditComponent,
    TagComponent,
    FeedComponent
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
