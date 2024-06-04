import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
