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