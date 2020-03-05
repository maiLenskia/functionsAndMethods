function range(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);
    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

    let characters = [];

    for (let index = start + 1; index < end; index++) {
        let currentChar = String.fromCharCode(index);
        characters.push(currentChar);
    }

    console.log(characters.join(' '));
}
range('C', '#')