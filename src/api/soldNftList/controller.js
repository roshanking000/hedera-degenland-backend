const SoldNftList = require('../../models/SoldNftList');

exports.getSoldList = async (req_, res_) => {
    try {
        const _nftList = await SoldNftList.find({});

        const dayTime = 86400000;
        const hourTime = 3600000;
        const minuteTime = 60000;

        let _soldTime = '';
        const nowTime = new Date();
        let _soldNftData = [];
        for (let i = 0;i < _nftList.length;i++) {
            const _periodTime = nowTime - _nftList[i].createdAt;

            const _betweenDayTime = Math.ceil(_periodTime/dayTime);
            if (_betweenDayTime > 31)
                _soldTime = 'about 1 month ago';
            else if (_betweenDayTime > 1 && _betweenDayTime <= 31)
                _soldTime = 'about ' + _betweenDayTime + ' days ago';
            else if (_betweenDayTime == 1)
                _soldTime = 'about 1 day ago';
            else if (_betweenDayTime < 1) {
                const _betweenHourTime = Math.ceil(_periodTime/hourTime);
                if (_betweenHourTime > 1 && _betweenHourTime <= 23)
                    _soldTime = 'about ' + _betweenHourTime + ' hours ago';
                else if (_betweenHourTime == 1)
                    _soldTime = 'about 1 hour ago';
                else if (_betweenHourTime < 1) {
                    const _betweenminuteTime = Math.ceil(_periodTime/minuteTime);
                    if (_betweenminuteTime > 1 && _betweenminuteTime <= 59)
                        _soldTime = _betweenminuteTime + ' minutes ago';
                    else if (_betweenminuteTime == 1)
                        _soldTime = '1 minute ago';
                }
            }
            
            const _soldNftInfo = {
                imageUrl: _nftList[i].imageUrl,
                name: _nftList[i].name,
                transactionType: _nftList[i].transactionType,
                soldTime: _soldTime,
                totalAmount: _nftList[i].totalAmount,
                buyer: _nftList[i].buyer,
                seller: _nftList[i].seller
            };
            _soldNftData.push(_soldNftInfo);
        }
        return res_.send({ result: true,  data: _soldNftData });
    } catch (error) {
        return res_.send({ result: false, error: 'Error detected in server progress!' });
    }
}
