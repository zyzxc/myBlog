<template>
  <main>
    <div class="filter-box">

    </div>
    <div class="article-list" v-for="item in articleList">
      <div class="article-item-box">
        <h4 class="text-truncate">
          <a>
            <span class="article-type type-1">原</span>
            {{item.articleName}}
          </a>
        </h4>
        <p class="content">
          <a href="#">{{item.content}}</a>
        </p>
        <div class="info-box d-flex align-content-center">
          <p>
            <span class="date">{{item.createAt}}</span>
          </p>
          <p>
            <span class="read-num">阅读数：{{item.read}}</span>
          </p>
          <p>
            <span class="read-num">评论数：{{item.comment}}</span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import {ERR_OK} from "store/constant"

  export default {
    data() {
      return {
        articleList: []
      }
    },
    mounted() {
      this._getArticleList()
    },
    methods: {
      _getArticleList() {
        axios.get(this.webUrl + 'article/getArticleList').then((res) => {
          if (res.data.code === ERR_OK) {
            this.articleList = res.data.result
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/base"

  main {
    width: 900px;
    display: block;
    float: right;
  }

  .filter-box {
    padding: 0 24px;
    height: 48px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }

  .article-list {
    margin-top: 1px;
    margin-bottom: 200px;
    padding: 0;
    background-color: transparent;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    word-break: break-all;
  }

  .article-list .article-item-box {
    position: relative;
    position: relative;
    margin-bottom: 1px;
    padding: 16px 24px;
    background-color: #fff;
  }

  .article-list .article-item-box h4 {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 28px;
    color: #3d3d3d;
  }

  .article-list .article-item-box span.article-type {
    margin-right: 8px;
    margin-top: 0;
    vertical-align: 2px;
  }

  span.article-type {
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
  }

  .article-list .article-item-box .type-1 {
    color: #ca0c16;
    border: 1px solid #f4ced0;
  }

  .article-list .article-item-box p.content a {
    font-size: 14px;
    color: #999;
  }

  .article-list .article-item-box div.info-box {
    padding-top: 8px;
    font-size: 14px;
    color: #6b6b6b;
  }

  .article-list .article-item-box .info-box p {
    margin-right: 24px;
  }

  .article-list .article-item-box .text-truncate a:hover {
    color: #EE6633;
    cursor: pointer;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .d-flex {
    display: flex !important;
  }

  .align-content-center {
    align-content: center !important;
  }
</style>
