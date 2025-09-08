const argvs = process.argv.slice(2)
const unique = [...new Set(argvs)]

unique.map((item, index) => {
    console.log(`${index + 1} - ${item}`)
})
