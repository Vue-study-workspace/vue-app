<template>
  <div>
    <form v-on:submit.prevent="onclick">
      <label for="isbn">ISBN：</label>
      <input type="text" id="isbn" v-model="isbn" /><br />
      <label for="title">書名：</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="price">価格：</label>
      <input type="number" id="price" v-model="price" /><br />
      <input type="submit" value="登録" />
    </form>
    <hr />
    <p>書籍は全部で{{ booksCount }}冊あります。</p>
    <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
      <li>{{ b.title }}（{{ b.price }}円）<br />ISBN：{{ b.isbn }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['booksCount', 'getBooksByPrice']),
  // フォーム内で扱う情報を準備
  data() {
    return {
      isbn: '',
      title: '',
      price: 0
    };
  },
  methods: {
    // 登録ボタンクリックでストアに反映
    // onclick() {
    //   this.$store.commit('addBook',{
    //     book: {
    //       isbn: this.isbn, title: this.title, price: this.price
    //     }
    //   });
    // },

    // 非同期
    onclick() {
      this.$store.dispatch('addAsync', {
        book: {
          isbn: this.isbn, title: this.title, price: this.price
        }
      });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
