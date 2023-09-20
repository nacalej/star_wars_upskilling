const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database");
const PORT = 8004;
//Film.list().then((res) => console.log(res));
//Character.get(1).then((res) => console.log(res));
//Character.insert({name:"Luke Skywalker"}).then((res) => console.log(res));

server.listen(PORT, () => {
    console.log(`Database service listening on port ${PORT}`);
});