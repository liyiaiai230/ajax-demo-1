//用AJAX加载模拟分页操作
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}


//用AJAX加载JSON，并将其转为对象
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            console.log(object)
        }
    }
    request.send()
}


//用AJAX操作XML，并获取其节点内容
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        } else {

        }
    }
    request.send()
}

//用AJAX加载HTML，并使其出现在页面中
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('请求失败')
    }
    request.send()
}


//用AJAX加载JS，并使其执行
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')

        script.innerHTML = request.response
        document.head.appendChild(script)
    }
    request.onerror = () => {
        console.log('请求失败')
    }
    request.send()
}

//用AJAX加载CSS，并使其生效
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        if (request.status >= 200 && request.status < 300) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        } else {
            console.log('加载失败')
        }
    }
    request.send()
}
