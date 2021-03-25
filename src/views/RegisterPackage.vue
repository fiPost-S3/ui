<template>
    <div>
        <BtnBack/>
        <div class="component-container">
            <h1>Pakket registreren</h1>
            <div>
                <h3>Afzender</h3>
                <InputField @inputChanged="sender" labelText="Naam:"/>
            </div>
            <div>
                <h3>Ontvanger</h3>
                <InputField @inputChanged="receiver" labelText="Naam:"/>
            </div>
            <div>
                <h3>Pakket</h3>
                <InputField @inputChanged="name" labelText="Naam:"/>
            </div>
            <div>
                <h3>Afhaalpunt</h3>
                <InputField @inputChanged="collectionPoint" labelText="Naam:"/>
            </div>
            <BtnFinish text="Bevestigen" v-on:click="registerPackage"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import BtnBack from "@/components/BtnBack.vue";
    import InputField from "@/components/InputField.vue";
    import BtnFinish from "@/components/BtnFinish.vue";
    import RegisterPackageModel from "@/classes/RegisterPackageModel";
    import {pakketService} from "@/services/pakketservice";


    @Options({
        components: {
            BtnBack,
            InputField,
            BtnFinish
        }
    })

    export default class RegisterPackage extends Vue {
        private package: RegisterPackageModel = new RegisterPackageModel(
            "",
            "",
            "",
            "",
        );

        async registerPackage() {
            // Call to backend. Package is filled by emitters.
            let response = await pakketService.post(this.package);
            window.alert("Registratie voltooid");
            console.log(response); // Only for testing
        }

        sender(input: string): void {
            this.package.Sender = input;
        }

        receiver(input: string): void {
            this.package.ReceiverId = input;
        }

        name(input: string): void {
            this.package.Name = input;
        }

        collectionPoint(input: string): void {
            this.package.CollectionPointId = input;
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styling/main.scss";
</style>