import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExplorerSettingsService {
  size: "large" | "small" | undefined;
}
