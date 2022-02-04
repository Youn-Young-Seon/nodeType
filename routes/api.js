const router = require('express').Router();
const axios = require('axios');

const BADANG_URL = `http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo`;
const SERVICE_KEY = `NTVoNqBCa6w4WY0zqtP488WlWdVMsK4H4z%2BanvgdokVDEjJOsFtXTI98sRy2NUrAaw3IUMu0izHR0DFo%2F2XqHA%3D%3D`;
const URL = `${BADANG_URL}?serviceKey=${SERVICE_KEY}&resultType=json&pageNo=1&numOfRows=50`;

const getApi = async (paramURL) => {
    const response = await axios.get(paramURL);    
    return response;
}

router.get('/stock', function(req, res){
    getApi(URL)
    .then((response) => {
        res.send(response.data.response.body);
    }).catch((e) => {
        console.log(e);
    });
})

module.exports = router;