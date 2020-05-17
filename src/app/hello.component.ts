import { Component } from '@angular/core';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface parentEntry {
  key: number,
  slotName: string,
  slotNumber: number,
  slotElective: boolean,
  slotPaperStructureDTO: FSEntry;
}

interface FSEntry {
  name: string;
  expanded?: boolean;
  entity: string;
  code: string;
  elective: boolean;
  "paperProgramType": string;
  key: number;
  "minCount": number;
  "maxCount": number;
  "credits": number;
  "totalContactHours": number;
  paperCategory: string;
  slotPaperStructures?: FSEntry[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  customColumn = 'name';
  defaultColumns = [];
  allColumns = [this.customColumn, ...this.defaultColumns];
  source: NbTreeGridDataSource<FSEntry>;
  constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    const getters: NbGetters<FSEntry, FSEntry> = {
      dataGetter: (node: FSEntry) => node,
      childrenGetter: (node: FSEntry) => node.slotPaperStructures || undefined,
      expandedGetter: (node: FSEntry) => !!node.expanded,
    };
    // this.getChuldStructure(item);
    this.source = dataSourceBuilder.create(this.test, getters);
    console.log(this.source);
  }

  toggle(checked: boolean) {
    checked = !checked;
  }

test: FSEntry[] =[];
private getChuldStructure(data:any):any{
  this.test=data.slotPaperStructureDTO.slotPaperStructures;
  console.log(this.test);
  return;
}
  datas: parentEntry[] = [{
    "key": 6,
    "slotName": "Extra Curricular Activities",
    "slotNumber": 6,
    "slotElective": true,
    "slotPaperStructureDTO":  {
      "entity": "PAPER",
      "key": null,
      "name": null,
      "minCount": 1,
      "maxCount": 1,
      "code": null,
      "credits": null,
      "paperCategory": null,
      "paperProgramType": null,
      "totalContactHours": null,
      "slotPaperStructures": [
        {
          "entity": "PAPER",
          "key": 6753657907841295,
          "name": "NCC-ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-NCC",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841296,
          "name": "NSS-ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-NSS",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841321,
          "name": "SPORTS",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-SPORTS",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841324,
          "name": "CULTURAL ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-CUA",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        }
      ],
      "elective": true
    }
  }]

