const BADANG_URL = `http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo`;
const SERVICE_KEY = `NTVoNqBCa6w4WY0zqtP488WlWdVMsK4H4z%2BanvgdokVDEjJOsFtXTI98sRy2NUrAaw3IUMu0izHR0DFo%2F2XqHA%3D%3D`;

export function pack(){
    return fetch(`${BADANG_URL}?serviceKey=${SERVICE_KEY}&resultType=json&pageNo=1&numOfRows=50`, {
        headers: {
            // 'Access-Control-Allow-Origin': '*'
            mode: 'no-cors'
        }
    })
    .then((data) => {
        return data.json();
    })
    .catch((error) =>{
        console.error(error);
    })
}