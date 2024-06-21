<template>
  <!-- Criando um evento de clique pelo qual eu recebo o valor de selecionado receba o inverso dele, ou seja, se estiver como true, recebe false -->
  <button class="ingrediente" @click="aoClicar()" :aria-pressed="selecionado">
    <!-- :aria-pressed="selecionado" atibuto padráo de boas práticas para identificar se ele está selecionado-->
    <Tag :texto="ingrediente" :ativa="selecionado" />
    <!-- :ativa usado como true e false para chamar alguma função para fazer algo.-->
  </button>
</template>

<script lang="ts">
import Tag from './Tag.vue'

export default {
  components: { Tag },
  props: {
    ingrediente: { type: String, required: true } // Utilizar props para conseguir pegar a informação do ingrediente la do for de CardCategoria
  },

  data() {
    return {
      selecionado: false
    }
  },

  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente)
      } else {
        this.$emit('removerIngrediente', this.ingrediente)
      }
    }
  },

  emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
