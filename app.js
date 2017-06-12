const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;
        
app.get("/", (req, res)=>{
    res.send("This is the landing page!");
});
        
app.listen(port, ip, () => {
    console.log(`Express server is listening on port ${port}`);
});