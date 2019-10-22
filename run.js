const express = require("express");
const path = require("path");
const outDir = path.resolve("./dist/" || process.env.OUT_DIR);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(`${outDir}`));

function runCommand(program) {
    let port = program.port ? program.port : 3000;

    app.get("/", function(req, res) {
        res.sendFile("/index.html");
    });

    app.listen(PORT);
    console.log(
        `\nGitfolio running on port ${PORT}, Navigate to http://localhost:${PORT} in your browser\n`
    );
}

module.exports = {
    runCommand
};