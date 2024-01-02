import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  socials: BehaviorSubject<boolean> = new BehaviorSubject(false);
  projects: BehaviorSubject<boolean> = new BehaviorSubject(false);
  contact: BehaviorSubject<boolean> = new BehaviorSubject(false);
  aboutMe: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
