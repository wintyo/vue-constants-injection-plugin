# Vue Constants Injection Plugin

The plugin injects constants into Vue Instance to use the constants in template section.

## Installation
### yarn
```
$ yarn add @wityo/vue-constants-injection-plugin
```

### npm
```
$ npm install --save @wintyo/vue-constants-injection-plugin
```

## Setup
```
import Vue from 'vue';
import ConstantsInjectionPlugin from '@wintyo/vue-constants-injection-plugin'

Vue.use(ConstantsInjectionPlugin);
```

## Usage
```
<template>
  <div>
    <p>$C.HOGE is {{ $C.HOGE }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  C: {
    HOGE: 'HOGE'
  },
});
</script>
```

## License
MIT
