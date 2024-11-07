{
    // function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed
    function removeDuplicates(arr: number[]): number[] {

        const uniqueArr: number[] = [];

        // pushing unique numbers to unique array
        for (let i = 0; i < arr.length; i++) {
            if (!uniqueArr.includes(arr[i])) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }

}