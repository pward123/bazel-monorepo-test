module.exports = async () => new Promise(resolve => {
    setTimeout(() => {
        console.log('setTimeout called')
        resolve('blah')
    }, 1000)
})
