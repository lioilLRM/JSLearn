let handleDataBefore = [
  {
    sampleSeq: 1,
    itemSeq: 1,
    result: 1,
    itemId: 1683618182376,
    itemName: "色差校验",
    unit: "",
  },
  {
    upperValue: "111",
    sampleSeq: 1,
    standardValue: "",
    actualValue: "14",
    lowerValue: "14",
    itemSeq: 2,
    result: 1,
    itemId: 1683618183872,
    itemName: "平整度检查",
    unit: "mm",
  },
  {
    sampleSeq: 2,
    itemSeq: 1,
    result: 1,
    itemId: 1683618182376,
    itemName: "色差校验",
    unit: "",
  },
  {
    upperValue: "111",
    sampleSeq: 2,
    standardValue: "",
    actualValue: "15",
    lowerValue: "14",
    itemSeq: 2,
    result: 1,
    itemId: 1683618183872,
    itemName: "平整度检查",
    unit: "mm",
  },
];

let quanlityCheckList = [
  [
    {
      unit: "",
      requiredNames: "否",
      name: "色差校验",
      hanghao: 1,
      numJudgment: "0",
      qid: 1683618182376,
      seq: 1,
      required: "0",
      digit: "",
      orderHanghao: 1,
      numJudgmentNames: "否",
      isRequired: false,
      isNumJudgment: false,
      checkRange: "",
      itemName: "色差校验",
      itemSeq: 1,
      result: 2,
      itemId: 1683618182376,
    },
    {
      downLimit: "14",
      standardValue: "",
      hanghao: 2,
      qid: 1683618183872,
      required: "1",
      digitNames: "",
      orderHanghao: 2,
      unit: "mm",
      requiredNames: "是",
      name: "平整度检查",
      upLimit: "111",
      numJudgment: "1",
      seq: 2,
      digit: "3",
      numJudgmentNames: "是",
      isRequired: true,
      isNumJudgment: true,
      checkRange: "14 ~ 111",
      checkRangeExpression: { type: "between", value: ["14", "111"] },
      actualValue: 12,
      lowerValue: "14",
      upperValue: "111",
      itemName: "平整度检查",
      itemSeq: 2,
      result: 2,
      itemId: 1683618183872,
    },
  ],
  [
    {
      unit: "",
      requiredNames: "否",
      name: "色差校验",
      hanghao: 1,
      numJudgment: "0",
      qid: 1683618182376,
      seq: 1,
      required: "0",
      digit: "",
      orderHanghao: 1,
      numJudgmentNames: "否",
      isRequired: false,
      isNumJudgment: false,
      checkRange: "",
      itemName: "色差校验",
      itemSeq: 1,
      result: "",
      itemId: 1683618182376,
    },
    {
      downLimit: "14",
      standardValue: "",
      hanghao: 2,
      qid: 1683618183872,
      required: "1",
      digitNames: "",
      orderHanghao: 2,
      unit: "mm",
      requiredNames: "是",
      name: "平整度检查",
      upLimit: "111",
      numJudgment: "1",
      seq: 2,
      digit: "3",
      numJudgmentNames: "是",
      isRequired: true,
      isNumJudgment: true,
      checkRange: "14 ~ 111",
      checkRangeExpression: { type: "between", value: ["14", "111"] },
      actualValue: 12,
      lowerValue: "14",
      upperValue: "111",
      itemName: "平整度检查",
      itemSeq: 2,
      result: 2,
      itemId: 1683618183872,
    },
  ],
  [
    {
      unit: "",
      requiredNames: "否",
      name: "色差校验",
      hanghao: 1,
      numJudgment: "0",
      qid: 1683618182376,
      seq: 1,
      required: "0",
      digit: "",
      orderHanghao: 1,
      numJudgmentNames: "否",
      isRequired: false,
      isNumJudgment: false,
      checkRange: "",
      itemName: "色差校验",
      itemSeq: 1,
      result: "",
      itemId: 1683618182376,
    },
    {
      downLimit: "14",
      standardValue: "",
      hanghao: 2,
      qid: 1683618183872,
      required: "1",
      digitNames: "",
      orderHanghao: 2,
      unit: "mm",
      requiredNames: "是",
      name: "平整度检查",
      upLimit: "111",
      numJudgment: "1",
      seq: 2,
      digit: "3",
      numJudgmentNames: "是",
      isRequired: true,
      isNumJudgment: true,
      checkRange: "14 ~ 111",
      checkRangeExpression: { type: "between", value: ["14", "111"] },
      actualValue: 22,
      lowerValue: "14",
      upperValue: "111",
      itemName: "平整度检查",
      itemSeq: 2,
      result: 1,
      itemId: 1683618183872,
    },
  ],
  [
    {
      unit: "",
      requiredNames: "否",
      name: "色差校验",
      hanghao: 1,
      numJudgment: "0",
      qid: 1683618182376,
      seq: 1,
      required: "0",
      digit: "",
      orderHanghao: 1,
      numJudgmentNames: "否",
      isRequired: false,
      isNumJudgment: false,
      checkRange: "",
      itemName: "色差校验",
      itemSeq: 1,
      result: 1,
      itemId: 1683618182376,
    },
    {
      downLimit: "14",
      standardValue: "",
      hanghao: 2,
      qid: 1683618183872,
      required: "1",
      digitNames: "",
      orderHanghao: 2,
      unit: "mm",
      requiredNames: "是",
      name: "平整度检查",
      upLimit: "111",
      numJudgment: "1",
      seq: 2,
      digit: "3",
      numJudgmentNames: "是",
      isRequired: true,
      isNumJudgment: true,
      checkRange: "14 ~ 111",
      checkRangeExpression: { type: "between", value: ["14", "111"] },
      actualValue: 11,
      lowerValue: "14",
      upperValue: "111",
      itemName: "平整度检查",
      itemSeq: 2,
      result: 2,
      itemId: 1683618183872,
    },
  ],
];

