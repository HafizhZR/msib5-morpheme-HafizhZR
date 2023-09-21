import { defineStore } from 'pinia'

interface IProducts {
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
    Products: [
      {
        id: 1,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 3,
        name: 'Coffee Maker',
        price: 49.99,
        category: 'Kitchen Appliances',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 4,
        name: 'Desk Chair',
        price: 149.99,
        category: 'Furniture',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 6,
        name: 'Digital Camera',
        price: 399.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 7,
        name: 'Microwave Oven',
        price: 129.99,
        category: 'Kitchen Appliances',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 8,
        name: 'Running Shorts',
        price: 29.99,
        category: 'Clothing ',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 9,
        name: 'Gaming Console',
        price: 499.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 10,
        name: 'Coffee Table',
        price: 199.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 11,
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 12,
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 13,
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 14,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 15,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 16,
        name: 'Coffee Maker',
        price: 49.99,
        category: 'Kitchen Appliances',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 17,
        name: 'Desk Chair',
        price: 149.99,
        category: 'Furniture',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 18,
        name: 'Bluetooth Speaker',
        price: 69.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 19,
        name: 'Digital Camera',
        price: 399.99,
        category: 'Electronics',
        image: 'https://picsum.photos/200/200',
      },
      {
        id: 20,
        name: 'Microwave Oven',
        price: 129.99,
        category: 'Kitchen Appliances',
        image: 'https://picsum.photos/200/200',
      },
    ] as IProducts[],
  }),
  actions: {

    deleteProduct(id: number) {
      this.Products = this.Products.filter(item => item.id !== id)
    },
  },
})
