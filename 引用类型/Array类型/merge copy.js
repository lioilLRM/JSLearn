let arrObj = [
  {
    type: 3,
    inspectionItems: [
      {
        result: 2,
        itemName: "精度检验",
        unit: "mm",
        upperValue: "102",
        sampleSeq: 1,
        standardValue: "100",
        actualValue: "1",
        lowerValue: "99",
        itemSeq: 1,
      },
      {
        itemName: "色差检查",
        unit: "",
        sampleSeq: 1,
        itemSeq: 2,
      },
    ],
    checkQualifiedNum: 0,
    id: 1026,
    reportNames: "小红",
    materialId: 263,
    inspectionConcessionNum: 0,
    unit: "PCS#3#ceil",
    qualityPlanId: 448,
    reportTime: "2023-10-25T16:54:12",
    result: 0,
    inspectionQualifiedNum: 0,
    materialIdNames:
      "铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 1.258889999 | M4 | L20",
    arrivalNumber: 100,
    checkDefectNum: 3,
    materialLabel: "",
    repeatInspectionStatus: 1,
    qualityNum: 3,
    inspectionRefusedNum: 100,
  },
  {
    type: 3,
    inspectionItems: [
      {
        result: 2,
        itemName: "精度检验",
        unit: "mm",
        upperValue: "102",
        sampleSeq: 2,
        standardValue: "100",
        actualValue: "2",
        lowerValue: "99",
        itemSeq: 1,
      },
      {
        itemName: "色差检查",
        unit: "",
        sampleSeq: 2,
        itemSeq: 2,
      },
    ],
    checkQualifiedNum: 0,
    id: 1026,
    reportNames: "小红",
    materialId: 263,
    inspectionConcessionNum: 0,
    unit: "PCS#3#ceil",
    qualityPlanId: 448,
    reportTime: "2023-10-25T16:54:12",
    result: 0,
    inspectionQualifiedNum: 0,
    materialIdNames:
      "铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 1.258889999 | M4 | L20",
    arrivalNumber: 100,
    checkDefectNum: 3,
    materialLabel: "",
    repeatInspectionStatus: 1,
    qualityNum: 3,
    inspectionRefusedNum: 100,
  },
  {
    type: 3,
    inspectionItems: [
      {
        result: 2,
        itemName: "精度检验",
        unit: "mm",
        upperValue: "102",
        sampleSeq: 3,
        standardValue: "100",
        actualValue: "3",
        lowerValue: "99",
        itemSeq: 1,
      },
      {
        itemName: "色差检查",
        unit: "",
        sampleSeq: 3,
        itemSeq: 2,
      },
    ],
    checkQualifiedNum: 0,
    id: 1026,
    reportNames: "小红",
    materialId: 263,
    inspectionConcessionNum: 0,
    unit: "PCS#3#ceil",
    qualityPlanId: 448,
    reportTime: "2023-10-25T16:54:12",
    result: 0,
    inspectionQualifiedNum: 0,
    materialIdNames:
      "铝扣板014（这就是以恶搞查急急急急急急急急急急急急急急急急急急哈哈哈哈哈哈哈哈哈哈哈哈啊哈啊啊啊啊啊啊啊啊啊啊） | 888014 | 190*120 | 1.258889999 | M4 | L20",
    arrivalNumber: 100,
    checkDefectNum: 3,
    materialLabel: "",
    repeatInspectionStatus: 1,
    qualityNum: 3,
    inspectionRefusedNum: 100,
  },
];

let allInspectionItems = [];

arrObj.forEach((item) => {
  allInspectionItems = allInspectionItems.concat(item.inspectionItems);
});

// console.log(`allInspectionItems`, allInspectionItems);
let mergeDataByItemNameArr = [];




let res = [];














