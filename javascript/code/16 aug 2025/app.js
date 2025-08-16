var text = "Hi, i am learning MERN Stack, and at the moment we are in Module 1 and HTML is going on"

document.writeln(text)

function changeModule() {
    console.log("===>> click huwa")
    var oneLength = '1'.length
    var htmlLength = 'HTML'.length

    console.log(oneLength, htmlLength)

    var indexOf1 = text.indexOf('1')           //65
    var indexOfHtml = text.indexOf('HTML')

    console.log(indexOf1, indexOfHtml)

    var part1 = text.slice(0, indexOf1) + '2' + text.slice(indexOf1 + oneLength, indexOfHtml) + 'JavaScript' + text.slice(indexOfHtml + htmlLength)
    console.log(part1, "==>> part1")
    document.writeln(part1)
}