import Mock from 'mockjs'

Mock.mock(/\/WebApi\/Login\/GetZtData/, () => {
    return {
        "ReCode": 0,
        "ReMessage": "",
        "ResponseData": [{
            "Nub": "1",
            "ZTCode": "66e5254258725981",
            "ZTname": "快消品行业",
            "EditionType": "3",
            "EditionName": "ERPV3IITop985",
            "ShowEditionName": "分销V3Top V9.85/V9.86/V1.5/V1.6",
            "SqlDatatBase": "TYDEMO",
            "Virtual": "",
            "State": "0"
        }, {
            "Nub": "3",
            "ZTCode": "5336ab07fbdf58b9",
            "ZTname": "五金建材",
            "EditionType": "3",
            "EditionName": "ERPV3IITop985",
            "ShowEditionName": "分销V3Top V9.85/V9.86/V1.5/V1.6",
            "SqlDatatBase": "V3_Date_V988_wj",
            "Virtual": "",
            "State": "0"
        }, {
            "Nub": "4",
            "ZTCode": "5f6704b80b536667",
            "ZTname": "乳品行业",
            "EditionType": "3",
            "EditionName": "ERPV3IITop985",
            "ShowEditionName": "分销V3Top V9.85/V9.86/V1.5/V1.6",
            "SqlDatatBase": "V3_Data_rphy_20190513",
            "Virtual": "",
            "State": "0"
        }]
    }
})