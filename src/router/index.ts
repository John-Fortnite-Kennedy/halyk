import { createWebHistory, createRouter } from "vue-router"
import documents from "../components/Documents.vue"
import form from "../components/Form.vue"

const routes = [{
    path: "/documents",
    name: "Documents",
    component: documents
  },
  {
    path: "/",
    name: "Form",
    component: form
  },]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router