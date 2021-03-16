<template>
    <div>
        <ul id="topbar">
            <li id="fontyslogo"><img></li>
            <li><a id="logout"><img id="logoutbutton"></a></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import "src/styling/main.scss";
#topbar{
width: 100%;
heigth: 10%;

background-color: fontys-purple;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
display: inline;
}
#fontyslogo{
float: left;
}

#logout{
float: right;
}


</style>