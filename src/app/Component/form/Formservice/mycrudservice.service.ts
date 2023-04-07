import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycrudserviceService {

  items: string[] = [];


  constructor() {

  }
  addItem(item: string) {
    this.items.push(item);
  }
  getdata() {
    return this.items
  }
  remove(index: number) {
    this.items.splice(index, 1)
  }

  update(index: number, newItem: string) {
    console.log(index)
    this.items[index] = newItem;

  }

}
