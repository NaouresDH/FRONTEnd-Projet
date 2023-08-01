import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { CurrentUser } from '../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isLoggedIn = false;
 isAdmin = false;
 isClient = false;
  currentUser!: CurrentUser;
  constructor(private authService: AccountService,private router: Router) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin=this.authService.isAdmin();
    this.isClient=this.authService.isClient();

    this.getCurrentUser();
  }

  
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser(); // Utilisez la méthode du service pour obtenir les détails de l'utilisateur
  }
  logout(): void {
    
    this.authService.removeToken();
    window.location.href = '/login';

  }
  updateProfile(id: any){
    this.router.navigate(['update_user', this.currentUser.id]);
   
  }

}
