<template>
  <div>
    <h1>Consulta de cidades</h1>
    <router-link to="/cidade-form" tag="button"><v-btn text>Nova Cidade</v-btn></router-link>
    <table>
      <tr>
        <th>Cidade</th>
        <th>UF</th>
      </tr>
      <tr v-for="cidade in cidades" :key="cidade.nome">
          <td>{{ cidade.nome }}</td>
          <td>{{ cidade.estado }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
@Component
export default class CidadeList extends Vue {
    cidades = [];
    created() {
        axios
        .get("/cidades/")
        .then(response => this.cidades = response.data)
        .catch(error => console.log(error));
  }
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>