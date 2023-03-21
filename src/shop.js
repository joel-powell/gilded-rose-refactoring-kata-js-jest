module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      const { name } = item;
      let { sellIn, quality } = item;

      quality -= 1;

      if (quality < 0) quality = 0;

      sellIn -= 1;

      this.items[index] = { name, sellIn, quality };
    });

    return this.items;
  }
};
