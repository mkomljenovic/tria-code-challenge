function rle(text, type = "encode") {
  if (text !== "" && type !== "encode") {
    return text.replace(/(\d+)([ \w])/g, (_, count, character) =>
      character.repeat(count)
    );
  } else {
    return text.replace(
      /([ \w])\1+/g,
      (group, character) => group.length + character
    );
  }
}
