import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Item } from '../models/item';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Item[] = [];
  private ITEM_STORAGE: string = "items";

  constructor() { }

  public async addItem(newItem: Item) {
    this.items.unshift(newItem);
    this.addNewItemToList();
  }

  public async addNewItemToList() {
    Storage.set({
      key: this.ITEM_STORAGE,
      value: JSON.stringify(this.items)
    });
  }

  public async loadSaved() {
    const items = await Storage.get({ key: this.ITEM_STORAGE });
    this.items = JSON.parse(items.value) || [];

    return this.items;
  }

  public async deleteItem(index: number) {
    //Remove from array
    this.items.splice(index, 1);

    //Save in local storage
    this.addNewItemToList();
  }

}
