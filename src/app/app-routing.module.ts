import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { OneUserComponent } from './components/one-user/one-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path:'all-users', component: AllUsersComponent
  },
  {
    path:'create-user', component: CreateUserComponent
  },
  {
    path:'delete-user', component: DeleteUserComponent
  },
  {
    path:'one-user', component: OneUserComponent
  },
  {
    path:'update-user', component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
