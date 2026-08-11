import { expect } from "chai";
import { classifyOrderSize } from "../src/widgets.js";

describe("classifyOrderSize", () => {
  it("classifies order counts into buckets", () => {
    expect(classifyOrderSize(0)).to.equal("empty");
    expect(classifyOrderSize(3)).to.equal("small");
    expect(classifyOrderSize(10)).to.equal("medium");
    expect(classifyOrderSize(25)).to.equal("large");
  });
});
