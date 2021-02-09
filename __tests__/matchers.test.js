describe("Comparadores comunes", () => {
    const user = {
        name: "Fabri",
        lastname: "Palavecino"
    }
    const user2 = {
        name: "Fabri2",
        lastname: "Palavecino2"
    }
    test("igualdad de elementos", ()=> {
        expect(user).toEqual(user2);
    })

    test("No son exactamente iguales",() => {
        expect(user).not.toEqual(user2);
    })
})