const information = document.getElementById('info')
const cons = document.querySelector("#cons")
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await versions.ping()
    cons.innerText = response
}


  
func()