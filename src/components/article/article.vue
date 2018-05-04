<template>
  <div>
    <tool-bar></tool-bar>
    <v-header></v-header>
    <div class="content">
      <a-side></a-side>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import ToolBar from 'components/toolbar/toolbar'
  import vHeader from 'components/header/header'
  import aSide from 'components/aside/aside'

  export default {
    data() {
      return {}
    },
    components: {
      ToolBar,
      vHeader,
      aSide
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .content {
    width: 1216px;
    padding: 24px 24px 0;
    margin: 0 auto;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
</style>
