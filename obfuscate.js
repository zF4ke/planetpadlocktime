const fs = require('fs')
const jsObfuscator = require('javascript-obfuscator')

var files = ['alimetrica', 'binario', 'scroll', 'passos']

for (var f of files) obfuscate(f)

async function obfuscate(file) {
    await fs.readFile(`./src/scripts/${file}.js`, 'UTF-8', async (error, code) => {
        if (error) throw error

        var result = await jsObfuscator.obfuscate(code)
        await fs.writeFile(`./src/public/scripts/${file}.js`, await result.getObfuscatedCode(), async (fsError) => {
            if (fsError) throw fsError

            await console.log(`O arquivo "${file}" foi obfuscado com sucesso.`)
        })
    })
}