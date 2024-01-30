// const baseUrl = 'https://n49224l617.yicp.fun/';
// const baseUrl = "http://127.0.0.1:3000/";

// export default () => {
//     return new Promise((res) => {
//         fetch(baseUrl + "api/mom/Hiot/getNoneStandardKeyValue").then((json) => {
//             json.json().then((data) => {
//                 res(data.data);
//             });
//         });
//     });
// };


import axios from "./../lib/axios";


// 生成过程中 实时 面板信息 接口
export const getNoneStandardKeyValue = () => {
    return axios.request({
        url: `api/mom/Hiot/getNoneStandardKeyValue`,
        method: "get",
    });
};


// 生成过程中 实时 吊具 接口
export const getVehicleList = () => {
    return axios.request({
        url: `/api/mom/Returnport/getVehicleList`,
        method: "get",
    });
};

// 上线数量
export const getLineNum = () => {
    return axios.request({
        url: `/api/mom/UpperRecord/getLineNum`,
        method: "get",
    });
};

// 故障信息
export const getFaultData = () => {
    return axios.request({
        url: `/api/mom/Hiot/getFaultData`,
        method: "get",
    });
};




