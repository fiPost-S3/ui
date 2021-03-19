<template>
    <label class="input-container">
        <p>{{labelText}}</p>
        <input type="text" class="input" v-model="input" @change="updateInput()"/>
    </label>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";

    @Options ({
        props: {
            labelText: String
        },
        emits: ['inputChanged']
    })

    export default class InputField extends Vue {
        input: string = "";

        updateInput() {
            this.$emit('inputChanged', this.input)
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styling/main.scss";

    .input-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 400px;
        margin-bottom: 0.6rem;
        margin-top: 0.6rem;
    }

    .input {
        border-radius: 0.4rem;
        border-width: 0;
        background: $background-color;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        width: 240px;
        height: 2rem;
        margin: auto 0;
    }

    .input:focus {
        outline: none;
    }
</style>