document.write('<table style="width: 50vw; height: 50vh;">')
for(let i = 0; i < 8; i++){
    document.write(`<tr>`)
    for(let j = 0; j < 8; j++) {
        let color:string = j % 2 ? 'black' : 'white'
        document.write(`<td style="background-color: ${color};"></td>`)
    }
    document.write(`</tr>`)
}
document.write('</table>')

