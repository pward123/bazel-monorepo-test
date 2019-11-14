import lib from 'test_lib'

const main = async () => {
    console.log('calling test_lib')
    await lib()
    console.log('called test_lib')
}

main()
    .then(() => {
        console.log('done')
        process.exit(0)
    })
    .catch(e => {
        console.error(e.stack)
        process.exit(1)
    })
