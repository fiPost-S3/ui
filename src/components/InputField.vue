<template>
    <div class="input-container">
        <p>{{label}}</p>
        <input
                v-if="valid"
                class="input"
                type="text"
                v-model="text"
                @change="changed"
        />
        <input
                v-if="!valid"
                class="input input-error"
                type="text"
                v-model="text"
                @change="changed"
        />
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import {Emit, Prop} from "vue-property-decorator";

    @Options({
        emits: ['input-changed']
    })

    export default class InputField extends Vue {
        @Prop() public label!: String;
        @Prop() public input!: String;
        @Prop() public color!: String;
        @Prop() public valid: Boolean = true; // Default true

        private text: String = this.input;

        @Emit("input-changed")
        changed() {
            return this.text;
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styling/main.scss";

    .input-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 440px;
        margin-bottom: 0.6rem;
        margin-top: 0.6rem;
        font-weight: normal;
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

    .input-error {
        background: #ffc9cf;
    }

    .input:focus {
        outline: none;
        border: #999999 solid 2px;
    }

    .input-error:focus {
        border: #ff8ca1 solid 2px;
    }
</style>