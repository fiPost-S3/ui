<template>
    <div class="align-left">
        <BtnBack class="button-back"/>
        <div
                class="component-container"
                v-if="!overview"
        >
            <h1>Pakket registreren</h1>
            <div>
                <h3>Afzender</h3>
                <InputField
                        @inputChanged="sender"
                        label="Afzender:"
                        :input="package.Sender"
                />
            </div>
            <div>
                <h3>Ontvanger</h3>
                <InputField
                        @inputChanged="receiver"
                        label="Ontvanger:"
                        :input="package.ReceiverId"
                />
            </div>
            <div>
                <h3>Pakket</h3>
                <InputField
                        @inputChanged="name"
                        label="Pakketnaam:"
                        :input="package.Name"
                />
            </div>
            <div>
                <h3>Afhaalpunt</h3>
                <InputField
                        @inputChanged="collectionPoint"
                        label="Afhaalpunt:"
                        :input="package.CollectionPointId"
                />
            </div>
        </div>
        <div
                class="component-container"
                v-if="overview"
        >
            <h1>Overzicht</h1>
            <h3>Afzender</h3>
            <p>{{package.Sender}}</p>
            <h3>Ontvangstadres</h3>
            <p>{{package.ReceiverId}}</p>
            <h3>Pakket</h3>
            <p>{{package.Name}}</p>
            <h3>Afhaalpunt</h3>
            <p>{{package.CollectionPointId}}</p>
        </div>
        <BtnFinish
                :text="btnText"
                v-on:click="toggleStep"
        />
        <BtnFinish
                text="Bevestigen"
                v-on:click="registerPackage"
                v-if="overview"
        />
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

        private overview: boolean = false;
        private btnText: string = "Volgende";

        toggleStep() {
            this.overview = !this.overview;
            if (this.overview) {
                this.btnText = "Vorige";
            } else {
                this.btnText = "Volgende";
            }
        }

        async registerPackage() {
            // Call to backend. Package is filled by emitters.
            let response = await pakketService.post(this.package);
            window.alert("Registratie voltooid");
            console.log(response); // Only for testing
            await this.$router.push("/");
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

    .align-left {
        text-align: left;
    }
</style>