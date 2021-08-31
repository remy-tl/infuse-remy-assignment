const { express } = require("./config");

const router = express.Router();

router.post(
  "/data",
  express.raw({
    type: ["application/octet-stream", "text/plain"],
  }),
  (req, res) => {
    let buf;
    try {
      buf = Buffer.from(req.body);
    } catch (e) {
      return res.status(400).send("Request data is not a buffer!");
    }

    const string = buf.toString();
    const reversed = string.split("").reverse().join("");

    res.set({ "Content-Type": "text/plain" });
    return res.send(reversed);
  }
);

module.exports = router;
