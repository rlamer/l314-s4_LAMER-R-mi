import { Component } from '@angular/core';
// import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-delete-user',
  standalone: false,
  
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent {

// Essai ajout fonction 2
/*
userId: string = ''; 
message: string = ''; 

constructor() {}

deleteUser() {
  if (!this.userId) { 
    this.message = "Veuillez entrer un identifiant valide.";
    return;
  }

  console.log(`Suppression de l'utilisateur avec l'identifiant : ${this.userId}`);
  this.message = `Utilisateur avec l'identifiant ${this.userId} supprimé (simulation).`;
  this.userId = '';
}
*/

// Essai ajout fonction 1
/*
  userId: string = '';
  message: string = '';

  constructor(private userService: UserService) { }

  DeleteUser() {
    if (!this.userId) {
      this.message = "Veuillez entrer un identifiant valide.";
      return;
    }

    this.userService.deleteUser(this.userId).subscribe(
      response => {
        this.message = "Utilisateur supprimé avec succès!";
      },
      error => {
        this.message = "Erreur lors de la suppression de l'utilisateur.";
      }
    );
  }
*/
}
