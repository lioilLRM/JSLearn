const LoginFormValidateMap = {
  phone: {
    require: true,
    regular: RegexMap.phone
  },
  country: {
    requireBy: 'phone'
  },
  email: {
    requireByNot: {
      country: 'CN'
    }
  }
}

function isNotEmpty(toCheck: any, propertyName: any, error: any, rest: any) {
  return toCheck[propertyName] === '' ? error : null
}

function isNotLongerThan(toCheck: any, propertyName: any, error: any, rest: any) {
  return toCheck[propertyName].length > rest[0] ? error : null
}

function isBetween(toCheck: any, propertyName: any, error: any, rest: any) {
  let length = toCheck[propertyName].length
  return length < rest[0] || length > rest[1] ? error : null
}

const methods = [
  ['is not empty', isNotEmpty],
  ['is not longer than', isNotLongerThan],
  ['length is between', isBetween]
]

export const RegexMap = {
  phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
}

export enum VALIDATE_ERROR {
  REQUIRE = 0,
  REGULAR = 1
}

export interface IValidate {
  require?: boolean
  regular?: RegExp
  requireBy?: string
  requireByNot?: object
}

export function FormValidator(validateMap: any, data: any) {
  let validateKeys = Object.keys(validateMap)
  for (const key of validateKeys) {
    const map = validateMap[key] as IValidate

    if (map.require) {
      if (!data[key]) {
        return {
          key: key,
          error: VALIDATE_ERROR.REQUIRE
        }
      }
    }

    if (map.regular) {
      const reg = new RegExp(map.regular)
      if (!reg.test(data[key])) {
        return {
          key: key,
          error: VALIDATE_ERROR.REGULAR
        }
      }
    }
  }
}