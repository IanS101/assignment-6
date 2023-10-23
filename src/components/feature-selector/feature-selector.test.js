import { cleanup, render } from "@testing-library/react";
import { FeatureSelector } from "./feature-selector";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("FeatureSelector renders without error", () => {
  // Arrange
  const content = {};

  // Act
  render(<FeatureSelector />);
});
