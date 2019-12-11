export const getUnique = (arr, comp) => {
  const unique = arr
    .map(e => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const titleize = str => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = capitalize(str[i]);
  }
  return str.join(" ");
};

export const truncate = (text, length = 10) => {
  let cutText = text.substring(0, length);
  if (text.length > length) {
    cutText += "...";
  }

  return cutText;
};
