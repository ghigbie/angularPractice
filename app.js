const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;
        
app.get("/", (req, res) =>{
    console.log("You hit the landing page!");
    res.send("This is the landing page!");
});

app.get("/data", (req, res) => {
    res.render("databinding.html");
});

        
app.listen(port, ip, () => {
    console.log(`Express server is listening on port ${port}`);
});