import { expect } from "chai";
import { getWidgets, classifyWidgetCount } from "../src/index.js";

describe("getWidgets", () => {
  it("returns a non-empty array of widgets", () => {
    const widgets = getWidgets();
    expect(widgets).to.be.an("array").that.is.not.empty;
    expect(widgets[0]).to.have.property("label");
  });
});

describe("classifyWidgetCount", () => {
  it("classifies counts into buckets", () => {
    expect(classifyWidgetCount(0)).to.equal("empty");
    expect(classifyWidgetCount(3)).to.equal("small");
    expect(classifyWidgetCount(10)).to.equal("medium");
    expect(classifyWidgetCount(25)).to.equal("large");
  });
});
