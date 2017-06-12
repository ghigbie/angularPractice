const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;
        
app.listen(port, ip, () => {
    console.log(`Express server is listening on port ${port}`);
});