<script setup lang="ts">
import { useForm } from 'vee-validate'
import { mixed, number, object, string } from 'yup'
import { VQuillEditor } from '@morpheme/quill-editor'

// const productStore = useProductStore()

const name = ref('')
const price = ref('')
const category = ref('')
const image = ref('')
const descriprion = ref('')

const schema = object({
  name: string().required().label('Name'),
  price: number().required().label('Price'),
  category: string().required().label('Category'),
  image: mixed().required().label('Image'),
  descriprion: string().required().label('Decription'),
})

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await schema.validate(values)

    // productStore.addProducts({
    //   id: productStore.Products.length + 1,
    //   name: values.name,
    //   price: parseFloat(values.price),
    //   category: values.category,
    //   image: values.banner,
    // })

    resetForm()

    // eslint-disable-next-line no-alert
    alert('Product added successfully')
  }
  catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <ClientOnly>
    <div class="mb-6">
      <VText variant="display-md">
        Products
      </VText>
      <p class="text-gray-500 dark:text-neutral-500">
        Manage your products here
      </p>
    </div>
    <form class="border-none" @submit="onSubmit">
      <v-file-upload
        v-model="image"
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
          wrapper-class="mb-2"
          name="name"
          label="Name"
          placeholder="Product Name"
        />
        <VInput
          v-model="price"
          wrapper-class="mb-2"
          name="price"
          label="Price"
          placeholder="Product Price"
        />
        <VInput
          v-model="category"
          wrapper-class="mb-2"
          name="category"
          label="Category"
          placeholder="Product Category"
        />
      </div>
      <VQuillEditor
        v-model="descriprion"
        name="description"
        label="Description"
        placeholder="Product Description"
      />

      <div class="mt-4">
        <v-btn type="submit">
          Submit
        </v-btn>
        <v-btn type="button" text @click="resetForm">
          Reset
        </v-btn>
      </div>
      <pre>{{ { values } }}</pre>
    </form>
  </ClientOnly>
</template>
