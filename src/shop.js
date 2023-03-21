module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      let { name, sellIn, quality } = item;

      quality -= 1;

      sellIn -= 1;

      this.items[index] = { name, sellIn, quality };
    });

    return this.items;
  }
};
