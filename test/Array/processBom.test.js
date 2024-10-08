// const rows = [{ 'qid': 1710123081590, 'isStation': '1', 'isChangeMatLabel': '1', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [], 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': '1', 'seqMatching_disabled': true, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '', 'finishedDisabled': false, 'linkSeqModeNames': '并行' }, { 'qid': 1710123083716, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [{ 'id': 'up', 'matType': '1', 'issueMaterialsCtr': '0', 'rate': 0, 'fixedUsages': 0 }], 'canChange': true, 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '', 'finishedDisabled': false }, { 'qid': 1710123085187, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [{ 'id': 'up', 'matType': '1', 'issueMaterialsCtr': '0', 'rate': 0, 'fixedUsages': 0 }], 'canChange': true, 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '', 'finishedDisabled': false }, { 'qid': 1710123369656, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [{ 'id': 'up', 'matType': '1', 'issueMaterialsCtr': '0', 'rate': 0, 'fixedUsages': 0 }], 'canChange': true, 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '' }]

const newRows = [{ 'qid': 1710125171443, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [], 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '', 'finishedDisabled': false }, { 'qid': 1710125173148, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [{ 'id': 'up', 'matType': '1', 'issueMaterialsCtr': '0', 'rate': 0, 'fixedUsages': 0 }], 'canChange': true, 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '', 'finishedDisabled': false }, { 'qid': 1710125174649, 'isStation': '1', 'isChangeMatLabel': '0', 'seqMatching': 0, 'outAutoTran': '0', 'operationType': '', 'useful': 'yes', 'reportRatio': 1, 'inventorys': [{ 'id': 'up', 'matType': '1', 'issueMaterialsCtr': '0', 'rate': 0, 'fixedUsages': 0 }], 'canChange': true, 'sendisabled': true, 'outLabel': 'up', 'linkSeqMode': 0, 'seqMatching_disabled': false, 'isChangeMatLabel_disabled': false, 'isSingleWeight': 0, 'singleWeightStandard': '' }]

const linkSeqModeMapping = {
  0: '串行',
  1: '并行'
}
const isChangeMatLabelMapping = {
  '0': '否',
  '1': '是'
}
const LINK_SEQ_MODE_ENUM = {
  SERIAL: {
    value: '0',
    desc: '串行'
  },
  PARALLEL: {
    value: '1',
    desc: '并行'
  }
}
// 产出标签
const IS_CHANGE_MAT_LABEL_ENUM = {
  NO: {
    value: '0',
    desc: '否'
  },
  YES: {
    value: '1',
    desc: '是'
  }
}
function createKeyRows(rows = []) {
  const keyRows = rows.map((row, index) => {
    return {
      qid: row.qid,
      processName: `工序${index + 1}`,
      linkSeqMode: row.linkSeqMode,
      linkSeqModeNames: linkSeqModeMapping[row.linkSeqMode],
      linkSeqMode_disabled: row.linkSeqMode_disabled || false,
      isChangeMatLabel: row.isChangeMatLabel,
      isChangeMatLabelNames: isChangeMatLabelMapping[row.isChangeMatLabel],
      isChangeMatLabel_disabled: row.isChangeMatLabel_disabled || false

    }
  })

  return keyRows
}

function handleLinkSeqMode(rows = []) {
  const result = []
  if (rows.length === 0) return result
  if (rows.length.length === 1) return rows

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    const nextRow = rows[i + 1]
    if (nextRow) {
      if (+row.isChangeMatLabel === +IS_CHANGE_MAT_LABEL_ENUM.YES.value) {
        nextRow.linkSeqMode = LINK_SEQ_MODE_ENUM.SERIAL.value
        nextRow.linkSeqModeNames = LINK_SEQ_MODE_ENUM.SERIAL.desc
        nextRow.linkSeqMode_disabled = true
      } else {
        nextRow.linkSeqMode_disabled = false
      }
    }
    result.push(row)
  }

  return result
}

describe('工艺BOM接续方式测试', () => {
  it('1添加工序', () => {
    const keyRows = createKeyRows(newRows)
    const result = handleLinkSeqMode(keyRows)

    console.log(`result`, result)
  })
  it('2删除工序', () => {

  })
  it('3修改产出标签：首道工序修改产出标签是', () => {
    const copyKeyRows = JSON.parse(JSON.stringify(newRows))
    const firstRow = copyKeyRows[0]
    firstRow.isChangeMatLabel = '1'
    const keyRows = createKeyRows(copyKeyRows)
    console.log(`keyRows`, keyRows)
    const result = handleLinkSeqMode(keyRows)
    console.log(`result`, result)

    const expectResult = [
      {
        qid: 1710125171443,
        processName: '工序1',
        linkSeqMode: 0,
        linkSeqModeNames: '串行',
        linkSeqMode_disabled: false,
        isChangeMatLabel: '1',
        isChangeMatLabelNames: '是',
        isChangeMatLabel_disabled: false
      },
      {
        qid: 1710125173148,
        processName: '工序2',
        linkSeqMode: '0',
        linkSeqModeNames: '串行',
        linkSeqMode_disabled: true,
        isChangeMatLabel: '0',
        isChangeMatLabelNames: '否',
        isChangeMatLabel_disabled: false
      },
      {
        qid: 1710125174649,
        processName: '工序3',
        linkSeqMode: 0,
        linkSeqModeNames: '串行',
        linkSeqMode_disabled: false,
        isChangeMatLabel: '0',
        isChangeMatLabelNames: '否',
        isChangeMatLabel_disabled: false
      }
    ]

    expect(result).toEqual(expectResult)
  })

  it('3修改产出标签：1,2工序修改产出标签是', () => {
    const copyKeyRows = JSON.parse(JSON.stringify(newRows))
    const firstRow = copyKeyRows[0]
    firstRow.isChangeMatLabel = '1'

    const second = copyKeyRows[1]
    second.isChangeMatLabel = '1'

    const keyRows = createKeyRows(copyKeyRows)
    console.log(`keyRows`, keyRows)
    const result = handleLinkSeqMode(keyRows)
    console.log(`result`, result)
  })
})
