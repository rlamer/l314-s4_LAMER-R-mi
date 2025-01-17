import { Component } from '@angular/core';
// Test ajout fonction 1
import { UsersService } from '../../services/users.service'; 

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
// Test ajout fonction 1
/*
  user = { name: '', email: '' };
  successMessage = '';

  constructor(private userService: UsersService) {}

  onSubmit() {
    if (this.user.name && this.user.email) {
      this.userService.createUser(this.user);
      this.successMessage = 'Utilisateur créé avec succès !';
      this.user = { name: '', email: '' };
    }
  }
*/

// Test ajout fonction 2
  
  user = { name: '', email: '' };
  confirmationMessage = '';

  constructor(private usersService: UsersService) {}

  onAddUser() {
//    console.log('Données soumises :', this.user);
    console.log('Utilisateur soumis au service :', this.user);
    this.usersService.createUser(this.user);
    this.confirmationMessage = `Utilisateur ${this.user.name} avec l email ${this.user.email} ajouté avec succès !`;

    this.user = { name: '', email: '' };
  }
}
