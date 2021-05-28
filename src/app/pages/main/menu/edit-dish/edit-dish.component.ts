import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderService } from 'src/app/services/loader.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {

  constructor(
    public dialoRef: MatDialogRef<EditDishComponent>,
    private menuService: MenuService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceLoader: LoaderService
  ) { }
  modelName: string;
  dishName;
  dishMenuId;
  ngOnInit(): void {
    this.dishName = this.data.DayValue.split('|')[0];
    this.dishMenuId = +this.data.DayValue.split('|')[1];
  }

  clickButton(value) {
    if (value === 'cancel') {
      this.dialoRef.close();
    }
    if (value === 'save') {
      this.serviceLoader.show();
      this.menuService.editDishMenu(this.dishMenuId, {DishName: this.modelName}).subscribe(res => {
        this.serviceLoader.hide();
        this.dialoRef.close();
      }, () => {
        this.serviceLoader.hide();
      });

    }
  }

}
