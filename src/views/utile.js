/*
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-17 15:42:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-17 16:49:39
 */
import { ref, onMounted, onUnmounted, toValue, watchEffect } from 'vue'
export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}

// export const useFetch = (url) => {
//   const data = ref(null)
//   const error = ref(null)

//   const fetchData = () => {
//     data.value = null
//     error.value = null

//     fetch(toValue(url))
//       .then((res) => res.json())
//       .then((json) => (data.value = json))
//       .catch((error) => (error.value = error))
//   }
//   watchEffect(() => {
//     fetchData()
//   })
//   if (Array.isArray(data.value)) {
//     return { data, error }
//   } else {
//     return { data: [data], error }
//   }
// }
export const useFetch = (url) => {
  const data = ref(null)
  const error = ref(null)

  watchEffect(async () => {
    data.value = null
    error.value = null
    const urlValue = toValue(url)

    try {
      await timeout()
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = e
    }
  })

  return { data, error }
}

const timeout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}
