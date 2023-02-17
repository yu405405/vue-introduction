<template>
    <div id="root">
        <h1 class="header">Rootコンポーネント</h1>
        <p>これはRootコンポーネントです。</p>
        <foo></foo>
        <bar></bar>
    </div>    
</template>
<script>
import Foo from './foo.vue'
import Bar from './bar.vue'
export default {
    components: {
        Foo: Foo,
        Bar: Bar
    }
}
</script>
<style scoped>
    #root {
        border: 1px solid blue;
        margin: 4px;
        padding: 4px;
    }
    .header {
        font-size: 200%;
    }
    p {
        text-decoration: underline;
    }
</style>