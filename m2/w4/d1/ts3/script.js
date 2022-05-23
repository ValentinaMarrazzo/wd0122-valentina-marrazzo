document.write('<table style="width: 50vw; height: 50vh;">');
for (var i = 0; i < 8; i++) {
    document.write("<tr>");
    for (var j = 0; j < 8; j++) {
        var color = j % 2 ? 'black' : 'white';
        document.write("<td style=\"background-color: ".concat(color, ";\"></td>"));
    }
    document.write("</tr>");
}
document.write('</table>');
