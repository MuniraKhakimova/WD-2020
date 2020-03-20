//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService /*implements InMemoryDbService*/ {
  createDb() {
    const tasks = [
      { id: 1, name: 'Task' },
      { id: 2, name: 'Task' },
      { id: 3, name: 'Task' },
      { id: 4, name: 'Tasks' },
      { id: 5, name: 'Task' },
    ];
    return {tasks};
  }

 
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(hero => hero.id)) + 1 : 11;
  }
}