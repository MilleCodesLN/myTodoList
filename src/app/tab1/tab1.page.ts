import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: Item[];

  constructor(
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadSaved().then(items => this.items = items);
    // this.items = this.itemService.loadSaved();
  }




  public async deleteItem(index: number) {
    this.itemService.deleteItem(index);
  }
}

