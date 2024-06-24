export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) { // unknown significa desconhecido, mais seguro, nao deixa acessar uma propriedade sem saber o tipo de lista
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
    // Se todos os itens estiverem inclusos(include) na lista2, a funcao callback retornara verdadeiro,
    // E se retornar verdadeiro para todos os itens, a funcao every retornara verdadeiro
}