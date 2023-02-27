const express = require('express');
const router = express.Router();
const account = require("./controller");

router.get('/get_item_detail', account.getItemDetail);
router.get('/get_list', account.getList);
router.get('/get_list_by_accountid', account.getListByAccountId);
router.get('/check_nft', account.checkNft);

router.post('/set_list', account.setList);
router.post('/cancel_list', account.cancelList);
router.post('/set_favourites', account.setFavourites);
router.post('/unset_favourites', account.unsetFavourites);
router.post('/set_watching', account.setWatching);
router.post('/unset_watching', account.unsetWatching);

router.post('/send_nft', account.sendNft);

module.exports = router;
