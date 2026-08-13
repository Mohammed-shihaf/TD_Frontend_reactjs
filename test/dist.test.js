import { expect } from "chai";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { getWidgets, classifyWidgetCount } = require("../dist/index.cjs");

describe("built CJS artifact (dist/index.cjs)", () => {
  it("is consumable via require() and works", () => {
    expect(getWidgets()).to.be.an("array").that.is.not.empty;
    expect(classifyWidgetCount(3)).to.equal("small");
  });
});
