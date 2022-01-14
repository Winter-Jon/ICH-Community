import Vue from "vue";
import Vuex from "vuex";

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const store = new Vuex.Store({
  // state：保存状态(共享变量)
  state:{
    counter:10,
    students:[
      {id:111, name:'jyh', age:18},
      {id:112, name:'quk', age:25},
      {id:113, name:'ops', age:36},
      {id:114, name:'lkj', age:20}
    ]
  },
  // mutations：定义一些方法(默认传入一个state参数)，对状态进行修改
  //   注：mutations中的方法必须是同步方法
  //   mutation是修改state的唯一途径
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    increaseCount(state, count){
      // 1、普通的修改方式
      // state.counter += count

      // 2、特殊的封装方式
      state.counter += count.count
    }
  },
  // actions类似于mutations，但是是用来替代其进行异步操作的。
  //  其中函数的默认参数：context: 上下文(相当于store)
  //  只能通过修改mutation间接改变state，而不能直接改
  // actions中也可以传递参数，方法与mutations相同
  actions:{
    aDecrement(context, payload){
      setTimeout(() => {
        context.commit('decrement')
        console.log(payload);
      }, 1000)
    }
  },
  // getters:类似于计算属性
  getters:{
    // 例如：获取counter的平方
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age >= 15)
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // 当我们需要输入参数时，getter必须返回一个函数
      return function (age){
        return state.students.filter(s => s.age > age)
      }
    },
  },
  // modules的出现是为了避免store对象变得过于臃肿
  modules:{
    a:{
      state:{
        name:'zhangsan'
      },
      mutations:{
        // 调用方法：this.$store.commit('updateName')
        // 尽量不要起和父state中的mutation相同的名字，因为会优先从那其中寻找
        updateName(state, payload){
          state.name = payload
        }
      },
      actions:{
        test(context){

        }
      },
      getters:{
        // 使用方法：$store.getters.fullName
        fullName(state){
          return state.name + '111'
        },
        fullName2(state, getters){
          return getters.fullName + '222'
        },
        // 使用root调用父store中的state内容
        fullName3(state, getters, root){
          return getters.fullName2 + root.counter
        },
      }
    },
    b:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    }
  }
})

// 3、导出store对象
export default store

// 对store中对象的使用:
// 同步：this.$store.commit(function, args)
// 异步：this.$store.dispatch(function, args)