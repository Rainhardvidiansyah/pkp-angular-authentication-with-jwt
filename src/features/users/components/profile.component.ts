import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../data/services/auth.service";
import { CommonModule } from "@angular/common";
import { UserProfile } from "../../../core/models/auth.model";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  profile: UserProfile | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(private readonly authService: AuthService){}



    ngOnInit(): void {
        this.loadProfile();
    }

    loadProfile(): void{

      this.isLoading = true;

      this.authService.getProfile().subscribe({
        next: (res) => {
          console.log(res)
          this.profile = res.data.user;
          this.isLoading = false;
        },
        error: (error) => {
          if(error instanceof Error){
            console.log(error.message)
          }
          this.errorMessage = 'Failed to load user profile';
          this.isLoading = true;
        }
      })
    }
}