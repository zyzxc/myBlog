<template>
  <main>
    <div class="blog-content-box">
      <div class="article-title-box">
        <span class="article-type"></span>
      </div>
    </div>
  </main>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/base"

  main {
    width: 900px;
  }

  .blog-content-box {
    padding: 24px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }

  .blog-content-box .article-title-box {
    margin-bottom: 16px;
  }

  .article-type {
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
  }

  .blog-content-box .article-title-box .article-type {
    margin-right: 8px;
    margin-top: 4px;
  }

  .blog-content-box .article-title-box .article-type .type-1 {
    color: #ca0c16;
    border: 1px solid #f4ced0;
  }

  .float-left {
    float: left !important;
  }
</style>
