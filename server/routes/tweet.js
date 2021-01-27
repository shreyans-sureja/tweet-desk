const router = require("express").Router();
const Twitter = require("twitter");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// get tweets of a user
router.get("/user=:handle", (req, res) => {
  var params = { screen_name: req.params.handle };

  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error) {
        return res.send(tweets);
      } else {
        return res.status(400).send("Error in connection!");
      }
    }
  );
});

// post a tweet
router.post("/", (req, res) => {
  let tweet = req.body.tweet;
  client
    .post("statuses/update", { status: tweet })
    .then(function (tweet) {
      return res.send(tweet);
    })
    .catch(function (error) {
      return res.status(400).send(error);
    });
});

// reply to perticular tweet
router.post("/reply", (req, res) => {
  var reply = {
    status: req.body.tweet,
    in_reply_to_status_id: "" + req.body.tid,
  };

  client.post("statuses/update", reply, (err, data, response) => {
    if (err) return res.status(400).send(data);

    return res.send(data);
  });
});

// get tweet with tweet id
router.get("/id=:tid", (req, res) => {
  let tweetId = req.params.tid;

  client.get(`statuses/show/:${tweetId}`, (err, data, response) => {
    if (err) return res.status(400).send(data);

    return res.send(data);
  });
});

// find mention in real time
router.get("/filter", (req, res) => {
  let handle = req.body.handle;

  client.stream("statuses/filter", { track: handle }, function (stream) {
    stream.on("data", function (event) {
    });

    stream.on("error", function (error) {
      throw error;
    });
  });
});

//user details
router.get("/profile/:handle", (req, res) => {
  var user = { screen_name: req.params.handle };

  client.get("users/show", user, (err, data, response) => {
    if (err) return res.status(400).send(data);

    let profile = {
      id_str: data.id_str,
      name: data.name,
      screen_name: data.screen_name,
      followers_count: data.followers_count,
      friends_count: data.friends_count,
      profile_image_url: data.profile_image_url,
    };

    return res.send(profile);
  });
});

// pending
router.get("/tt", (req, res) => {
  client.get(
    "search/tweets",
    { q: "@dev_shreyansh" },
    function (error, tweets, response) {
      let array = [];

      tweets["statuses"].forEach(function (item) {
        if (!item.in_reply_to_status_id_str) array.push(item);
      });

      res.send(array);
    }
  );
});

router.get("/user=:handle/id=:tid", (req, res) => {
  var params = { screen_name: req.params.handle };
  let tweetId = req.params.tid;

  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (error) return res.status(400).send("Error in connection!");

      let array = [];
      tweets.forEach(function (item) {
        if (item.in_reply_to_status_id_str === tweetId) array.push(item);
      });
      return res.send(array);
    }
  );
});

module.exports = router;
