export default $axios => ({
	list() {
	  return $axios.$get(`https://reqres.in/api/user/2`)
	},
})