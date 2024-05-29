class MarginSort {
    /**
     * Particiona um array em torno de um pivô e rearranja os elementos de forma que os menores que o pivô estejam à esquerda e os maiores à direita.
     * @param {Array} array - O array a ser particionado.
     * @param {number} low - O índice mais baixo do subarray a ser particionado.
     * @param {number} high - O índice mais alto do subarray a ser particionado.
     * @returns {number} O índice do pivô após a partição.
     */
    static partition(array, low, high) {
        const pivot = array[Math.floor((low + high) / 2)]
        let left = low
        let right = high

        while (left <= right) {
            while (array[left] < pivot) {
                left++
            }

            while (array[right] > pivot) {
                right--
            }

            if (left <= right) {
                [array[left], array[right]] = [array[right], array[left]]
                left++
                right--
            }
        }
        return left
    }

    /**
     * Ordena um array usando o algoritmo de Margin Sort.
     * Margin Sort é um algoritmo de ordenação que combina os conceitos de Quicksort e Insertion Sort. 
     * Ele particiona o array em torno de um pivô e utiliza uma pilha para manter os sub Arrays a serem ordenados.
     * @param {Array} array - O array a ser ordenado.
     * @returns {Array} O array ordenado.
     */
    static sort(array) {
        let stack = []
        stack.push({ low: 0, high: array.length - 1 })

        while (stack.length) {
            let { low, high } = stack.pop()
            if (low < high) {
                const pivotIndex = MarginSort.partition(array, low, high)

                stack.push({ low: low, high: pivotIndex - 1 })
                stack.push({ low: pivotIndex, high: high })
            }
        }
        return array
    }
}

module.exports = MarginSort
