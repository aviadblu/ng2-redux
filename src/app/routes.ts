import {Routes} from '@angular/router';
import {TodoMainComponent} from "./todo/todo-main/todo-main.component";


export const routes: Routes = [
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
