import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit 
{
  // ----------------------------------------------------------------------
  // - Properties :

  menuActive! : boolean

  // ----------------------------------------------------------------------
  // - Constructor :

  constructor() { }

  // ----------------------------------------------------------------------
  // - Methods :

  ngOnInit(): void 
  {
    this.menuActive = false
  }

  menuTrigger()
  {
    this.menuActive = !this.menuActive
  }
}