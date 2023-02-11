import { defineStore, getActivePinia } from 'pinia';
import { Router } from 'vue-router';
import { ref } from 'vue';
export const usePiniaRouter = () => getActivePinia()?.router as Router;

export const useGlobalStore = defineStore('global', () => {
  // -- State -- //
  const user = ref<any>({
    name: 'Samu Ferragut',
    email: 'samuFerragut@gmail.com',
    imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4',
  });
  const userNavigation = ref<any>([
    { name: 'Perfil', href: '#' },
    { name: 'Ajustes', href: '#' },
    { name: 'Cerrar Sesión', href: '#' },
  ]);
  const navigation = ref<any>([
    { name: 'Inicio', href: '/', current: true },
    { name: 'Clases', href: '#', current: false },
  ]);
  // -- Actions -- //

  return {
    // -- State -- //
    navigation,
    user,
    userNavigation
    // -- Actions -- //
  };
});
