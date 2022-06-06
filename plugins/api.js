import order from "~/api/order"

export default ( ctx , inject) => {
	// Set the function directly on the context.app object
	inject('order', order(ctx.$axios))
  }