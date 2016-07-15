function titleCase(title, minorWords) {
	console.log(title);
	console.log(minorWords);
	var titleArray = title.toLowerCase().split(' ');
	console.log(titleArray);
	if (minorWords) {
		var changeWord = true;
		var minorWordsArray = minorWords.split(' ');
		for (var j=0;j<minorWordsArray.length;++j) {
			minorWordsArray[j] = minorWordsArray[j].toLowerCase();
		}
		for (var i=0;i<titleArray.length;++i) {
			for (var j=0;j<minorWordsArray.length;++j) {
				if (titleArray[i] == minorWordsArray[j]) {
					changeWord = false;
					break;
				}
			}
			if (changeWord || titleArray[0] == minorWordsArray[j]) {
				titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1).toLowerCase();
			}
			changeWord = true;
		}
	} else {
		for (var i=0;i<titleArray.length;++i) {
			titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1).toLowerCase();
		}
	}
	console.log(titleArray.join(' '));
	return titleArray.join(' ');
}

titleCase('a clash of KINGS', 'a an the OF');

