<template>
  <aside>
    <div class="aside-box">
      <h3 class="aside-title">个人资料</h3>
      <div class="profile-intro d-flex">
        <div class="avator-box d-flex">
          <a>
            <img src="/static/images/avator.png" alt="" class="avator-pic"/>
          </a>
        </div>
        <div class="user-info">
          <p class="name">
            <a>stacey</a>
          </p>
        </div>
        <div class="opt-box">
          <span>
            <a class="btn btn-sm btn-red-hollow" href="#">关注</a>
          </span>
        </div>
      </div>
      <div class="data-info d-flex">
        <dl class="text-center" title="6">
          <dt>原创</dt>
          <dd>
            <span class="count">6</span>
          </dd>
        </dl>
        <dl class="text-center" title="2">
          <dt>粉丝</dt>
          <dd>
            <span class="count">2</span>
          </dd>
        </dl>
        <dl class="text-center" title="2">
          <dt>喜欢</dt>
          <dd>
            <span class="count">2</span>
          </dd>
        </dl>
        <dl class="text-center" title="5">
          <dt>评论</dt>
          <dd>
            <span class="count">5</span>
          </dd>
        </dl>
      </div>
      <div class="grade-box">
        <dl>
          <dt>等级：</dt>
          <dd>
            <a href="" title="1级,点击查看等级说明" target="_blank">
              1ji
            </a>
          </dd>
        </dl>
        <dl>
          <dt>访问：</dt>
          <dd title="524">
            524
          </dd>
        </dl>
        <dl>
          <dt>积分：</dt>
          <dd title="66">
            66
          </dd>
        </dl>
        <dl title="1615161">
          <dt>排名：</dt>
          <dd>161万+</dd>
        </dl>
      </div>
    </div>
    <div class="aside-box">
      <h3 class="aside-title">热门文章</h3>
      <div class="aside-content">
        <ul class="hotArticle-list">
          <li>
            <a href="">使用Vue实现页面拖拽编辑（一）</a>
            <p class="read">阅读量：<span>398</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside-box">
      <h3 class="aside-title">最新评论</h3>
      <div class="aside-content">
        <ul class="hotArticle-list">
          <li>
            <a href="">使用Vue实现页面拖拽编辑（一）</a>
            <p class="comment">
              <a href="#" class="user-name">zxc</a>
              ：楼主方便留下联系方式吗，可发我邮箱 aaqylh#gmail.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/base"

  aside {
    float: left;
    width: 300px;
    display: block;
    box-sizing: inherit
  }

  .aside-box {
    margin-bottom: 8px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }

  .aside-box a {
    color: #c88326;
    color: #333;
    cursor: pointer;
    text-decoration: none;
  }

  .aside-box h3.aside-title {
    font-size: 12px;
    color: #3d3d3d;
    background: #f5f5f5;
    padding: 0 16px;
    height: 38px;
    line-height: 38px;
  }

  .aside-box .profile-intro {
    padding: 16px 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e3e3e3;
  }

  .aside-box .profile-intro .avator-box {

  }

  .aside-box .profile-intro .avator-box .avator-pic {
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .aside-box .profile-intro .user-info {
    margin-left: 8px;
    width: 138px;
  }

  .aside-box .profile-intro .user-info p.name a {
    display: inline-block;
    color: #3d3d3d;
    font-weight: 700;
    max-width: 100px;
  }

  .aside-box .profile-intro .opt-box .btn {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 0 8px;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    border: none;
    background-color: transparent;
    height: 34px;
    line-height: 32px;
    min-width: 72px;
    cursor: pointer;
  }

  .aside-box .profile-intro .opt-box a.btn {
    margin-top: 0;
    width: 56px;
    height: 28px;
    min-width: auto;
    font-size: 12px;
  }

  .aside-box .profile-intro .opt-box .btn-sm {
    margin-top: 6px;
    margin-bottom: 6px;
    height: 30px;
    line-height: 28px;
    min-width: 72px;
  }

  .aside-box .profile-intro .opt-box .btn-red-hollow {
    color: #ca0c16 !important;
    border: 1px solid #ca0c16 !important;
    background-color: #fff !important;
    -webkit-transition: background-color .1s ease-in-out;
    transition: background-color .1s ease-in-out;
  }

  .aside-box .data-info {
    padding: 16px 10px;
    border-bottom: 1px solid #e3e3e3;
  }

  .aside-box .data-info dl {
    width: 70px;
    height: 44px;
  }

  .aside-box .data-info .count {
    font-weight: 700;
  }

  .aside-box .grade-box {
    margin-top: -8px;
    padding: 16px;
    height: 68px;
  }

  .aside-box .grade-box dl {
    margin-top: 8px;
    float: left;
    width: 50%;
  }

  .aside-box .grade-box dl dt {
    display: inline;
    width: 42px;
  }

  .aside-box .grade-box dl dd {
    display: inline;
  }

  .aside-box .aside-content {
    padding: 16px;
    overflow: hidden;
  }

  .aside-content {
    word-break: break-all;
  }

  .aside-box .aside-content .hotArticle-list {
    margin-top: -8px;
  }

  .aside-box .aside-content li {
    margin-top: 8px;
  }

  .aside-box .aside-content li a {
    color: #c88326;
    display: block;
    max-height: 44px;
    overflow: hidden;
    word-break: break-all;
  }

  .aside-box .aside-content li p.read {
    font-size: 12px;
    color: #858585;
    line-height: 20px;
  }

  .aside-box .aside-content li p.comment {
    font-size: 12px;
    color: #858585;
    line-height: 20px;
    word-break: break-all;
  }

  .aside-box .aside-content li li p.comment a.user-name {
    color: #858585;
    display: inline;
  }

  .d-flex {
    display: flex !important;
  }

  .item-tiling {
    width: 100%;
  }

  .text-center {
    text-align: center;
  }
</style>
