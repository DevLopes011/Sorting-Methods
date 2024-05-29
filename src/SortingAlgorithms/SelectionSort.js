class SelectionSort {
    /**
     * Ordena um array usando o algoritmo de Selection Sort.
     * Selection Sort ou ordenação por seleção é um método que percorre o vetor para encontrar o menor elemento e trocá-lo com o elemento na posição inicial.
     * Este processo é repetido para a próxima posição até que o vetor esteja ordenado.
     * Possui complexidade O(n^2) no pior caso, no caso médio e no melhor caso.
     * É considerado um método de ordenação instável.
     * @param {Array} Array - O array a ser ordenado.
     * @returns {Array} O array ordenado.
    */
    static selectionSort(array) {
        const n = array.length

        for (let i = 0; i < n; i++) {
            let minIndex = i
            for (let j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j
                }
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]]
            }
        }
        return array
    }
}

module.exports = SelectionSort
