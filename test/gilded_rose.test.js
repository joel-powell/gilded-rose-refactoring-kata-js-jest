const Shop = require("../src/shop");
const Item = require("../src/item");

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("+5 Dexterity Vest", () => {
    it("should lose 1 quality per day before sell by", () => {
      const items = [new Item("+5 Dexterity Vest", 10, 20)];
      const gildedRose = new Shop(items);
      Array.from({ length: 10 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(10);
    });

    it("should not go into negative quality", () => {
      const items = [new Item("+5 Dexterity Vest", 10, 20)];
      const gildedRose = new Shop(items);
      Array.from({ length: 30 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(0);
    });

    it("should lose quality twice as fast when beyond sell by date", () => {
      const items = [new Item("+5 Dexterity Vest", 10, 20)];
      const gildedRose = new Shop(items);
      Array.from({ length: 12 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(6);
    });
  });

  describe("Aged Brie", () => {
    it("should gain 1 quality per day before sell by", () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const gildedRose = new Shop(items);
      Array.from({ length: 2 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(2);
    });

    it("should not exceed quality of 50", () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const gildedRose = new Shop(items);
      Array.from({ length: 100 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(50);
    });

    it("should gain quality twice as fast when beyond sell by date", () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const gildedRose = new Shop(items);
      Array.from({ length: 4 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(6);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not change before sell by", () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
      const gildedRose = new Shop(items);
      Array.from({ length: 2 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(0);
    });

    it("should not change after sell by", () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
      const gildedRose = new Shop(items);
      Array.from({ length: 100 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("should gain 1 quality per day if more than 10 days remaining", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ];
      const gildedRose = new Shop(items);
      Array.from({ length: 2 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(22);
    });

    it("should gain 2 quality per day if 10 days or less but more than 5 remaining", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      ];
      const gildedRose = new Shop(items);
      Array.from({ length: 2 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(24);
    });

    it("should gain 3 quality per day if 5 days or less remaining", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      ];
      const gildedRose = new Shop(items);
      Array.from({ length: 2 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(26);
    });

    it("should not exceed quality of 50", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 49),
      ];
      const gildedRose = new Shop(items);
      Array.from({ length: 5 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(50);
    });

    it("should have a quality of 0 beyond sell by", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20),
      ];
      const gildedRose = new Shop(items);
      Array.from({ length: 4 }).forEach(() => gildedRose.updateQuality());
      expect(items[0].quality).toBe(0);
    });
  });
});
