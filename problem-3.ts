{
    // Function to count word occurrences in a string
    function countWordOccurrences(str: string, word: string): number {
        const words = str.match(/\b\w+\b/g);
        let count = 0;
        
        if (words) {
            for (const w of words) {
                if (w.toLowerCase() === word.toLowerCase()) {
                    count++;
                }
            }
        }

        return count;
    }
    
    
}