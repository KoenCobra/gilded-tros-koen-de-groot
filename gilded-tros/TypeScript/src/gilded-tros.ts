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
        if (quality > 0) {
          if (name != "B-DAWG Keychain") {
            quality = quality - 1;
          }
        }
      } else {
        if (quality < 50) {
          quality = quality + 1;

          if (name == "Backstage passes for Re:Factor") {
            if (sellIn < 11) {
              if (quality < 50) {
                quality = quality + 1;
              }
            }

            if (sellIn < 6) {
              if (quality < 50) {
                quality = quality + 1;
              }
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
            name != "Backstage passes for Re:Factor" ||
            name != "Backstage passes for HAXX"
          ) {
            if (quality > 0) {
              if (name != "B-DAWG Keychain") {
                quality = quality - 1;
              }
            }
          } else {
            quality = quality - quality;
          }
        } else {
          if (quality < 50) {
            quality = quality + 1;
          }
        }
      }
    }
  }
}