let itemByItemList = [
  {
    unit: "",
    requiredNames: "否",
    name: "色差校验",
    hanghao: 1,
    numJudgment: "0",
    qid: 1683618182376,
    seq: 1,
    required: "0",
    digit: "",
    orderHanghao: 1,
    numJudgmentNames: "否",
    isRequired: false,
    isNumJudgment: false,
    checkRange: "",
    itemName: "色差校验",
    itemSeq: 1,
    result: "",
    itemId: 1683618182376,
    checkItemList: [
      { index: 1, actualValue: "", result: 1, uniqueKey: "1683618182376_1_1" },
      { index: 2, actualValue: "", result: 1, uniqueKey: "1683618182376_1_2" },
      { index: 3, actualValue: "", result: 1, uniqueKey: "1683618182376_1_3" },
      { index: 4, actualValue: "", result: 1, uniqueKey: "1683618182376_1_4" },
    ],
  },
  {
    downLimit: "14",
    standardValue: "",
    hanghao: 2,
    qid: 1683618183872,
    required: "1",
    digitNames: "",
    orderHanghao: 2,
    unit: "mm",
    requiredNames: "是",
    name: "平整度检查",
    upLimit: "111",
    numJudgment: "1",
    seq: 2,
    digit: "3",
    numJudgmentNames: "是",
    isRequired: true,
    isNumJudgment: true,
    checkRange: "14 ~ 111",
    checkRangeExpression: { type: "between", value: ["14", "111"] },
    actualValue: "",
    lowerValue: "14",
    upperValue: "111",
    itemName: "平整度检查",
    itemSeq: 2,
    result: "",
    itemId: 1683618183872,
    checkItemList: [
      {
        index: 1,
        actualValue: 1,
        result: 2,
        uniqueKey: "1683618183872_2_1",
        checkRangeExpression: { type: "between", value: ["14", "111"] },
      },
      {
        index: 2,
        actualValue: 2,
        result: 2,
        uniqueKey: "1683618183872_2_2",
        checkRangeExpression: { type: "between", value: ["14", "111"] },
      },
      {
        index: 3,
        actualValue: 3,
        result: 2,
        uniqueKey: "1683618183872_2_3",
        checkRangeExpression: { type: "between", value: ["14", "111"] },
      },
      {
        index: 4,
        actualValue: 4,
        result: 2,
        uniqueKey: "1683618183872_2_4",
        checkRangeExpression: { type: "between", value: ["14", "111"] },
      },
    ],
  },
];

function changeBeforeDataToOneByOne() {
  let result = [];
  let items = {};
  for (const obj of handleDataBefore) {
    const { sampleSeq } = obj;
    if (!items[sampleSeq]) {
      items[sampleSeq] = [];
    }
    items[sampleSeq].push(obj);
  }
  for (const sampleSeq in items) {
    result.push(items[sampleSeq]);
  }
  console.log(
    "🚀 ~ file: 处理数据.js:261 ~ changeBeforeDataToItemByItem ~ result:",
    result
  );
  return result;
}

function changeBeforeDataToItemByItem() {
  let result = [];
  let finalData = []
  let items = {};
  for (const obj of handleDataBefore) {
    const { itemName } = obj;
    if (!items[itemName]) {
      items[itemName] = [];
    }
    items[itemName].push(obj);
  }
  for (const itemName in items) {
    let finalObj = {
      itemName,
    }
    let checkItemList = []
    checkItemList.push(items[itemName])
    finalObj.checkItemList = checkItemList
    finalData.push(finalObj)
    result.push(items[itemName]);
  }
  console.log(  "🚀 ~ file: 处理数据.js:261 ~ changeBeforeDataToItemByItem ~ result:",
    finalData
  );
}
changeBeforeDataToItemByItem()
 
