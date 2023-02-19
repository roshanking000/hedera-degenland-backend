const express = require('express');
const router = express.Router();

const Auth = require("./auth");
const Account = require("./account");
const Placement = require("./placement");
const Nft = require("./nft");
const NFTSwapOffer = require('./nftSwapOffer');
const Place = require("./place");
const Notification = require("./notification");
const PrivateMessage = require("./message");
const Stake = require("./stake");
const BuyBuilding = require("./buybuilding");
const RewardInfo = require("./reward");

router.use("/auth", Auth);
router.use("/account", Account);
router.use("/placement", Placement);
router.use("/nft", Nft);
router.use("/nftswapoffer", NFTSwapOffer);
router.use("/place", Place);
router.use("/notification", Notification);
router.use("/message", PrivateMessage);
router.use("/stake", Stake);
router.use("/buybuilding", BuyBuilding);
router.use("/reward", RewardInfo);

module.exports = router;
