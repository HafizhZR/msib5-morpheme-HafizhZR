<script setup lang="ts">
import { useForm } from 'vee-validate'
import { mixed, number, object, string } from 'yup'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

// import { VEditor } from '@morpheme/editor'
import type { IProducts } from '@/stores/product.store'

const route = useRouter()
const idString = useRoute().params.id
const id = +idString
const productStore = useProductStore()

const product = productStore.getDetailProduct(id)

const schema = object({
  name: string().required().label('Name'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  description: string().required().label('Decription'),
  image: mixed().required().label('Image'),
})

const { resetForm } = useForm({
  validationSchema: schema,
})
const name = ref(product?.name || '')
const price = ref(product?.price || '')
const category = ref(product?.category || '')
const description = ref(product?.description || '')
const image = ref(product?.image || '')

// eslint-disable-next-line antfu/top-level-function
const onSubmit = () => {
  const editedProduct: IProducts = {
    id,
    name: name.value,
    price: Number(price.value),
    category: category.value,
    image: image.value,
    description: description.value,
  }

  productStore.editProduct(editedProduct)
  route.push('/products')
}

const itemsBread = ref<VBreadcrumbItemProps[]>([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Edit Product',
    to: `/products/edit/${id}`,
  },
])
</script>

<template>
  <VContainer padded>
    <div class="flex justify-between">
      <VBreadcrumbs :items="itemsBread" />
      <ColorModeSwitcher />
    </div>
    <ClientOnly>
      <div class="mb-6">
        <VText variant="display-md">
          Edit Product
        </VText>
      </div>
      <form class="border-none" @submit="onSubmit">
        <v-file-upload
          v-model="image"
          :value="product?.image"
          wrapper-class="mb-4"
          theme="image"
          name="image"
          label="Image"
          placeholder="Pick your image product"
          rounded
          image
        />
        <div class="grid grid-cols-3 justify-between gap-5">
          <VInput
            v-model="name"
            :value="product?.name"
            wrapper-class="mb-2"
            name="name"
            label="Name"
            placeholder="Product Name"
          />
          <VInput
            v-model="price"
            :value="product?.price"
            wrapper-class="mb-2"
            name="price"
            label="Price"
            placeholder="Product Price"
          />
          <VInput
            v-model="category"
            :value="product?.category"
            wrapper-class="mb-2"
            name="category"
            label="Category"
            placeholder="Product Category"
          />
        </div>
        <VInput
          v-model="description"
          :value="product?.description"
          wrapper-class="mb-4 text-black"
          name="description"
          label="Description"
          placeholder="Product Description"
        />
        <!-- <VEditor
          v-model="description"
          :value="product?.description"
          wrapper-class="mb-4 text-black"
          name="description"
          label="Description"
          placeholder="Product Description"
          rounded
        /> -->
        <div class="mt-4">
          <v-btn type="submit">
            Submit
          </v-btn>
          <v-btn type="button" text @click="resetForm">
            Reset
          </v-btn>
        </div>
      </form>
    </ClientOnly>
  </VContainer>
</template>
