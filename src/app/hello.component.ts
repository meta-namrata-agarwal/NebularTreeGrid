import { Component } from '@angular/core';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface parentEntry {
  key: number,
  slotName: string,
  slotNumber: 6,
  slotElective: boolean,
  slotPaperStructureDTO: FSEntry;
}

interface FSEntry {
  name: string;
  expanded?: boolean;
  entity: string;
  code: string;
  elective: boolean;
  selected: boolean;
  slotPaperStructures?: FSEntry[];
}



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customColumn = 'slotname';
  defaultColumns = ['name', 'entity', 'code', 'elective'];
  allColumns = [this.customColumn, ...this.defaultColumns];
   debugger; 
  source: NbTreeGridDataSource<parentEntry>;
   debugger; 
  constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<parentEntry>) {
   
    const getters: NbGetters<parentEntry, parentEntry> = {
      dataGetter: 
      (node: parentEntry["slotPaperStructureDTO"]) =>
       node,
      childrenGetter: (node: parentEntry["slotPaperStructureDTO"]) => node.slotPaperStructureDTO.slotPaperStructures || undefined,
      // expandedGetter: (node: FSEntry) => !!node.expanded,
    };
    this.source = dataSourceBuilder.create(this.datas, getters);
  }

  toggle(checked: boolean) {
    checked = !checked;
  }
  datas: parentEntry[] = [{
    "key": 6,
    "slotName": "Extra Curricular Activities",
    "slotNumber": 6,
    "slotPaperStructureDTO": {
      "entity": "PAPER",
      "name": null,
      "code": null,
      "elective": true,
      "slotPaperStructures": [
        {
          "entity": "PAPER",
          "name": "NCC-ACTIVITY",
          "code": "ECA-NCC",
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "name": "NSS-ACTIVITY",
          "code": "ECA-NSS",
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "name": "SPORTS",
          "code": "ECA-SPORTS",
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "name": "CULTURAL ACTIVITY",
          "code": "ECA-CUA",
          "slotPaperStructures": [],
          "elective": true
        }
      ],
    }
  }]


}
