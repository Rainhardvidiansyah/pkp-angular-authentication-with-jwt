import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../../data/services/auth.service";
import { LoginPayload } from "../../../core/models/auth.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  payload: LoginPayload = {
    email: '',
    password: ''
  }

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ){}


  onLogin(){

    this.isLoading = true;
    this.errorMessage = ''
    
    this.authService.login(this.payload).subscribe({
      next: (res) => {
        
        localStorage.setItem('access_token', res.data.access_token);
        this.isLoading = false;
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        if(error instanceof Error){
          this.errorMessage = 'Failed to log the user in';
          this.isLoading = false
        }
      }
    })
  }

  

}