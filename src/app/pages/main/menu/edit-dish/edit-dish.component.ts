import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {

  constructor(
    public dialoRef: MatDialogRef<EditDishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  model;
  ngOnInit(): void {
    this.model = this.data;
    console.log(this.model);

  }

  clickButton(value) {
    if (value === 'cancel') {
      this.dialoRef.close();
    }
    if (value === 'save') {
      this.dialoRef.close();
    }
  }

}
