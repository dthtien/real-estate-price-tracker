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

export const districts = [
  { name: "thủ đức", slug: "thu-duc" },
  {
    name: "tân phú",
    slug: "tan-phu-fef4bea2-8e9c-405e-a6d7-17bf7bc822c8"
  },
  { name: "tân bình", slug: "tan-binh" },
  { name: "phú nhuận", slug: "phu-nhuan" },
  { name: "nhà bè", slug: "nha-be" },
  { name: "hóc môn", slug: "hoc-mon" },
  { name: "gò vấp", slug: "go-vap" },
  { name: "củ chi", slug: "cu-chi" },
  { name: "cần giờ", slug: "can-gio" },
  { name: "bình thạnh", slug: "binh-thanh" },
  { name: "bình tân", slug: "binh-tan" },
  { name: "bình chánh", slug: "binh-chanh" },
  { name: "quận 9", slug: "quan-9" },
  { name: "quận 8", slug: "quan-8" },
  { name: "quận 7", slug: "quan-7" },
  { name: "quận 6", slug: "quan-6" },
  { name: "quận 5", slug: "quan-5" },
  { name: "quận 4", slug: "quan-4" },
  { name: "quận 3", slug: "quan-3" },
  { name: "quận 2", slug: "quan-2" },
  { name: "quận 12", slug: "quan-12" },
  { name: "quận 11", slug: "quan-11" },
  { name: "quận 10", slug: "quan-10" },
  { name: "quận 1", slug: "quan-1" }
]
  .sort(() => Math.random() - Math.random())
  .slice(0, 4);

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
