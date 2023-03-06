## How to use findOne function in [Repository]
1. src/book/handbook.service.ts/HandBookService/detail
```js
async detail(id: number) {
    return await this.handBookRepository.findOne({
      select: ['id', 'name', 'introduce', 'summary', 'authorIntro', 'price', 'completionAt', 'isAllDone', 'coverURL', 'isAgree'],
      where: {
        id,
      },
    });
  }
```

2.src/user/user.service.ts/UserService/findOne
```
   
async findOne(options): Promise<User> {
    const user = await this.userRepository.findOne({
      select: options.select,
      where: options.where,
    });
    return user;
  }
```

3. src/cms/category.service.ts/CategoryService/searchCategoryByName
```
  async searchCategoryByName(keyword: string) {
    return await this.categoryRepository.findOne({
      select: {
        id: true,
        name: true,
      },
      where: {
        name: keyword,
      },
    });
```
   4. src/user/user.service.ts/UserService/findSettings
   ```js
   async findSettings(userID: number) {
    const settings = await this.settingsRepository.findOne({
      where: { userID },
    });
    return settings;
  }
   ```
   5.src/boilingpoint/boilingpoint.service.ts/BoilingPointService/isExist
   ```js
   async isExist(id: number): Promise<boolean> {
    const boilingPoint = await this.boilingPointRepository.findOne({
      id,
    }, {
      select: ['id'],
    });
    return boilingPoint !== null;
  }
   ```
   6. src/book/book.service.ts/BookService/isChapterExist
   ```js
   async isChapterExist(id: number): Promise<boolean> {
    const chapter = await this.chapterRepository.findOne({
      select: ['id'],
      where: {
        id,
      },
    });
    return chapter !== null;
  }
   ```
  7. src/boilingpoint/topic.service.ts/TopicService/basic
  ```js
  async basic(id: number): Promise<BoilingPointTopic> {
    return await this.topicRepository.findOne({
      where: {
        id,
      },
    });
  }
  ```
  8. src/cms/article.service.ts/ArticleService/isExist
  ```js
  async isExist(id: number): Promise<boolean> {
    const article = await this.articleRepository.findOne({
      id,
    }, {
      select: ['id'],
    });
    return article !== null;
  }
  ```
  9. src/boilingpoint/boilingpoint.service.ts/BoilingPointService/findOne
  ```js
  async findOne(options): Promise<BoilingPoint> {
    return await this.boilingPointRepository.findOne({
      select: options.select,
      where: options.where,
    });
  }
  ```
  10. src/cms/crawler.service.ts/CrawlerService/detail
  ```js
  async detail(id: number) {
    return await this.crawlerArticleRepository.findOne({
      where: { id },
    });
  }
  ```
  11. src/user/user.service.ts/UserService/isExist
  ```js
  async isExist(id: number) {
    const user = await this.userRepository.findOne({
      id,
    }, {
      select: ['id'],
    });
    return user !== null;
  }
  ```
  12. src/book/handbook.service.ts/HandBookService/isOwner
  ```js
  async isOwner(id: number, userID) {
    const handbook = await this.handBookRepository.findOne({
      select: ['id'],
      where: {
        id,
        userID,
      },
    });
    return !!handbook;
  }
  ```
  13. src/user/user.service.ts/UserService/isUserNameExist
  ```js
  async isUserNameExist(username: string) {
    const user: User | undefined = await this.userRepository.findOne({
      select: ['id'],
      where: {
        username,
      },
    });
    return !!user;
  }```
  14. src/user/user.service.ts/UserService/findUser
  ```js
  async findUser(where, select) {
    const user = await this.userRepository.findOne({
      select,
      where,
    });
    return user;
  }
  ```
  15. src/book/book.service.ts/BookService/isChapterInBook
  ```js
  async isChapterInBook(chapterID: number, bookID: number) {
    const chapter = await this.chapterRepository.findOne({
      select: {
        id: true,
      },
      where: {
        id: chapterID,
        bookID,
      },
    });
    return !!chapter;
  }
  ```