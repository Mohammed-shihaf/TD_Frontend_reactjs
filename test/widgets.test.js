import { expect } from "chai";
import { pickPrimaryTextColor } from "../src/widgets.js";

describe("pickPrimaryTextColor", () => {
  it("picks white text on the standard primary blue", () => {
    expect(pickPrimaryTextColor({ color: { primary: "#2563eb" } })).to.equal("#ffffff");
  });
  it("picks black text on any other primary color", () => {
    expect(pickPrimaryTextColor({ color: { primary: "#fbbf24" } })).to.equal("#000000");
  });
});
