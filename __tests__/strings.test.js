describe("Comprobar cadenas de texto", () => {
  const text = "Un texto";

  test("debe contener el siguiente texto", () => {
    expect(text).toMatch(/texto/);
  });

  test("No contiene el siguiente texto", () => {
    expect(text).not.toMatch(/es/);
  });

  test("comprobar el tamaño del texto", () => {
    expect(text).toHaveLength(8);
  });
});
