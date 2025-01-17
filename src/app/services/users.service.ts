import { Injectable } from '@angular/core';
// Essai ajout fonction delete user 1
/*
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
*/

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@example.com'},
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  constructor() { }

  getAllUsers() {
    return this.users;
  }

// Test ajout fonction createUser 2

  createUser(user: { name: string; email: string}) {
    if (!user.name || !user.email) {
      console.error('Utilisateur invalide, les champs sont vides !');
      return;
    }
    
    const newUser = {
      id: this.users.length + 1,
      ...user
    };
    this.users.push(newUser);
    console.log('Utilisateur ajouté :', newUser);
  }

// Test ajout fonction deleteUser 1
/*
  private apiUrl ) 'https://localhost:4200/users';

  constructor(private http: HttpClient) { }

  DeleteUserComponent(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
*/
// Test ajout fonction createUser 1
/*
  createUser(user: { name: string; email: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...user
    };
    this.users.push(newUser);
    console.log('Utilisateur ajouté :', newUser);
  }
*/
}

/* Essai getAllUsers 1

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:4200/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

*/