let currentRows = [
  {
    result: 2,
    itemName: "精度检验",
    unit: "mm",
    upperValue: "102",
    sampleSeq: 1,
    standardValue: "100",
    actualValue: "1",
    lowerValue: "99",
    itemSeq: 1,
    sample1: "1",
    sample1_result: 2,
    sample1_IconSrc: "leave",
    sample2: "2",
    sample2_result: 2,
    sample2_IconSrc: "leave",
    sample3: "3",
    sample3_result: 2,
    sample3_IconSrc: "leave",
    scpedIndex: 1,
    checkRange: "100（99~102）",
  },
  {
    itemName: "色差检查",
    unit: "",
    sampleSeq: 1,
    itemSeq: 2,
    scpedIndex: 2,
    checkRange: "--",
  },
  {
    result: 2,
    itemName: "精度检验",
    unit: "mm",
    upperValue: "102",
    sampleSeq: 2,
    standardValue: "100",
    actualValue: "2",
    lowerValue: "99",
    itemSeq: 1,
    scpedIndex: 3,
    checkRange: "100（99~102）",
  },
  {
    itemName: "色差检查",
    unit: "",
    sampleSeq: 2,
    itemSeq: 2,
    scpedIndex: 4,
    checkRange: "--",
  },
  {
    result: 2,
    itemName: "精度检验",
    unit: "mm",
    upperValue: "102",
    sampleSeq: 3,
    standardValue: "100",
    actualValue: "3",
    lowerValue: "99",
    itemSeq: 1,
    scpedIndex: 5,
    checkRange: "100（99~102）",
  },
  {
    itemName: "色差检查",
    unit: "",
    sampleSeq: 3,
    itemSeq: 2,
    scpedIndex: 6,
    checkRange: "--",
  },
];


function processItems(data) {
  const result = [];
  const items = {};

  for (const obj of data) {
    const { itemName } = obj;

    if (!items[itemName]) {
      items[itemName] = [];
    }

    items[itemName].push(obj);
  }

  for (const itemName in items) {
    result.push(items[itemName]);
  }

  return result;
}

const data = [
  {
    result: 2,
    itemName: '精度检验',
    unit: 'mm',
    upperValue: '102',
    sampleSeq: 1,
    standardValue: '100',
    actualValue: '1',
    lowerValue: '99',
    itemSeq: 1
  },
  { itemName: '色差检查', unit: '', sampleSeq: 1, itemSeq: 2 },
  {
    result: 2,
    itemName: '精度检验',
    unit: 'mm',
    upperValue: '102',
    sampleSeq: 2,
    standardValue: '100',
    actualValue: '2',
    lowerValue: '99',
    itemSeq: 1
  },
  { itemName: '色差检查', unit: '', sampleSeq: 2, itemSeq: 2 },
  {
    result: 2,
    itemName: '精度检验',
    unit: 'mm',
    upperValue: '102',
    sampleSeq: 3,
    standardValue: '100',
    actualValue: '3',
    lowerValue: '99',
    itemSeq: 1
  },
  { itemName: '色差检查', unit: '', sampleSeq: 3, itemSeq: 2 }
];

const processedData = processItems(data);

processedData.forEach((items) => {
  items.forEach((checkItem, checkIndex) => {
    // console.log("🚀 ~ file: merge.js:291 ~ items.forEach ~ checkItem:", checkItem)
    if(!checkItem.hasOwnProperty('sampleSeq')) {
      checkItem.sampleSeq = checkIndex + 1;
    }
    checkItem['sample' + (checkItem.sampleSeq)] = checkItem.actualValue
    checkItem['sample' + (checkItem.sampleSeq) + '_result'] = checkItem.result
    
    if (!checkItem.actualValue) {
      checkItem['sample' + (checkItem.sampleSeq)] = checkItem.result === 1 ? '合格' : '不合格'
    }

  })
})
let finalData = []
processedData.forEach((items) => {
  let mergeObj = {}
  items.forEach((checkItem) => {
    mergeObj = Object.assign(mergeObj, checkItem)
  })
  finalData.push(mergeObj)
  
})



// console.log(processedData);
console.log("🚀 ~ file: merge.js:310 ~ items.forEach ~ finalData:", finalData)


let processedData2 = [
  [
    {
      result: 2,
      itemName: '精度检验',
      unit: 'mm',
      upperValue: '102',
      sampleSeq: 1,
      standardValue: '100',
      actualValue: '1',
      lowerValue: '99',
      itemSeq: 1
    },
    {
      result: 2,
      itemName: '精度检验',
      unit: 'mm',
      upperValue: '102',
      sampleSeq: 2,
      standardValue: '100',
      actualValue: '2',
      lowerValue: '99',
      itemSeq: 1
    },
    {
      result: 2,
      itemName: '精度检验',
      unit: 'mm',
      upperValue: '102',
      sampleSeq: 3,
      standardValue: '100',
      actualValue: '3',
      lowerValue: '99',
      itemSeq: 1
    }
  ],
  [
    { itemName: '色差检查', unit: '', sampleSeq: 1, itemSeq: 2 },
    { itemName: '色差检查', unit: '', sampleSeq: 2, itemSeq: 2 },
    { itemName: '色差检查', unit: '', sampleSeq: 3, itemSeq: 2 }
  ]
]

let rows = [
  {itemName: '精度检验', },
  {itemName: '色差检查'},

]