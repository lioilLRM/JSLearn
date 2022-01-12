let req = //形态转换提交参数
{
    "materialLabel":"1313411251", //被转换的标签，标签转物料时候传入
    "fMatId":"11111", //被转换物料id，物料转物料时传入
    "labelNumber":"100", //被转换的标签现有标签数量
    "amounts":"12", //被转换的标签转换的数量
    "unit": "kg", //物料单位
    "batch":"false", //是否批次
    "submitDetails": [
         //转换前
        {
            "labelType": "1", //物料标签类型 1 系统自动生成 2 关联容器 3 关联外部条码
            "matId": "123412312", //物料id
            "matCode": "1111111", //物料编码
            "unit": "kg", //物料单位
            "cposition": "333333", //转换前后物料所在库位id
            "amounts":"12", //被转换的为物料时的转换数量
            "materialLabelJsonArray":[
                {
                    "materialLabel":"22222", //如果转换为批次物料，则该参数为扫描标签或者生成标签的标签编码
                    "amount":"12", //转换数量
                    "labelNumber":"12", //转换前标签数量
                    "unit":"kg", //转换前后的物料单位
                     "materialLabelId":"22222"//物料标签id
                }
            ],//物料转物料的时候，存在被转换物料有多个标签的情况，传入一个数组
            
            "materialDetailJsonArray":[
                {
                    "matId": "123412312", //物料id
                    "matCode": "1111111", //物料编码
                    "unit": "kg", //物料单位
                    "cposition": "333333", //转换前后物料所在库位id
                    "amounts":"12" //被转换的为物料时的转换数量
                }
            ],//多个库位物料转一个物料时传的物料信息数组
            "cbmemo": "ada" //备注
        },
        //转换后
        {
            "labelType": "1", //物料标签类型 1 系统自动生成 2 关联容器 3 关联外部条码
            "matId": "123412312", //物料id
            "matCode": "1111111", //物料编码
            "unit": "kg", //物料单位
            "cposition": "333333", //转换前后物料所在库位id
            "amounts":"12", //被转换的为物料时的转换数量
            "materialLabelJsonArray":[
                {
                    "materialLabel":"22222", //如果转换为批次物料，则该参数为扫描标签或者生成标签的标签编码
                    "amount":"12", //转换数量
                    "labelNumber":"12", //转换前标签数量
                    "unit":"kg" //转换前后的物料单位
                }
            ],//物料转物料的时候，存在被转换物料有多个标签的情况，传入一个数组
            "cbmemo": "ada" //备注
        }
    ]
}