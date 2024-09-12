
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/Router';
import { AuthService } from './auth.service.service'; // Corrija o caminho se necessário

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
