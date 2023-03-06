## 如何使用bcryptjs
1. 安装bcryptjs
```js 
npm i bcryptjs
```
2. 使用
```js
// 引入 bcryptjs
const bcryptjs = require('bcryptjs')
// 原始密码
const password = '123456'
/**
 * 加密处理 - 同步方法
 * bcryptjs.hashSync(data, salt)
 *    - data  要加密的数据
 *    - slat  用于哈希密码的盐。如果指定为数字，则将使用指定的轮数生成盐并将其使用。推荐 10
 */
const hashPassword = bcryptjs.hashSync(password, 10)
/**
 * 输出
 * 注意：每次调用输出都会不一样
 */
console.log(hashPassword) // $2a$10$P8x85FYSpm8xYTLKL/52R.6MhKtCwmiICN2A7tqLDh6rDEsrHtV1W
/**
 * 校验 - 使用同步方法
 * bcryptjs.compareSync(data, encrypted)
 *    - data        要比较的数据, 使用登录时传递过来的密码
 *    - encrypted   要比较的数据, 使用从数据库中查询出来的加密过的密码
 */
const isOk = bcryptjs.compareSync(password, '$2a$10$P8x85FYSpm8xYTLKL/52R.6MhKtCwmiICN2A7tqLDh6rDEsrHtV1W')
console.log(isOk)
```
这里面有个问题：在bcrypt.compareSync，为什么没有参数salt？由于哈希是从salt生成的，为什么比较明文密码不涉及哈希中使用的原始盐？

虽然对同一个密码，每次生成的hash不一样，但是hash中包含了salt（hash产生过程：先随机生成salt，salt跟password进行hash）； 在下次校验时，从hash中取出salt，salt跟password进行hash；得到的结果跟保存在DB中的hash进行比对，compareSync中已经实现了这一过程：bcrypt.compareSync(password, hashFromDB);

再看代码：
```js
const bcryptjs = require('bcryptjs')
// 原始密码
const password = '123456'
/**
 * 加密处理 - 同步方法
 * bcryptjs.hashSync(data, salt)
 *    - data  要加密的数据
 *    - slat  用于哈希密码的盐。如果指定为数字，则将使用指定的轮数生成盐并将其使用。推荐 10
 */
const hashPassword = ()=>bcryptjs.hashSync(password, 8);
console.log(hashPassword())
console.log(hashPassword())
console.log(hashPassword())
console.log(hashPassword())
console.log(hashPassword())
console.log(hashPassword())
console.log(hashPassword())
```
代码中，我们加了8这个盐，连续多次生成密码，看一下打印结果：
```js

```
我们看到，生成的密码中保存了盐，而每次验证时，会将盐取出来。
3. The ```bcrypt```  standard makes storing salts easy - everything it needs to check a password is stored in the output string.
>The prefix "$2a$" or "2y" in a hash string in a shadow password file indicates that hash >string is a bcrypt hash in modular crypt format. The rest of the hash string includes the cost > >parameter, a 128-bit salt (base-64 encoded as 22 characters), and the 192-bit[dubious – >discuss] hash value (base-64 encoded as 31 characters).