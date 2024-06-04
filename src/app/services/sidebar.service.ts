import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import {lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MenuItem } from 'primeng/api';
import { MenuDto } from '../shared/models/MenuDto';
import { BarDto } from '../shared/models/BarDto';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItems: MenuItem[] | undefined=[];

  public sidebarVisible: boolean = true;

  constructor(private http: HttpClient) {}

  getBars() {
    return this.http.get<BarDto[]>(`${environment.appUrl}/api/authentication/get-bars`);
  }

  getBarByid(id:number) {
    return this.http.get<BarDto>(`${environment.appUrl}/api/authentication/get-bar/${id}`);
  }

  async getMenus(item:MenuItem, items:MenuItem[]){

    try {
        this.menuItems=[]
        // Convert the observable to a promise
        const observable = this.getBarByid(item.id);
        // Convert the observable to a promise using firstValueFrom
        const response: BarDto = await lastValueFrom(observable);
        for(const item of items){
            item.isClicked=false;
        }

        item.isClicked=!item.isClicked
        
        for(const menu of response.menusDto){
            let newItem: MenuItem;
            
                    if (menu.hasChild && menu.parentId == 0) {
                        const subMenuItems = await this.getSubMenuItems(menu.id, response.menusDto);
                        newItem = {
                            label: menu.name,
                            hasChild: true,
                            items: subMenuItems,

                        };
                    } 
                    else if (menu.parentId === 0) {
                        newItem = {
                            label: menu.name,
                            hasChild: false,
                            url:menu.name
                        };
                    }
  
                    if (newItem) {

                        this.menuItems.push(newItem);
                    }
        }
        console.log(JSON.stringify(this.menuItems,null,2))
    } 
    catch (error) {
        console.error('Error occurred:', error);
    }
  }

  private async getSubMenuItems(parentId: number, menus: MenuDto[]): Promise<MenuItem[]> {
    const subMenuItems: MenuItem[] = [];
    for (const menu of menus) {
        if (menu.parentId === parentId) {
            const subMenuItem: MenuItem = {
                label: menu.name,
                url:menu.name
            };
            if (menu.hasChild) {
                subMenuItem.hasChild=true
                subMenuItem.items = await this.getSubMenuItems(menu.id, menus);
            }
            else{
                subMenuItem.hasChild=false;
                subMenuItem.url=menu.name
            }
            subMenuItems.push(subMenuItem);
        }
    }
        return subMenuItems;
    }
}