  dataAll: FSEntry[] = [
    {
      "entity": "PAPER",
      "key": null,
      "name": null,
      "minCount": 1,
      "maxCount": 1,
      "code": null,
      "credits": null,
      "paperCategory": null,
      "paperProgramType": null,
      "totalContactHours": null,
      "slotPaperStructures": [
        {
          "entity": "PAPER",
          "key": 121080,
          "name": "HINDI",
          "minCount": null,
          "maxCount": null,
          "code": "FHI100",
          "credits": null,
          "paperCategory": "THEORY",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 121114,
          "name": "FRENCH GRAMMAR, COMPREHENSION & PARAGRAPH WRITING",
          "minCount": null,
          "maxCount": null,
          "code": "FFR100",
          "credits": null,
          "paperCategory": "THEORY",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 133095,
          "name": "GERMAN GRAMMAR, COMPREHENSION AND EXPRESSION",
          "minCount": null,
          "maxCount": null,
          "code": "FGR100",
          "credits": null,
          "paperCategory": "THEORY",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        }
      ],
      "elective": true

    },
    {
      "entity": "PAPER",
      "key": null,
      "name": null,
      "minCount": 1,
      "maxCount": 1,
      "code": null,
      "credits": null,
      "paperCategory": null,
      "paperProgramType": null,
      "totalContactHours": null,
      "slotPaperStructures": [
        {
          "entity": "PAPER",
          "key": 6753657907841295,
          "name": "NCC-ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-NCC",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841296,
          "name": "NSS-ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-NSS",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841321,
          "name": "SPORTS",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-SPORTS",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        },
        {
          "entity": "PAPER",
          "key": 6753657907841324,
          "name": "CULTURAL ACTIVITY",
          "minCount": null,
          "maxCount": null,
          "code": "ECA-CUA",
          "credits": 2.0,
          "paperCategory": "NONE",
          "paperProgramType": "UNDERGRADUATE",
          "totalContactHours": null,
          "slotPaperStructures": [],
          "elective": true
        }
      ],
      "elective": true
    }
  ]

  mscData: FSEntry[] = [
    {
      "name": "MIT(PG)3",
      "key": 90,
      "code": null,
      "maxCount": null,
      "credits": null,
      "elective": false,
      "paperCategory": null,
      "slotPaperStructures": [
        {
          "name": "MIT322-325",
          "key": 92,
          "code": "MIT322-325",
          "maxCount": 1,
          "credits": null,
          "elective": true,
          "paperCategory": null,
          "slotPaperStructures": [
            {
              "name": "MIT322-325-A",
              "key": 93,
              "code": "MIT322-325-A",
              "maxCount": null,
              "credits": null,
              "elective": false,
              "paperCategory": null,
              "slotPaperStructures": [
                {
                  "name": "ADVANCED JAVA PROGRAMMING LAB",
                  "key": 133127,
                  "code": "MIT325A",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "PRACTICAL",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                },
                {
                  "name": "ADVANCED JAVA PROGRAMMING",
                  "key": 5952139499667456,
                  "code": "MIT322A",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "THEORY",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                }
              ],
              "paperProgramType": null,
              "minCount": null,
              "totalContactHours": null,
              "entity": "PAPERSET"
            },
            {
              "name": "MIT322-325-B",
              "key": 94,
              "code": "MIT322-325-B",
              "maxCount": null,
              "credits": null,
              "elective": false,
              "paperCategory": null,
              "slotPaperStructures": [
                {
                  "name": "BIOINFORMATICS LAB",
                  "key": 127153,
                  "code": "MIT325B",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "PRACTICAL",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                },
                {
                  "name": "BIOINFORMATICS",
                  "key": 4809964552454144,
                  "code": "MIT322B",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "THEORY",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                }
              ],
              "paperProgramType": null,
              "minCount": null,
              "totalContactHours": null,
              "entity": "PAPERSET"
            },
            {
              "name": "MIT322-325-C",
              "key": 95,
              "code": "MIT322-325-C",
              "maxCount": null,
              "credits": null,
              "elective": false,
              "paperCategory": null,
              "slotPaperStructures": [
                {
                  "name": "GEOGRAPHICAL INFORMATION SYSTEMS LAB",
                  "key": 128126,
                  "code": "MIT325C",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "PRACTICAL",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                },
                {
                  "name": "GEOGRAPHICAL INFORMATION SYSTEMS",
                  "key": 5385437087006720,
                  "code": "MIT322C",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "THEORY",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                }
              ],
              "paperProgramType": null,
              "minCount": null,
              "totalContactHours": null,
              "entity": "PAPERSET"
            },
            {
              "name": "MIT322-325-D",
              "key": 96,
              "code": "MIT322-325-D",
              "maxCount": null,
              "credits": null,
              "elective": false,
              "paperCategory": null,
              "slotPaperStructures": [
                {
                  "name": "SOFTWARE TESTING AND QUALITY MANAGEMENT LAB",
                  "key": 129154,
                  "code": "MIT325D",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "PRACTICAL",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                },
                {
                  "name": "SOFTWARE TESTING AND QUALITY MANAGEMENT",
                  "key": 6127365843845120,
                  "code": "MIT322D",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "THEORY",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                }
              ],
              "paperProgramType": null,
              "minCount": null,
              "totalContactHours": null,
              "entity": "PAPERSET"
            },
            {
              "name": "MIT322-325-E",
              "key": 97,
              "code": "MIT322-325-E",
              "maxCount": null,
              "credits": null,
              "elective": false,
              "paperCategory": null,
              "slotPaperStructures": [
                {
                  "name": "E-COMMERCE APPLICATION DEVELOPMENT LAB",
                  "key": 119157,
                  "code": "MIT325E",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "PRACTICAL",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                },
                {
                  "name": "E-COMMERCE APPLICATION DEVELOPMENT",
                  "key": 5447413397979136,
                  "code": "MIT322E",
                  "maxCount": null,
                  "credits": null,
                  "elective": false,
                  "paperCategory": "THEORY",
                  "slotPaperStructures": [],
                  "paperProgramType": "POSTGRADUATE",
                  "minCount": null,
                  "totalContactHours": null,
                  "entity": "PAPER"
                }
              ],
              "paperProgramType": null,
              "minCount": null,
              "totalContactHours": null,
              "entity": "PAPERSET"
            }
          ],
          "paperProgramType": null,
          "minCount": 1,
          "totalContactHours": null,
          "entity": "PAPERSET"
        },
        {
          "name": "WEB TECHNOLOGIES",
          "key": 119156,
          "code": "MIT324",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "THEORY",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        },
        {
          "name": "THEORY OF COMPUTATION",
          "key": 122140,
          "code": "MIT321",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "THEORY",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        },
        {
          "name": "MINOR PROJECT",
          "key": 122141,
          "code": "MIT328",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "PROJECT",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        },
        {
          "name": "CRYPTOLOGY & INFORMATION SECURITY",
          "key": 126143,
          "code": "MIT323",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "THEORY",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        },
        {
          "name": "GUI PROGRAMMING LAB",
          "key": 130151,
          "code": "MIT326",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "PRACTICAL",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        },
        {
          "name": "WEB TECHNOLOGIES LAB",
          "key": 132135,
          "code": "MIT327",
          "maxCount": null,
          "credits": null,
          "elective": false,
          "paperCategory": "PRACTICAL",
          "slotPaperStructures": [],
          "paperProgramType": "POSTGRADUATE",
          "minCount": null,
          "totalContactHours": null,
          "entity": "PAPER"
        }
      ],
      "paperProgramType": null,
      "minCount": null,
      "totalContactHours": null,
      "entity": "PAPERSET"
    }
  ]
  mscDataWithParent:  parentEntry[] =  [
    {
      "key": 507,
      "slotNumber": 1,
      "slotPaperStructureDTO": {
        "name": "MIT(PG)3",
        "key": 90,
        "code": null,
        "maxCount": null,
        "credits": null,
        "elective": false,
        "paperCategory": null,
        "minCount": null,
        "slotPaperStructures": [
          {
            "name": "MIT322-325",
            "key": 92,
            "code": "MIT322-325",
            "maxCount": 1,
            "credits": null,
            "elective": true,
            "paperCategory": null,
            "minCount": 1,
            "slotPaperStructures": [
              {
                "name": "MIT322-325-A",
                "key": 93,
                "code": "MIT322-325-A",
                "maxCount": null,
                "credits": null,
                "elective": false,
                "paperCategory": null,
                "minCount": null,
                "slotPaperStructures": [
                  {
                    "name": "ADVANCED JAVA PROGRAMMING LAB",
                    "key": 133127,
                    "code": "MIT325A",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "PRACTICAL",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  },
                  {
                    "name": "ADVANCED JAVA PROGRAMMING",
                    "key": 5952139499667456,
                    "code": "MIT322A",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "THEORY",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  }
                ],
                "paperProgramType": null,
                "totalContactHours": null,
                "entity": "PAPERSET"
              },
              {
                "name": "MIT322-325-B",
                "key": 94,
                "code": "MIT322-325-B",
                "maxCount": null,
                "credits": null,
                "elective": false,
                "paperCategory": null,
                "minCount": null,
                "slotPaperStructures": [
                  {
                    "name": "BIOINFORMATICS LAB",
                    "key": 127153,
                    "code": "MIT325B",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "PRACTICAL",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  },
                  {
                    "name": "BIOINFORMATICS",
                    "key": 4809964552454144,
                    "code": "MIT322B",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "THEORY",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  }
                ],
                "paperProgramType": null,
                "totalContactHours": null,
                "entity": "PAPERSET"
              },
              {
                "name": "MIT322-325-C",
                "key": 95,
                "code": "MIT322-325-C",
                "maxCount": null,
                "credits": null,
                "elective": false,
                "paperCategory": null,
                "minCount": null,
                "slotPaperStructures": [
                  {
                    "name": "GEOGRAPHICAL INFORMATION SYSTEMS LAB",
                    "key": 128126,
                    "code": "MIT325C",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "PRACTICAL",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  },
                  {
                    "name": "GEOGRAPHICAL INFORMATION SYSTEMS",
                    "key": 5385437087006720,
                    "code": "MIT322C",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "THEORY",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  }
                ],
                "paperProgramType": null,
                "totalContactHours": null,
                "entity": "PAPERSET"
              },
              {
                "name": "MIT322-325-D",
                "key": 96,
                "code": "MIT322-325-D",
                "maxCount": null,
                "credits": null,
                "elective": false,
                "paperCategory": null,
                "minCount": null,
                "slotPaperStructures": [
                  {
                    "name": "SOFTWARE TESTING AND QUALITY MANAGEMENT LAB",
                    "key": 129154,
                    "code": "MIT325D",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "PRACTICAL",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  },
                  {
                    "name": "SOFTWARE TESTING AND QUALITY MANAGEMENT",
                    "key": 6127365843845120,
                    "code": "MIT322D",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "THEORY",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  }
                ],
                "paperProgramType": null,
                "totalContactHours": null,
                "entity": "PAPERSET"
              },
              {
                "name": "MIT322-325-E",
                "key": 97,
                "code": "MIT322-325-E",
                "maxCount": null,
                "credits": null,
                "elective": false,
                "paperCategory": null,
                "minCount": null,
                "slotPaperStructures": [
                  {
                    "name": "E-COMMERCE APPLICATION DEVELOPMENT LAB",
                    "key": 119157,
                    "code": "MIT325E",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "PRACTICAL",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  },
                  {
                    "name": "E-COMMERCE APPLICATION DEVELOPMENT",
                    "key": 5447413397979136,
                    "code": "MIT322E",
                    "maxCount": null,
                    "credits": null,
                    "elective": false,
                    "paperCategory": "THEORY",
                    "minCount": null,
                    "slotPaperStructures": [],
                    "paperProgramType": "POSTGRADUATE",
                    "totalContactHours": null,
                    "entity": "PAPER"
                  }
                ],
                "paperProgramType": null,
                "totalContactHours": null,
                "entity": "PAPERSET"
              }
            ],
            "paperProgramType": null,
            "totalContactHours": null,
            "entity": "PAPERSET"
          },
          {
            "name": "WEB TECHNOLOGIES",
            "key": 119156,
            "code": "MIT324",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "THEORY",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          },
          {
            "name": "THEORY OF COMPUTATION",
            "key": 122140,
            "code": "MIT321",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "THEORY",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          },
          {
            "name": "MINOR PROJECT",
            "key": 122141,
            "code": "MIT328",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "PROJECT",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          },
          {
            "name": "CRYPTOLOGY & INFORMATION SECURITY",
            "key": 126143,
            "code": "MIT323",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "THEORY",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          },
          {
            "name": "GUI PROGRAMMING LAB",
            "key": 130151,
            "code": "MIT326",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "PRACTICAL",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          },
          {
            "name": "WEB TECHNOLOGIES LAB",
            "key": 132135,
            "code": "MIT327",
            "maxCount": null,
            "credits": null,
            "elective": false,
            "paperCategory": "PRACTICAL",
            "minCount": null,
            "slotPaperStructures": [],
            "paperProgramType": "POSTGRADUATE",
            "totalContactHours": null,
            "entity": "PAPER"
          }
        ],
        "paperProgramType": null,
        "totalContactHours": null,
        "entity": "PAPERSET"
      },
      "slotElective": true,
      "slotName": "Core Papers"
    }
  ]

}
