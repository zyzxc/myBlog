<template>
  <div class="toolbar">
    <div class="container">
      <ul class="left-menu clearfix">
        <li><a href="#" title="首页">首页</a></li>
        <li><a href="#" class="toolbar_to_feed" title="博客">博客</a></li>
        <li><a href="#" title="学院">学院</a></li>
        <li><a href="#" title="下载">下载</a></li>
        <li><a href="#" title="论坛">论坛</a></li>
      </ul>
      <div class="pull-right">
        <ul class="btns">
          <li><a href="#" style="padding:0"></a>
          </li>
          <li>
            <div class="search-bar">
              <input type="text" class="input-search" name="" id="keyTxt" placeholder="搜博主文章"
                     autocomplete="off">
              <a href="#"></a></div>
          </li>
          <li class="writeBlog"><a class="" href="#">
            <span>写博客</span></a></li>
          <li class="userinfo"><a href="#">登录</a><span></span><a
            href="#">注册</a></li>
          <li class="userLogin">
            <div class="loginCenter"><a href="#"><img class="login_img" src="">
              <div class="toolbar-circle"></div>
            </a></div>
            <div class="userControl">
              <div><a href="#">我的博客</a></div>
              <div><a href="#">消息<span>(3)</span></a></div>
              <div><a href="#">帐号设置</a></div>
              <div><a href="#">反馈</a></div>
              <div><a href="#">帮助</a></div>
              <div><a href="#">退出</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/base"

  .toolbar {
    font-family: 'PingFang SC', 'Microsoft YaHei', SimHei, Arial, SimSun;
    font-size: .75em;
    color: #333;
    line-height: 1.5em;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    min-width: 1010px;
    height: 50px;
    padding: 0 24px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .toolbar li {
    list-style: none;
    float: left;
    height: 34px;
    width: 40px;
    border: 1px solid #eee;
    border-width: 0 1px;
    border-right-color: #fff;
    position: relative;
    background: 0 0;
  }

  .toolbar .clearfix {
    overflow: visible;
  }

  .toolbar .container {
    width: 100%;
  }

  .toolbar .container li {
    border-left: none;
    border-right: none;
    width: auto;
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
  }

  .toolbar .container .left-menu {
    width: 852px;
  }

  .toolbar .container .left-menu li a {
    line-height: 50px;
  }

  .toolbar .container .left-menu li a, .toolbar .container .pull-right li a {
    display: block;
    padding-left: 12px;
    padding-right: 12px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    color: #3f3f3f;
  }

  .toolbar .container .pull-right {
    padding-top: 8px;
    float: right;
    margin-right: -8px;
  }

  .toolbar .container .pull-right li a {
    height: 30px;
    line-height: 32px;
  }

  .toolbar .container .pull-right .search-bar {
    float: right;
    background: #fafafa;
    width: 160px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 12px;
    padding-top: 1px;
  }

  .toolbar .container .search-bar .input-search {
    background-color: #fafafa;
    font-size: 14px;
    color: #778087;
    display: block;
    float: left;
    width: 110px;
    padding: 5px 10px;
    border: 0;
    height: 18px;
    border-radius: 10px;
  }

  .toolbar .container .pull-right .writeBlog a {
    border-radius: 50%;
    width: 72px;
    height: 24px;
    color: #fff;
    padding-left: 0;
    padding-right: 0;
    line-height: 24px;
    padding-top: 4px;
  }

  .toolbar .container .pull-right .writeBlog a span {
    font-size: 14px;
    color: #999;
    vertical-align: 4px;
  }

  .toolbar .container .pull-right .userinfo {
    display: block;
    margin-left: 20px;
  }

  .toolbar .container .pull-right .userinfo a {
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    color: #999;
    font-size: 14px;
  }

  .toolbar .container .pull-right .userLogin {
    display: none;
    margin-left: 12px;
    position: relative;
  }

  .toolbar .container .pull-right .userLogin .loginCenter {
    line-height: 27px;
    position: relative;
    width: 25px;
    height: 24px;
    padding: 4px 12px;
  }

  .toolbar .container .pull-right .userLogin .userControl {
    display: none;
    position: absolute;
    padding-top: 9px;
    padding-bottom: 12px;
    top: 40px;
    right: -14px;
    z-index: 99999;
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    width: 130px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
  }

  .toolbar .container .pull-right .userLogin .userControl div a {
    ine-height: 2;
    text-align: left;
    height: 32px;
    padding-left: 32px;
    padding-right: 32px;
    color: #4f4f4f;
    font-size: 16px;
  }
</style>
