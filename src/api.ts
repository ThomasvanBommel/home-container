let api: { [key: string]: (req: Express.Request, res: Express.Response) => string } = {
    default:    () => "404 Not found.",

    date:       () => new Date().toLocaleDateString("en-US", {timeZone: "America/Halifax"}),
    datetime:   () => new Date().toLocaleString("en-US", {timeZone: "America/Halifax"}),
    login:      (req: Express.Request, res: Express.Response) => "Login page: ",
    register:   (req: Express.Request, res: Express.Response) => "Registration page",
    time:       () => new Date().toLocaleTimeString("en-US", {timeZone: "America/Halifax"}),
};

export default api;