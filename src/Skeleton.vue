<template>
  <div class="container">
    <div class="nav">
      <div v-for="item in nav1" :key="item.title" class="nav-item">
        <router-link :to="item.link">
          <div class="icon-img"></div>
          <div class="title">{{item.title}}</div>
        </router-link>
      </div>
    </div>
    <div class="guess-like">
      <h3>猜你喜欢2222</h3>
      <div class="guess-like-content">
        <div class="guess-like-list">
          <div class="food-img"></div>
          <div class="food-explain">
            <span class="name"></span>
            <span class="address"></span>
            <div class="price"></div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav1: [
        {
          "title": "美食",
          "link": "/food"
        },
        {
          "title": "猫眼电影",
          "link": "/movie"
        },
        {
          "title": "酒店",
          "link": "/food"
        },
        {
          "title": "休闲娱乐",
          "link": "/movie"
        },
        {
          "title": "外卖",
          "link": "/food"
        },
        {
          "title": "ktv",
          "link": "/movie"
        },
        {
          "title": "周边游",
          "link": "/food"
        },
        {
          "title": "丽人",
          "link": "/movie"
        },
        {
          "title": "小吃快餐",
          "link": "/food"
        },
        {
          "title": "火车票",
          "link": "/food"
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .router-link-active {
    text-decoration: none;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: .4rem 2%;
    .nav-item {
      width: 20%;
      font-size: .4rem;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #000;
      }
      .icon-img {
        width: .88rem;
        height: .88rem;
        background: skyblue;
        border-radius: 50%;
      }
      .title {
        margin-top: .1rem;
      }
    }
  }
  .guess-like {
    background: #fff;
    padding: 0 2%;
    h3 {
      font-size: .42rem;
      border-bottom: .02rem solid #DDD8CE;
    }
    .guess-like-content {
      .guess-like-list {
        display: flex;
        will-change: 100%;
        padding: .2rem 0;
        border-bottom: .02rem solid #DDD8CE;
        .food-img {
          width: 1.8rem;
          height: 1.64rem;
          background: #ccc;
        }
        .food-explain {
          display: flex;
          flex-direction: column;
          width: 70%;
          margin-left: .2rem;
          .name,
          .address,
          .price {
            width: 80%;
            height: .3rem;
            display: inline-block;
            background: #ccc;
          }
          .address,
          .price {
            margin-top: .3rem;
          }
        }
      }
    }
  }
}
</style>
