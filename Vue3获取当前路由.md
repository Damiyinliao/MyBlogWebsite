## 【vue3】获取当前页面路由的四种方法
1. 第一种
```js
import { defineComponent,ref} from 'vue';
import { useRouter } from 'vue-router';

console.log('router',router.currentRoute.value.fullpath);
```
2. 第二种
```js
import { defineComponent, ref, getCurrentInstance } from 'vue';

const { proxy }: any = getCurrentInstance();
console.log(proxy.$router.currentRoute.value.fullpath);
```
3. 第三种
```js
import { defineComponent, ref, toRaw} from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()
console.log(toRaw(router).currentRoute.value.fullPath);

```
4. 第四种
```js
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()
watch(
  () => router,
  (newValue, oldValue) => {
    console.log(newValue.currentRoute.value.fullPath);
  },
  { immediate: true }
);
//在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
```
