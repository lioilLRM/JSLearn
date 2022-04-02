[
    {
        "defaultValue": "0",
        "icon": true,
        "width": "80",
        "options": [
            {
                "itemName": "未开始   ",
                "itemValue": "0"
            },
            {
                "itemName": "执行中",
                "itemValue": "2"
            },
            {
                "itemName": "已完成",
                "itemValue": "3"
            },
            {
                "itemName": "已关闭",
                "itemValue": "1"
            }
        ],
        "label": "行状态",
        "hideCondition": "isDetail",
        "type": "select",
        "fields": [
            {
                "type": "input",
                "title": "标题",
                "value": "label"
            }
        ],
        "fieldType": 0,
        "required": true,
        "fieldId": "status"
    },
    {
        "label": "物料信息",
        "placeholder": "请选择物料",
        "type": "relation",
        "params": {
            "property": "2"
        },
        "fieldType": 0,
        "table": "custom_form_inventoryfile",
        "required": true,
        "eventname": "purchase_order",
        "fieldId": "materialId"
    },
    {
        "width": "185",
        "label": "订单数量",
        "placeholder": "请输入数量",
        "type": "input-prefix",
        "fieldType": 0,
        "required": true,
        "fieldId": "needCount"
    },
    {
        "name": "交付日期",
        "width": "200",
        "format": "yyyy-MM-dd",
        "label": "要求交货日期",
        "placeholder": "请交货日期",
        "type": "production-cycle",
        "fieldType": 0,
        "required": false,
        "fieldId": "needTime"
    },
    {
        "prefix": "%",
        "defaultValue": "0",
        "width": "120",
        "inputType": "number",
        "label": "超收比例",
        "type": "percent",
        "fieldType": 0,
        "fieldId": "overOrderStorage"
    },
    {
        "width": "100",
        "label": "净到货量",
        "placeholder": "",
        "hideCondition": "isDetail",
        "type": "input-prefix",
        "fieldType": 0,
        "required": false,
        "fieldId": "arrivalNumber"
    },
    {
        "width": "100",
        "label": "净入库量",
        "placeholder": "",
        "hideCondition": "isDetail",
        "type": "input-prefix",
        "fieldType": 0,
        "required": false,
        "fieldId": "stockCount"
    },
    {
        "width": "100",
        "label": "拒收数量",
        "placeholder": "",
        "hideCondition": "isDetail",
        "type": "input-prefix",
        "fieldType": 0,
        "required": false,
        "fieldId": "refusedNum"
    },
    {
        "width": "100",
        "label": "退货数量",
        "placeholder": "",
        "hideCondition": "isDetail",
        "type": "input-prefix",
        "fieldType": 0,
        "required": false,
        "fieldId": "backNum"
    },
    {
        "width": "100",
        "label": "报废检验数量",
        "placeholder": "",
        "hideCondition": "isDetail",
        "type": "input-prefix",
        "fieldType": 0,
        "required": false,
        "fieldId": "scrapQtNum"
    },
    {
        "width": "250",
        "label": "备注信息",
        "placeholder": "请添加备注说明",
        "hideCondition": "",
        "type": "input",
        "fieldType": 0,
        "required": false,
        "fieldId": "remarks",
        "validate": "{\"required\":true,\"norepeat\":false}"
    }
]