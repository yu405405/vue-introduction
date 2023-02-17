<template>
    <div class="bar">
        <h1 class="header">Barコンポーネント</h1>
        <p>これはBarコンポーネントです。</p>
        <foo></foo>
    </div>
</template>
<script>
import Foo from './foo.vue'
export default {
    components: {
        Foo: Foo
    }
}
</script>
<style scoped>
    .bar {
        border: 1px solid red;
        margin: 4px;
        padding: 4px;
    }
    .header {
        font-size: 125%;
    }
</style>