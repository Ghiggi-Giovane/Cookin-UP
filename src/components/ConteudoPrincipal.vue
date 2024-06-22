<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <!-- KeepAlive = manter vivo, componente nativo do vue que serve para preservar o estado dos componentes que estáo dentro dele, funciona bem com v-if e v-else -->
    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
        v-if="conteudo === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente"
        @buscar-receitas="navegar('MostrarReceitas')" />

      <MostrarReceitas
        v-else-if="conteudo === 'MostrarReceitas'"
        @editar-receitas="navegar('SelecionarIngredientes')"
    /></KeepAlive>
  </main>
</template>

<script lang="ts">
import MostrarReceitas from './MostrarReceitas.vue'
import SelecionarIngredientes from './SelecionarIngredientes.vue'
import SuaLista from './SuaLista.vue'
import Tag from './Tag.vue'

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas' // Definindo uma tipagem no typescript

export default {
  data() {
    return {
      ingredientes: [] as string[], // as string[] utilizado no TS para TIPAR o array quando for vazio
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  components: { SelecionarIngredientes, Tag, SuaLista, MostrarReceitas },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter((i) => ingrediente !== i)
    },
    navegar(pagina: Pagina) {
      this.conteudo = pagina
    }
  },
  emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
