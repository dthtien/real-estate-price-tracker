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

export const toQueryString = obj => {
  return Object.keys(obj)
    .filter(key => obj[key] != undefined && obj[key] != "")
    .reduce((str, key, i) => {
      var delimiter, val;
      delimiter = i === 0 ? "?" : "&";
      if (Array.isArray(obj[key])) {
        key = encodeURIComponent(key);
        var arrayVar = obj[key].reduce((str, item) => {
          val = encodeURIComponent(JSON.stringify(item));
          return [str, key, "=", val, "&"].join("");
        }, "");
        return [str, delimiter, arrayVar.trimRight("&")].join("");
      } else {
        key = encodeURIComponent(key);
        val = encodeURIComponent(JSON.stringify(obj[key]));
        return [str, delimiter, key, "=", val].join("");
      }
    }, "");
};
