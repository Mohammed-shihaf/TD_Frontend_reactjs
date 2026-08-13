import { expect } from "chai";
import { run } from "../src/cli.js";

describe("cli", () => {
  it("prints a widgets summary", () => {
    const out = run([]);
    expect(out).to.match(/^widgets: \d+ \(\w+\)$/);
  });
});
