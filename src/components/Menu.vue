<template>
    <div class="menugeneric">
        <h2 class="menuText">{{labelText}}</h2><a :href="destRoute"><img class="menuimage" src="@/assets/BoxQR.png" /></a>
    </div>
</template>


<script lang="ts">
import {Options, Vue} from "vue-class-component";

    @Options ({
        props: {
            destRoute:  String,
            labelText: String
        }
    })
export default class Menu extends Vue {
       
    }


  
</script>

<style scoped lang="scss">
    @import "src/styling/main.scss";

    .menuText{
        padding-left: 5%;
    }
    .menugeneric{
        width: #{"max(20%, 200px)"};
        height: #{"max(20%, 200px)"};
        display: flex;
        flex-direction: column;
        background: white;
        overflow: hidden;
        box-shadow: $shadow;
        border-radius: $border-radius;
        font-family: $font-family;

    }
    .menuimage{
        width: #{"max(15%, 150px)"};
        height: #{"max(15%, 150px)"};
        padding-left: 10%;
        padding-bottom: 10%;
    }


</style>
<!-- <Menu labelText="Registreren" :destRoute="'/registratie'" /> dit is een juist voorbeeld van een implementatie -->
 