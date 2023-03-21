module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      const { name } = item;
      let { sellIn, quality } = item;

      switch (name) {
        case "Sulfuras, Hand of Ragnaros":
          return;
        case "Aged Brie":
          if (sellIn <= 0) quality += 1;
          quality += 1;
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          quality += 1;
          if (sellIn <= 10) quality += 1;
          if (sellIn <= 5) quality += 1;
          break;
        default:
          if (sellIn <= 0) quality -= 1;
          quality -= 1;
      }

      if (quality < 0) quality = 0;
      if (quality > 50) quality = 50;

      sellIn -= 1;

      this.items[index] = { name, sellIn, quality };
    });

    return this.items;
  }
};
