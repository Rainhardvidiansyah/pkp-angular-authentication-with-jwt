export interface LoginPayload{
  email: string;
  password: string
}

export interface LoginResponse{
  statusCode: number;
  message: string;
  data: {
    id: string;
    email: string;
    roles: string[];
    access_token: string;
  };
}


export interface UserProfile {
  id: string;
  email: string;
  roles: string[];
}

export interface ProfileResponse {
  statusCode: number;
  message: string;
  data: {
    message: string;
    user: UserProfile;
  };
}