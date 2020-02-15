function magazineHasRequiredWords(magazine, note){
	//takes OG arrays as args
	//
	let wordsBothHave = []
	for (var i = 0; i <note.length; i++){
		//In 1st iteration, "give" is checked against all words in magazine
		for (var j = 0; j < magazine.length; j++){
			if(note[i] === magazine[j] && !wordsBothHave.includes(note[i])){
// 				console.log("push " + note[i] + "to wordsBothHave")
				wordsBothHave.push(note[i])
            } else {
				null
            }
    	}
    }
// 	Confirm words in wordsBothHave match note
	let uniqueNoteWords = Array.from(new Set(note))
	console.log("unique", uniqueNoteWords)
	console.log("wordsBothHave", wordsBothHave)
	if (wordsBothHave.length === uniqueNoteWords.length){
		return true
    } else {
		return false
    }
	
}

// At this point, have accounted for:
// Magazine having all (WHOLE/CASE SENSITIVE) words note needs
// BUT only for one instance of that word

function getWordsAndCountsFrom(array){
    let wordsAndCounts = {}
	for (const word of array){
        if (wordsAndCounts[word] === undefined) {
//             console.log(word + " not in obj. Initializing, count = 1")
            wordsAndCounts[word] = 1
        } else {
//             console.log(word + " already exists. Adding 1 to count.")
            wordsAndCounts[word] += 1
        }
	}
	return wordsAndCounts
}

// Now compare the counts of the word note needs with how many present in magazine

// if magazineHasRequiredWords(magazine,note) 

