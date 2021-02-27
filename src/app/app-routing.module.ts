import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';

import { PostComponent } from './post/post.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { PnfComponent } from './pnf/pnf.component';
import { RoleguardService } from './guards/roleguard.service';

const routes: Routes = [
  {
    path: 'template',
    component: TemplateComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },

  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: AdduserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edituser',
    component: EdituserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleguardService ]
  },
  {
    path: '404',
    component: PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
