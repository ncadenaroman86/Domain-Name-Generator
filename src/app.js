let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }

      // Domain hack: if the noun ends with the same letters as a TLD
      let hackExt = 'us';
      if (n.endsWith(hackExt)) {
        let hackedDomain = p + a + n.replace(hackExt, '') + '.' + hackExt;
        console.log(hackedDomain);
      }
    }
  }
}
