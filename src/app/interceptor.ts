import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return next.handle(req.clone({
        url: 'http://localhost:3000/' + req.url
      }));
    }
    const headers = req.clone({
      url: 'http://localhost:3000/' + req.url,
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(headers);
  }
}
