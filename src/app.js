const readline = require('readline')
const InsertionSort = require('./SortingAlgorithms/InsertionSort')
const SelectionSort = require('./SortingAlgorithms/SelectionSort')
const MargeSort = require('./SortingAlgorithms/MargeSort')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('\nDigite os números para ordenar, separados por vírgula: ', (input) => {
    const arrayToSort = input.split(',').map(Number)
    
    console.log("\n=======================Array original=========================")
    console.log(...arrayToSort)

    const insertionSortResult = InsertionSort.insertionSort([...arrayToSort])
    console.log("\n=======================Insertion Sort=========================")
    console.log("Array ordenado com Insertion Sort:", ...insertionSortResult)


    const selectionSortResult = SelectionSort.selectionSort([...arrayToSort])
    console.log("\n=======================Selection Sort=========================")
    console.log("Array ordenado com Selection Sort:", ...selectionSortResult)


    const margeSortResult = MargeSort.sort([...arrayToSort])
    console.log("\n=======================Marge Sort=========================")
    console.log("Array ordenado com Marge Sort:", ...margeSortResult, "\n")

    rl.close()
})
