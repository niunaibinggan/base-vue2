import Vue from 'vue'

const components = import.meta.globEager('../components/*/index.vue')

const buzComponents = import.meta.globEager('../buz-components/*/index.vue')

const allComponents = { ...components, ...buzComponents }

const modules = []

for (let com in allComponents) {
  const component = allComponents[com].default

  const name = allComponents[com].default.name

  modules.push({ name, component })
}

const installComponents = () => {
  modules.forEach(item => Vue.component(item.name, item.component))
}

export default installComponents
