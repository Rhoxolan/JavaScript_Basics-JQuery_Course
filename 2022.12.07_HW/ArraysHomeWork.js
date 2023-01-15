function P(style, text) {
    this.style = style;
    this.text = text;
}

let ps = [];
ps.push(new P("font-weight: bolder; color: rgb(223, 76, 76);", "Lorem ipsum dolor sit amet"));
ps.push(new P("font-weight: bolder; color: rgb(42, 115, 184);", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus."));
ps.push(new P("font-weight: bolder; color: rgb(16, 238, 82);", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at diam dolor. Donec tempor et."));

ShowPs(ps);

function ShowPs(ps) {
    ps.forEach(e => document.write(`<p style='${e.style}'>${e.text}</p>`));
}