import { Component, ElementRef, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { LayoutService } from 'src/app/services/layout.service';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { BarDto } from '../models/BarDto';
import { OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'bardemo',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']

})
export class barComponent implements OnInit {

    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    items: MenuItem[] | undefined=[];
    
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, public authService:AuthService, public sidebarService:SidebarService ,  public el:ElementRef) {
        
    }


    async ngOnInit() { 

        try {
            // Convert the observable to a promise
            const observable = this.sidebarService.getBars();
            // Convert the observable to a promise using firstValueFrom
            const response: BarDto[] = await lastValueFrom(observable);
            // Process the response and populate a new array with the response items
            const newItems = response.map(item => ({ label: item.title, id:item.id, isClicked:false}));
        
            // Concatenate the new items with the additional items
            this.items = this.items.concat(newItems);
            console.log(JSON.stringify(this.items,null,2))

        
        } catch (error) {
            console.error('Error occurred:', error);
        }
        
    }
}
