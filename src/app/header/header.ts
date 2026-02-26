import { Component } from '@angular/core';
import {  } from '@angular/material';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isVisibleAside:boolean = false;
  isVisibleSearch:boolean =false;
  isVisibleMenu:boolean =false;
  toggleVisibilityAside(){
    this.isVisibleAside = !this.isVisibleAside
  }
  toggleVisibilitySearch(){
    this.isVisibleSearch = !this.isVisibleSearch
  }
  toggleVisibilityMenu(){
    this.isVisibleMenu = !this.isVisibleMenu
  }
}
