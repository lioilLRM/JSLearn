const a = new Set([1, 2, 3])
const b = new Set([4, 3, 2])

// 并集
const union = new Set([...a, ...b])
// Set{1,2,3,4}

// 交集
const intersect = new Set([...a].filter(x => b.has(x)))
// Set{2,3}

// 差集
const difference = new Set([...a].filter(x => !b.has(x)))
// Set{1}
