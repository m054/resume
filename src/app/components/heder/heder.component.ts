import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-heder',
  imports: [MatIconModule, CommonModule],
  templateUrl: './heder.component.html',
  styleUrl: './heder.component.scss'
})
export class HederComponent {
  public isActive: boolean =false;

  public toggleMenu():void{
    this.isActive=!this.isActive;
  }
}
