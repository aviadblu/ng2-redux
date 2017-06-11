import {Routes} from '@angular/router';
import {TodoMainComponent} from "app/todo/todo-main/todo-main.component";

export const router: Routes = [
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
