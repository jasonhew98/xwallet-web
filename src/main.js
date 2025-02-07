import * as Vue from "vue";
import App from "./App.vue";
import router from "./infrastructure/routes";

// repositories
import authRepository from "./infrastructure/repositories/authRepository";
import lookUpRepository from "./infrastructure/repositories/lookUpRepository";
import transactionRepository from "./infrastructure/repositories/transactionRepository";
import userRepository from "./infrastructure/repositories/userRepository";

import messages from "./domain/messages";
import { createPinia } from "pinia";

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = Vue.createApp(App);
app.use(createPinia());
app.use(router);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});
app.use(vuetify);

app.provide("router", router);
app.provide("authRepository", authRepository);
app.provide("lookUpRepository", lookUpRepository);
app.provide("transactionRepository", transactionRepository);
app.provide("userRepository", userRepository);

app.provide("messages", messages);

app.mount("#xvault__app");
