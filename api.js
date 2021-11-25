module.exports = {
    default:    () => "404 Not found.",
    login:      (req, res) => "Login page: ",
    register:   (req, res) => "Registration page",
    time:       () => new Date(),
};