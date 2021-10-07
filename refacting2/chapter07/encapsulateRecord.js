// const organization = { name: '中国航天', country: 'China' }
const organization = new Organization({ name: '中国航天', country: 'China' })

// const result = `<h1>${organization.name}</h1>`
// const result = `<h1>${getRawOrganization().name}</h1>`
const result = `<h1>${getOrganization().name}</h1>`
// organization.name = 'China航天'
// getRawOrganization().name = 'China航天'
getOrganization().name = 'China航天'

// function getRawOrganization() {
//   return organization
// }
// function getRawDataOfOrganization() { return organization._data }

function getOrganization() { return organization }

class Organization {
  constructor(data) {
    // this._data = data
    this._name = data.name
    this._country = data.country
  }
  // get name() { return this._data.name }
  // set name(aString) { this._data.name = aString }
  get name() { return this._name }
  set name(aString) { this._name = aString }
  get country() { return this._country }
  set country(aString) { this._country = aString }
}
