const match = /^(?<hours>\d+)h (?<minutes>\d+)m (?<seconds>\d+)s$/.exec('1h 2m 3s')
console.log('🚀 ~ match:', match)

if (match) {
  const { hours, minutes, seconds } = match.groups
  console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`)
}
