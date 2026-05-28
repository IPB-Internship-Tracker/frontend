export const logout = (navigate) => {

    localStorage.removeItem(
        "isLoggedIn"
    );

    localStorage.removeItem(
        "role"
    );

    navigate("/");
};