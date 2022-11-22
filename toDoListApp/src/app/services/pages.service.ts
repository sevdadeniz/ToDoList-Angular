import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public welcome:string="Welcome ToDo App";
  constructor() { }
}
