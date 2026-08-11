import { expect } from "chai";
import { themeStyles } from "../src/widgets.js";

describe("themeStyles", () => {
  it("maps a tenant's primary color into inline styles", () => {
    expect(themeStyles({ primaryColor: "#2563eb" })).to.deep.equal({
      background: "#2563eb",
      color: "#ffffff",
    });
  });
});
