// export interface User {
//   id:             string;
//   oAuthId:        string;
//   username:       string;
//   email:          string;
//   avatar:         string;
//   roles:          string[]
// }

export interface User {
  id: string;
  oAuthId: string;
  username: string;
  email: string;
  avatar: string;
  roles: string[];
  joinedToServer: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  id:             string;
  oAuthId:        string;
  username:       string;
  email:          string;
  avatar:         string;
  roles:          string[];
  joinedToServer: boolean;
  isActive:       boolean;
  createdAt:      string;
  updatedAt:      string;
  token:          string;
}

// error
export interface ErrorResponse {
  message: string | string[]
  error: string
  statusCode: number
}

// token
export interface CheckAuthStatusResponse {
  user:  User;
  token: string;
}

export interface AccessTokenResponse {
  access_token: string;
  token_type:   string;
  expires_in:   number;
}

export interface LoginProfileResponse {
  id:             string;
  oAuthId:        string;
  username:       string;
  email:          string;
  avatar:         string;
  roles:          string[];
  joinedToServer: boolean;
  isActive:       boolean;
  createdAt:      string;
  updatedAt:      string;
  token:          string;
}

// draws
export interface DrawsResponse {
  id:          string;
  name:        string;
  startDate:   string;
  finalDate:   string;
  createdAt:   string;
  updatedAt:   string;
  winningUser: null;
  user:        User;
}

// participants
export interface CreateParticipantResponse {
  user:            User;
  draw:            DrawsResponse;
  id:              string;
  participantDate: string;
}

export interface ParticipantsDrawResponse {
  id:              string;
  participantDate: string;
  user: {
    id: string;
    username: string;
  }
}

