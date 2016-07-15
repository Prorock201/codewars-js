/*function scramble(str1, str2) {
  console.log(str1);
  console.log(str2);
  var word = [];
  var srt1Array = str1.split('');
  var srt2Array = str2.split('');
  srt2Array.map(function(item, index){
    for (var i=0;i<srt1Array.length;++i) {
      if (item == srt1Array[i]) {
        word.push(srt1Array[i]);
        srt1Array.splice(i,1);
        return word;
      }
    }
  });
  console.log(word);
  return word.join('')==str2?true:false;
}*/

function scramble(str1, str2) {
  var word = [];
  var srt1Array = str1.split('');
  var srt2Array = str2.split('');
  srt2Array.some(function(item, index){
    srt1Array.some(function(item2, index2){
      if (item == item2) {
        word.push(item2);
        srt1Array.splice(index2,1);
        return word;
      }
    });
  });
  console.log(word);
  return word.join('')==str2?true:false;
}

/*function scramble(str1, str2) {
  var add = false;
  var word = [];
  for (var i=0;i<str2.length;++i) {
    for (var j=0;j<str1.length;++j) {
      if(!add){
        if (str2[i] == str1[j]) {
          word.push(str2[i]);
          str1 = str1.replace(str1[j], '');
          --j;
          add = true;
        };
      };
    };
    add = false;
  };
  return word.join('')==str2?true:false;
}*/

console.log(scramble('pyrawidlcfneulmusqssxttveqgapokximwtbjpjefmpqftztpkpatebtahwiktdehfjossuupcypiydrtvtyllcghphhbvaisajnkfyiuffyhvwjomgvcldxikkgkwuypduvcspcrqlsodolvnfnoufwfocyrfbppvkqqvtwbbnssworkrrgswgpqfabovduzjqmtopkxhqdiygaujfnjyixibabovhrpxrdifxpzkxnkzdzfpgauxjuumwrcopqdmzjcqltomuvanwarcpcjmqmtcrfdygntvayewngnwcenxyqidwevkbbacbh','bsocospsurvjuosyxdqfxtofdqughyvqfpgfxyqtvdmqriaopgpwojgkmoessnjxsbgmarnxyvmszjqydciueaucvfquscjaepqtjjyanaklfiipasojhtmgysjclxrxiabnbhungshzhawuekgynuufugdwlgwqsudowtkludzevzhdumytfuxhwyjprcv'));

var row = function(str, len) {
    
  };