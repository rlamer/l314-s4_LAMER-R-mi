import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'l134-s3';

  ngAfterViewInit() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = 400;
  
    function draw() {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ff6392');
      gradient.addColorStop(1, '#a349a4');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  
    draw();
  }

/* Test pour essai getAllUser 1

    users: { id: number; name: string; email: string; role: string }[] = [];

    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers(): void {
      this.users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
      ];
    }
*/
}

/* Essai getAllUsers 1

import { Component } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'l134-s3';
  users: User[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
      }
    );
  }

  */