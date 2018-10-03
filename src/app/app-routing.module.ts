import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { AttributeViewComponent } from './attribute-view/attribute-view.component';
import { AttributeEditComponent } from './attribute-edit/attribute-edit.component';
import { AttributeAddComponent } from './attribute-add/attribute-add.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'attributes/:id',
    component: AttributeEditComponent
  },
  {
    path: 'attributeadd',
    component: AttributeAddComponent
  },
  {
    path: 'attributes',
    component: AttributeViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
