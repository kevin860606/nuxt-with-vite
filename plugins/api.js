import order from "~/api/order.js"

export default ( app , inject) => {
	// Set the function directly on the context.app object
	// const repositoryWithAxios = order(app.$axios)
	inject('order', order(app.$axios))
  }