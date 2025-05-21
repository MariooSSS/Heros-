import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

interface Usuario {
  uid: string;
  nombre: string;
  email: string;
}

interface AuthResponse {
  ok: boolean;
  uid?: string;
  nombre?: string;
  email?: string;
  token?: string;
  msg?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _usuario: Usuario | null = null;
  private baseUrl: string = 'http://tu-api.com/api'; // Cambia esto por la URL de tu API
  
  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  // En una aplicación real, esto se conectaría a un backend
  // Aquí simulamos un login y registro para fines de demostración

  login(email: string, password: string) {
    // Simulación de login
    return of({
      ok: true,
      uid: '123',
      nombre: 'Usuario Demo',
      email: email,
      token: 'ABC123XYZ'
    }).pipe(
      tap(resp => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            uid: resp.uid!,
            nombre: resp.nombre!,
            email: resp.email!
          };
        }
      })
    );
    
    // En una aplicación real:
    // return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password })
    //   .pipe(
    //     tap(resp => {
    //       if (resp.ok) {
    //         localStorage.setItem('token', resp.token!);
    //         this._usuario = {
    //           uid: resp.uid!,
    //           nombre: resp.nombre!,
    //           email: resp.email!
    //         };
    //       }
    //     })
    //   );
  }

  registro(nombre: string, email: string, password: string) {
    // Simulación de registro
    return of({
      ok: true,
      uid: '456',
      nombre: nombre,
      email: email,
      token: 'DEF456UVW'
    }).pipe(
      tap(resp => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            uid: resp.uid!,
            nombre: resp.nombre!,
            email: resp.email!
          };
        }
      })
    );
    
    // En una aplicación real:
    // return this.http.post<AuthResponse>(`${this.baseUrl}/auth/nuevo`, { nombre, email, password })
    //   .pipe(
    //     tap(resp => {
    //       if (resp.ok) {
    //         localStorage.setItem('token', resp.token!);
    //         this._usuario = {
    //           uid: resp.uid!,
    //           nombre: resp.nombre!,
    //           email: resp.email!
    //         };
    //       }
    //     })
    //   );
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    
    // Simulación de validación de token
    if (token) {
      this._usuario = {
        uid: '123',
        nombre: 'Usuario Demo',
        email: 'demo@ejemplo.com'
      }
      return of(true);
    }
    
    return of(false);
    
    // En una aplicación real:
    // return this.http.get<AuthResponse>(`${this.baseUrl}/auth/renew`, {
    //   headers: {
    //     'x-token': token
    //   }
    // }).pipe(
    //   map(resp => {
    //     if (resp.ok) {
    //       localStorage.setItem('token', resp.token!);
    //       this._usuario = {
    //         uid: resp.uid!,
    //         nombre: resp.nombre!,
    //         email: resp.email!
    //       };
    //       return true;
    //     }
    //     return false;
    //   }),
    //   catchError(() => of(false))
    // );
  }

  logout() {
    localStorage.removeItem('token');
    this._usuario = null;
  }
}
