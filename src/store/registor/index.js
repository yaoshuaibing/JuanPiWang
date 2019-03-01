const mutations={
    addToCart (state, cartItem) {
      const isInCart = state.cart.some(item => item.id === cartItem.id)
      if (isInCart) {
        state.cart = state.cart.map((item) => {
          const newItem = Object.assign({}, item)
          if (newItem.id === cartItem.id) {
            newItem.count += 1
          }
          return newItem
        })
      } else {
        state.cart.push({
          count: 1,
          ...cartItem
        })
      }
      window.localStorage.setItem('ca-cart', JSON.stringify(state.cart))
    },
    changeCartCountByIdAndType (state, payload) {
      state.cart = state.cart.map((item) => {
        const newItem = Object.assign({}, item)
        if (newItem.id === payload.id) {
          if (payload.type === 'add') {
            newItem.count += 1
          } else {
            newItem.count -= 1
          }
        }
        return newItem
      })
      window.localStorage.setItem('ca-cart', JSON.stringify(state.cart))
    },
    toggleTabbar (state, show = true) {
      state.isShowTabbar = show
    }
  }
  

const state ={
  count: 100,
  cart: JSON.parse(window.localStorage.getItem('ca-cart')) || [],
  isShowTabbar: true
}
const actions={}
const getters={
  cartCount (state) {
    return state.cart.reduce((total, item) => {
      // eslint-disable-next-line
      total += item.count;
      return total
    }, 0)
  }
}



export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}