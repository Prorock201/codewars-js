function humanReadable(seconds) {
  console.log(seconds);
  if(seconds <= 359999) {
    var HH = ('0' + (~~(seconds/3600))).slice(-2);
    var MM = ('0' + (~~((seconds-HH*3600)/60))).slice(-2);
    var SS = ('0' + ((seconds-HH*3600)-(MM*60))).slice(-2);
    return HH+':'+MM+':'+SS;
  } else {
    return '99:59:59';
  }
}

humanReadable(60);