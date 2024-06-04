import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebaritem',
  templateUrl: './sidebaritem.component.html',
  styleUrl: './sidebaritem.component.css'
})
export class SidebaritemComponent implements OnInit {
  @Input() item: any;
  constructor(public layoutService: LayoutService, public sidebarService:SidebarService) {
        
  }
  ngOnInit(): void {
    console.log('### ' +JSON.stringify(this.item,null,2))
  }

}
