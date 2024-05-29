class InsertionSort {
    /**
     * Ordena um array usando o algoritmo de Insertion Sort.
     * Insertion Sort ou ordenação por inserção é o método que percorre um vetor de elementos da esquerda para a direita.
     * À medida que avança vai ordenando os elementos à esquerda. Possui complexidade C(n) = O(n) no melhor caso e C(n) = O(n²) no caso médio e pior caso.
     * É considerado um método de ordenação estável.
     * @param {Array} Array - O array a ser ordenado.
     * @returns {Array} O array ordenado.
    */
    static insertionSort(Array) {
        let n = Array.length

        for (let i = 1; i < n; i++) {
            
            let current = Array[i]
            let v = i - 1

            while (v >= 0 && Array[v] > current) {
                Array[v + 1] = Array[v]
                v--
            }
            Array[v + 1] = current
        }
        return Array
    }

}

module.exports = InsertionSort
