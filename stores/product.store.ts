import { defineStore } from 'pinia'

export interface IProducts {
  id: number
  name: string
  price: number
  category: string
  image: string
  description?: string
  action?: string
}

export const useProductStore = defineStore('Product', {
  state: () => ({
    Products: dataProducts as IProducts[],
  }),
  actions: {
    addProduct(product: IProducts) {
      this.Products.push(product)
    },
    getDetailProduct(id: number) {
      return this.Products.find(item => item.id === Number(id))
    },
    deleteProduct(id: number) {
      this.Products = this.Products.filter(item => item.id !== id)
    },
    editProduct(product: IProducts) {
      const index = this.Products.findIndex(item => item.id === product.id)
      this.Products[index] = product
    },
  },
})
