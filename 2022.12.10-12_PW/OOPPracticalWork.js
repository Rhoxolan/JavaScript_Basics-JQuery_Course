class PrintMachine {
    fontSize;
    color;
    fontFamily;
    print(text){
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.color}; font-family: ${this.fontFamily};">${text}</p>`);
    }
}