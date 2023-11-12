// import '@nutui/nutui-taro/dist/style.css'
import '@nutui/nutui-taro/dist/styles/themes/default.scss'
import {
  Icon,
  Button,
  Sku,
  Popup,
  InputNumber,
  Calendar,
  Dialog,
  Swiper,
  SwiperItem,
} from '@nutui/nutui-taro'
import { App } from 'vue'
const setNutUi = (app: App) => {
  app
    .use(Icon)
    .use(Button)
    .use(Sku)
    .use(Popup)
    .use(InputNumber)
    .use(Calendar)
    .use(Dialog)
    .use(Swiper)
    .use(SwiperItem)
}
export default setNutUi
