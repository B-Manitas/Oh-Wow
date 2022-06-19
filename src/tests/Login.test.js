import Login from "../model/Connection/Login"

test("Get Authentication code", () => {
    expect(/^[0-9]{6}$/.test(Login.getAuthcode())).toBe(true);
})