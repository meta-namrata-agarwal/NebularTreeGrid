import { Component } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' }
    },
    {
      data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 }
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 }
    }
  ];
}
