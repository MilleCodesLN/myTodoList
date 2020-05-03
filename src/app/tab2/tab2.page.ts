import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemContent: string;
  itemAuthor: string;

  constructor(
    public itemService: ItemService,
    private _router: Router
  ) { }

  public async addItem() {
    let newItem: Item = {
      content: this.itemContent,
      author: this.itemAuthor
    }
    this.itemService.addItem(newItem);
    this.itemContent = "";
    this.itemAuthor = "";


  }

}
