const router = require("express").Router();
const oauth = require("oauth");
const TwitterAccounts = require("../model/TwitterAccounts");

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;
const callback = process.env.CALLBACK_URL;

const consumer = new oauth.OAuth(
  "https://twitter.com/oauth/request_token",
  "https://twitter.com/oauth/access_token",
  consumerKey,
  consumerSecret,
  "1.0A",
  callback,
  "HMAC-SHA1"
);

router.get("/connect", (req, res) => {
  consumer.getOAuthRequestToken(function (
    error,
    oauthToken,
    oauthTokenSecret,
    results
  ) {
    if (error) {
      res.send(error, 500);
    } else {
      let redirectUrl = `https://twitter.com/oauth/authorize?oauth_token=${oauthToken}`;

      res.send({ oauthToken, oauthTokenSecret, results, redirectUrl });
    }
  });
});

router.post("/accessTokens", async (req, res) => {
  let oauth_token = req.body.oauth_token;
  let oauth_verifier = req.body.oauth_verifier;
  let oauthRequestTokenSecret = req.body.oauthRequestTokenSecret;

  consumer.getOAuthAccessToken(
    oauth_token,
    oauthRequestTokenSecret,
    oauth_verifier,
    (error, oauthAccessToken, oauthAccessTokenSecret, results) => {
      if (error) {
        res.send(error).status(500);
      } else {
        const twitterAcount = new TwitterAccounts({
          userId: results.screen_name,
          token: oauthAccessToken,
          token_secret: oauthAccessTokenSecret,
        });

        const saveAccount = twitterAcount.save();
        return res.send(results.screen_name);
      }
    }
  );
});

module.exports = router;
