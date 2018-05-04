<template>
  <header>
    <div class="container">
      <div class="title-box">
        <h6 class="title-blog">
          <a href="#">Stacey的博客</a>
        </h6>
        <p class="descr">创业如此艰难</p>
      </div>
      <div class="opt-box">

      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  header {
    height: 164px;
    margin-bottom: -24px;
    background: url("/static/images/bg-title.png?v3") no-repeat center;
    background-size: 1920px auto;
    display: block;
  }

  .container {
    width: 1216px;
    height: 100%;
    padding: 24px 24px 0;
    margin: 0 auto;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  .container .title-box {
    overflow: hidden;
    word-break: break-all;
    max-width: 720px;
    width: 960px;
  }

  .container .title-box .title-blog {
    margin-bottom: 8px;
  }

  .container .title-box .title-blog a {
    color: #333;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
  }

  .container .title-blog .descr {
    font-size: 14px;
    color: #858585;
  }

  .container .opt-box {
    margin-left: auto;
    width: 300px;
  }
</style>
