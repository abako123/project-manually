<template>
  <div>
    <h2>{{ $translate("ko.hi") }}</h2>  <!-- $translate으로 사용-->
    <h2>{{ $translate("en.hi") }}</h2>
    <!-- <h2>{{ i18n.en.hi }}</h2>           inject로 사용 -->
    <hr>
    <button>{{ $translate("ko.save") }}</button>
    <br>
    <button>{{ $translate("en.save") }}</button>
  </div>
</template>
