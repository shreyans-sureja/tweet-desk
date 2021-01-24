const router = require('express').Router();
const TwitterAccount = require('../model/TwitterAccounts');
const {accountValidation} = require('../validation');
 
router.post('/add-account', async (req, res) => {

    const {error} = accountValidation(req.body);
     
    if(error) 
        return res.status(400).send(error.details[0].message);

 
    const account = new TwitterAccount({
        userId : req.body.userId,
        token : req.body.token,
        token_secret : req.body.token_secret,
    })

    try{
        const saveAccount = await account.save();
        res.send({account : account._id});
    }
    catch(err){
        res.status(400).send(err);
    }
})


module.exports = router;
