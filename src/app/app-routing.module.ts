import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoMainComponent} from "app/todo/todo-main/todo-main.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'todo',
        component: TodoMainComponent
      },
      {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
