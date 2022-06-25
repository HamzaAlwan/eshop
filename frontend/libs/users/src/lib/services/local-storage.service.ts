import { Injectable } from '@angular/core';

const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN) || null;
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}
