import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { CurrentUser } from '../models/User';

@Component({
  selector: 'app-consultationbilans',
  templateUrl: './consultationbilans.component.html',
  styleUrls: ['./consultationbilans.component.css']
})
export class ConsultationbilansComponent {
  isLoggedIn = false;
  isAdmin = false;
  isClient = false;
  filteredData: any[] = [];// Form group to handle filter inputs

   currentUser!: CurrentUser;
   constructor(private authService: AccountService,private router: Router) {
    this.filteredData = [
      {
        logo: 'https://www.justifit.fr/wp-content/uploads/2021/05/abbe-sublett-nxZDMUQhN4o-unsplash-1300x864.jpg',
        raisonSociale: 'Entreprise A',
        anneeReporting: '2023',
        datePublication: '2023-07-17',
      },
      
    
      // Add more bilan items as needed
    ];
   }
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

   goToConsulter() {
    this.router.navigate(['/consulter']);
}

goToTableauDeclaration() {
    this.router.navigate(['/tableaux']);
}

goToInformations() {
    this.router.navigate(['/informations']);
}
goToMethodologie(){
  this.router.navigate(['/methodologie']);
}
goToPresentation(){
  this.router.navigate(['/presentation']);
}

goToPlans(){
  this.router.navigate(['/plans']);
}
 }
 