import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;


  closeCallback(e): void {
    this.sidebarRef.close(e);
  }

  constructor(public layoutService: LayoutService, public authService:AuthService, public sidebarService:SidebarService ,  public el:ElementRef) {
        
  }
  ngOnInit(): void {
    console.log('##### sidebarService.menuItems ###'+ JSON.stringify(this.sidebarService.menuItems))
  }
}
