const app = Vue
  .createApp({})
  // 親子関係にあるmy-parent/my-childコンポーネントを定義
  .component('my-parent', {
    template: `
      <div id="parent">
        <my-child />
      </div>
    `,
    errorCaptured(error, instance, info) {
      console.log('■■ Hook ■■');
      console.log(error);
      console.log(instance);
      console.log(info);
      return false;
    }
  })
  .component('my-child', {
    // マウント時に無条件に例外をスロー
    mounted() {
      // setTimeout(() => {
      //   throw new Error('Error is occured by setTimeout.');
      // }, 500);

      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     reject('Error is occured by Promise.');
      //   }, 500);
      // });

      throw new Error('Error is occured by my-child');
    },
    template: `
      <div id="child">
        MyChild
      </div>
    `
  });

// エラーハンドラーを定義
// app.config.errorHandler = (error, vm, info) => {
//   console.log('■■ Global ■■');
//   console.log(error);
//   console.log(vm);
//   console.log(info);
// };

app.mount('#app');
