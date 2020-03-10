new Vue({
  el: '#app',
  data(){
    return{
      currency: Object,
      date: null,
      baseCurrency: null
    }
  },
  mounted(){
    axios.get('https://api.exchangeratesapi.io/latest')
    .then((response)=>{
      
      this.currency = response.data.rates;
      console.log(response.data.rates)
      this.baseCurrency = response.data.base;
      this.date = response.data.date;
    })
  }
})