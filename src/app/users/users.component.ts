import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export type User = {
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
export class UsersComponent implements OnInit {
  public users: Array<User> = [];

  public readonly form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    sallary: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  ngOnInit(): void {
    getUsers()
      .then((res: User[]) => {
        this.users = res;
      })
      .catch(() => {
        console.log('Something go wrong!');
      });
  }

  public handleAddUser(): void {
    const randomId = Math.floor(Math.random() * 100) + 4;
    const { name, age, sallary } = this.form.value;
    this.users.push({
      id: randomId,
      name,
      age,
      sallary,
    });
    this.form.reset();
  }

  public getMinAge(): number {
    return Math.min(...this.users.map((user: User) => user.age));
  }
}
