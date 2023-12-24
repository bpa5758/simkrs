import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  sim = signal('SIMRS');
  ketSim = signal('SISTEM INFORMASI MANAJEMEN RUMAH SAKIT');
}
