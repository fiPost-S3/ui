<template>
    <div id="navbarspace">
        <ul>
            <li id="fontyslogo"><img id="fontyslogoimage" src="@/assets/FontysLogo.png"></li>
            <li id="logout"><a><img id="logoutbutton" src="@/assets/PlusIcon.png"></a></li>
        </ul>
    </div>
</template>

<script>
     export default {
    }
</script>

<style scoped lang="scss">
    @import "src/styling/main.scss";
    div{
    background-color: #663366;
    }
    ul {
        display: inline-block;
        width: 100%;
        heigth: 10%;

    }
    li{
        display: inline;
    }
    #fontyslogo{
        width: 10%;
        float: left;
    }
    #fontyslogoimage{
        width: 100%;
        heigth: 100%;
        margin-top: auto;
        margin-bottom: auto;
    }

    #logoutbutton{
        width: 5%;
        height: 5%;
        float: right;
        padding-right: 5%;
        margin-top: 1%;
        margin-bottom: 1%;
    }
    #navbarspace{
        background-color: "#663366";
        color: "#000000";
    }


</style>