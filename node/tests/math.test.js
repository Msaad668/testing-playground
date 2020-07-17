const calculateTips = require("../math");

it("calc tip correcttly", () => {
  const tip = calculateTips(10, 0.2);

  if (tip !== 2) {
    throw new Error("this is an eeror");
  }
});
