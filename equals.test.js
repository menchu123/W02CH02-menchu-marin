const strictEquals = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (a < 1 && a > -1 && b < 1 && b > -1) {
  }
  return Object.is(a, b);
};

console.log(-0 < 1 && -0 > -1);
describe("function strictEquals", () => {
  test("when function strictEquals recieves 1 and 1, it returns true", () => {
    //Arrange
    const data1 = 1;
    const data2 = 1;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeTruthy();
  });

  test("when function strictEquals recieves NaN and NaN, it returns false", () => {
    //Arrange
    const data1 = NaN;
    const data2 = NaN;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeFalsy();
  });

  test("when function strictEquals recieves 0 and -0, it returns true", () => {
    //Arrange
    const data1 = 0;
    const data2 = -0;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeTruthy();
  });

  test("when function strictEquals recieves -0 and 0, it returns true", () => {
    //Arrange
    const data1 = -0;
    const data2 = 0;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeTruthy();
  });

  test("when function strictEquals recieves 1 and '1', it returns false", () => {
    //Arrange
    const data1 = 1;
    const data2 = "1";

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeFalsy();
  });

  test("when function strictEquals recieves true and false, it returns false", () => {
    //Arrange
    const data1 = true;
    const data2 = false;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeFalsy();
  });

  test("when function strictEquals recieves false and false, it returns true", () => {
    //Arrange
    const data1 = false;
    const data2 = false;

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeTruthy();
  });

  test("when function strictEquals recieves 'Water' and 'oil', it returns false", () => {
    //Arrange
    const data1 = "Water";
    const data2 = "oil";

    //Act
    const result = strictEquals(data1, data2);

    //Assert
    expect(result).toBeFalsy();
  });
});
