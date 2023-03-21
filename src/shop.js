module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      const { name } = item;
      if (name === "Sulfuras, Hand of Ragnaros") return;
      let { sellIn, quality } = item;

      switch (name) {
        case "Aged Brie":
          quality += 1;
          break;
        default:
          if (sellIn <= 0) quality -= 1;
          quality -= 1;
      }

      if (quality < 0) quality = 0;

      sellIn -= 1;

      this.items[index] = { name, sellIn, quality };
    });

    return this.items;
  }
};
