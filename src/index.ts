import Vue, { PluginObject } from 'vue';

// extend option
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    C?: {
      [key: string]: any;
    }
  }
}

// extend property
declare module 'vue/types/vue' {
  interface Vue {
    $C: {
      [key: string]: any;
    };
  }
}

const Plugin = {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        this.$C = this.$options.C || {};
      },
    });
  },
} as PluginObject<never>;

export default Plugin;
