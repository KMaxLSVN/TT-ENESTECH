import { Component } from '@angular/core';

type User = {
  id: number;
  name: string;
  age: number;
  sallary: number;
};

function getUsers(): Promise<User[]> {
  return Promise.resolve([
    { id: 1, name: 'User 1', age: 23, sallary: 1000 },
    { id: 2, name: 'User 2', age: 40, sallary: 2000 },
    { id: 3, name: 'User 3', age: 32, sallary: 500 },
    { id: 4, name: 'User 4', age: 23, sallary: 1500 },
  ]);
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor() {}
}
