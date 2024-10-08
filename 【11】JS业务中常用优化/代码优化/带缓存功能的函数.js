
function totalPrice(row) {
  return row.price * row.count
}

function useComputed(fn) {
  const cache = new Map()

  const getCache = (args) => {
    return cache.get(JSON.stringify(args))
  }

  return function(...args) {
    // if (该参数有对应的缓存) {
    //   return 缓存结果
    // }
    const cacheResult = getCache(args)
    if (cacheResult) {
      return cacheResult
    }

    // const result = fn(...args)
    // 缓存结果 = result

    const result = computed(() => fn(...args))
    cache.set(JSON.stringify(args), result)
    return result
  }
}

const computedPrice = useComputed(totalPrice)
