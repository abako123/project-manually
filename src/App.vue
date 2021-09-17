<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vuestart">VueStart</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">DataBindingHtml</router-link> |
    <router-link to="/save">Save</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/serverdata">ServerData</router-link> |
    <router-link to="/slot">SlotUseModalLayout</router-link> |
    <router-link to="/provide">ProvideInject</router-link> |
    <router-link to="/mixins">Mixins</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/compositionapi2">CompositionAPI2</router-link> |
    <router-link to="/compositionapi4">CompositionAPI4</router-link> |
    <router-link to="/compositionapiprovide">CompositionAPIProvide</router-link> |
    <router-link to="/customdirective">CustomDirective</router-link> |
    <router-link to="/plugins">Plugins</router-link> |
    <router-link to="/storeaccess">StoreAccess</router-link> |
    <router-link to="/kakaologin">KakaoLogin</router-link> |
    <router-link to="/naverlogin">NaverLogin</router-link> |
    <router-link to="/googlelogin">GoogleLogin</router-link> |
    <router-link to="/databinding2">DataBinding2</router-link> |
    <router-link to="/selectcheckboxradio">SelectCheckboxRadio</router-link> |
    <router-link to="/attributebutton">AttributeButton</router-link> |
    <router-link to="/classstylebinding">ClassStyleBinding</router-link> |
    <router-link to="/renderinglist">RenderingList</router-link> |
    <router-link to="/renderingvifvshow">RenderingVifVshow</router-link> |
    <router-link to="/eventclickchangekey">EventClickChangeKey</router-link> |
    <router-link to="/computedwatch">ComputedWatch</router-link> |
    <hr>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
