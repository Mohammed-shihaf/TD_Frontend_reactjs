import { expect } from "chai";
import { getWidgets } from "../src/widgets.js";

describe("getWidgets", () => {
  it("returns a fallback widgets array", () => {
    const widgets = getWidgets();
    expect(widgets).to.be.an("array").that.is.not.empty;
    expect(widgets[0]).to.have.property("label");
  });
});
