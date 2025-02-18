const express = require("express");
const cors = require("cors");
const { tiktokdl } = require('tiktokdl') 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/"), (req,res) => {
    res.send("App is running")
}

app.post("/download", async(req, res) => {
    const url = req.body.url;
    // console.log(url)
    // if (!url || !url.includes("facebook.com")) {
    //     return res.status(400).json({ error: "Invalid Facebook URL" });
    // }

    try {

        const data = await tiktokdl(url)
        console.log(data)
        res.send("Hello")

        // facebook(url,false)
        // .then(videoUrl => 
        //     res.json({ videoUrl})
        // )
        // .catch(error => 
        //     res.status(404).json({ error })
        // );
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch video URL" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
