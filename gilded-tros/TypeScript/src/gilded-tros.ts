import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    for (let { name, quality, sellIn } of this.items) {
      if (
        name != "Good Wine" &&
        name != "Backstage passes for Re:Factor" &&
        name != "Backstage passes for HAXX"
      ) {
        if (quality > 0 && name != "B-DAWG Keychain") {
          quality -= 1;
        }
      } else {
        if (quality < 50) {
          quality += 1;

          if (name == "Backstage passes for Re:Factor") {
            if (sellIn < 11) {
              quality += 1;
            }

            if (sellIn < 6) {
              quality += 1;
            }
          }
        }
      }

      if (name != "B-DAWG Keychain") {
        sellIn = sellIn - 1;
      }

      if (sellIn < 0) {
        if (name != "Good Wine") {
          if (
            name != "Backstage passes for Re:Factor" &&
            name != "Backstage passes for HAXX"
          ) {
            if (quality > 0 && name != "B-DAWG Keychain") {
              quality -= 1;
            }
          } else {
            quality = 0;
          }
        } else {
          if (quality < 50) {
            quality += 1;
          }
        }
      }
    }
  }
}
