<template>
  <div id="navbarspace">
    <ul>
      <li @click="logoClicked()" id="fontyslogo">
        <img id="fontyslogoimage" src="@/assets/FontysLogo.png" />
      </li>
      <li id="logout">
        <a><img id="logoutbutton" src="@/assets/PlusIcon.png" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "src/styling/main.scss";
div {
  background-color: #663366;
  width: 100%;
}

ul {
  display: inline-block;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
}

li {
  display: inline;
  padding-right: 0px;
  margin-right: 0px;
}

#fontyslogo {
  width: 10%;
  float: left;
  margin-top: auto;
  margin-bottom: auto;
}

#fontyslogoimage {
  width: #{"max(100%, 50px)"};
  height: #{"max(100%, 50px)"};
  margin-top: auto;
  margin-bottom: auto;
  padding-left: #{"max(2%, 20px)"};
}

#logoutbutton {
  width: #{"max(5%, 50px)"};
  height: #{"max(5%, 50px)"};
  float: right;
  padding-right: #{"max(5%, 50px)"};
  margin-top: 1%;
  margin-bottom: 1%;
}

#navbarspace {
  background-color: "#663366";
  color: "#000000";
  height: #{"max(5%, 50px)"};
}

#logoutbutton {
  width: 10%;
  float: right;
  padding-right: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
}

#navbarspace {
  background-color: "#663366";
  color: "#000000";
  height: #{"max(5%, 50px)"};
}
</style>