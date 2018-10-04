import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Globals } from './model/globals';
import { AttributeViewComponent } from './attribute-view/attribute-view.component';
import { AttributeEditComponent } from './attribute-edit/attribute-edit.component';
import { AttributeAddComponent } from './attribute-add/attribute-add.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import { WizardComponent } from './wizard/wizard.component';
import { IntegralUIModule } from '../../integralui/integralui.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    LoginComponent,
    AttributeViewComponent,
    AttributeEditComponent,
    AttributeAddComponent,
    WizardComponent,
    
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TreeModule.forRoot(),
    IntegralUIModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule { }
