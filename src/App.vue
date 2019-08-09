<template>
  <v-app>
    <div>
      <v-toolbar dark>
        <v-toolbar-title>Conta</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link to="/" tag="button"><v-btn text>Home</v-btn></router-link>
          <router-link to="/agencias" tag="button"><v-btn text>Agencias</v-btn></router-link>
          <router-link to="/cidades" tag="button"><v-btn text>Cidades</v-btn></router-link>
          <router-link to="/clientes" tag="button"><v-btn text>Clientes</v-btn></router-link>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view></router-view>
  </v-app>
</template>
