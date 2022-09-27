import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 9/27 3pm
  // *** used to display/hide the select list ***
  showSelect: boolean = true;
  // this represents the Item table
  items: any[] = [
    { id: 1, description: "Item 1" },
    { id: 2, description: "Item 2" },
    { id: 3, description: "Item 3" },
    { id: 4, description: "Item 4" }
  ]
  // This holds the values from the option tags
  // that have been selected on the page
  selections: any[] = [];
  // this holds each item selected
  quotelines: any[] = [];
  // This simulates reading the database
  // to get an Item by Primary Key and 
  // returning an instance of it.
  GetItemByPk(id: number) {
    for (let i of this.items) {
      if (id == i.id) {
        return i;
      }
    }
  }
  // This function reads all the ids selected
  // then reads the Item table for that id
  // and stored each item read in the quotelines
  // collection
  display(): void {
    console.log(this.selections);
    for (let id of this.selections) {
      let quoteLine = this.GetItemByPk(id);
      this.quotelines.push(quoteLine);
    }
    console.table(this.quotelines);
    // 9/27 3pm 
    // *** this causes the select list to disappear ***
    this.showSelect = false
  }
}
