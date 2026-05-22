import { defineStore } from 'pinia'
import axios from 'axios'

export const useGadgetStore = defineStore('gadget', {

  state: () => ({
    gadgets: []
  }),

  actions: {

    async fetchGadgets() {

      try {

        const response = await axios.get('/api/gadgets/data.json')

        console.log(response.data)

        this.gadgets = response.data

      } catch (error) {

        console.log(error)

      }

    }

  }

})
