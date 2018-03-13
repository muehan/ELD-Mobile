import { Component } from "@angular/core";

class Country {
  constructor(public name: string) { }
}

let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];

@Component({
  selector: "eld-boulder-routes",
  templateUrl: './core/boulder-routes/boulder-routes.component.html',
  styleUrls: [
    './core/boulder-routes/boulder-routes.component.scss'
   ]
})

export class ELDBoulderRoutesComponent {
  public countries: Array<Country>;

    constructor() {

        console.log('welcome to the list component');

        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}