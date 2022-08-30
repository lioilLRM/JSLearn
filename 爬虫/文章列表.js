 let list = [
  {
    title: '1 写一篇文章前，必须先明确目标',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFlZTJhYWNlNGIwNjZlOTYwODBjYzBiIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '2 如何让自己每天都有话题可写？| 战略篇',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFlZTNhZWNlNGIwNTQyNTVkOTk3ZTk2IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '3 文章 = 问题 + 回答',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFlZThjNjllNGIwNjZlOTYwODBmOGMwIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '4 万能模板，让你写作时思路源源不断',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFlZjY0MzBlNGIwNTQyNTVkOTljMWY1IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '5 如何写开头，让人想读下去？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFlZjZkNWJlNGIwYmVhZWU0MjVkOGYyIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '6 每天写什么？ | 战术篇',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmMTNiYjhlNGIwNjZlOTYwODE5N2M0IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '7 如何刻意练习写作，每天都有进步？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmMjFmOGZlNGIwNjZlOTYwODFiODNkIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '8 如何让别人，更有效的给你点评文章？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmM2I5YzZlNGIwMmI4MjU4NDc4NDMyIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '9 如何开始写第一篇文章？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNGI5ZDhlNGIwNjZlOTYwODIyY2FkIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '10 写作和长期赚钱的关系，你之前可能都错了',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNjBjZDNlNGIwNjZlOTYwODI1NTVjIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '11 通过写作，锻炼用户视角（需求挖掘能力）',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNjE0OTVlNGIwNGQ3ZTJmYzhlYWU5IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '12 通过写作，锻炼学习能力',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNzRiMThlNGIwYmVhZWU0MjcyZjEwIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '13 通过写作，锻炼思考（分析）能力',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNzViN2ZlNGIwNTQyNTVkOWIxODBkIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '14 通过写作，锻炼传递感知（销售能力）',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmNzVjZmRlNGIwNjZlOTYwODI2ZGMwIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '15 普通人写出 10w+，核心能力是什么？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmOGI1OGVlNGIwMmI4MjU4NDdlZGExIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '16 每天写作，让你心态变得更好',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmOGJjODFlNGIwNGQ3ZTJmYzkxMGE0IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '17 每天写作，帮你提高 10 倍赚钱效率',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmOGM3ZDJlNGIwMmI4MjU4NDdlZTZiIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '18 普通人对写作的认识，分 4 个阶段',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmOTBkMWRlNGIwNjZlOTYwODI3ZWRiIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '19 每日写作，如何让自己获得反馈？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmOWYzOGZlNGIwNGQ3ZTJmYzkxZDFjIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '20 如何拆解优质文章，让自己吸收？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYTAxMGJlNGIwYmVhZWU0Mjc0YjE0IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '21 如何让自己的文章更有价值？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYTBlMmZlNGIwYmVhZWU0Mjc0YmY4IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '22 想靠专业技能变现，如何写文章？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYTFlMmJlNGIwNjZlOTYwODI4ODllIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '23 如何让文章更有逻辑？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYTYwZDRlNGIwMmI4MjU4NDgwMWM3IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '24 用搭积木的方法，写出一篇好文章',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYjNlZmFlNGIwNjZlOTYwODI5ODljIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '25 如何持续写作，最重要的一件事',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYjU1ZTNlNGIwNjZlOTYwODI5YTY5IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '26 如何持续写作，你需要掌握一个策略',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYjcyMDVlNGIwNGQ3ZTJmYzkzMzk2IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '27 觉得自己的文章没价值，怎么办？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYjhiYTNlNGIwYmVhZWU0Mjc2MWUzIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '28 如何让你的文章，读起来更流畅？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmYzg5ZmFlNGIwYmVhZWU0Mjc2ZTk0IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '29 万能模板-梳理自己的情绪',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmY2FjOWFlNGIwMmI4MjU4NDgyMWRkIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '30 这 2 个万能词，让你的文章不枯燥',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZGVhM2JlNGIwYmVhZWU0Mjc4ZGM2IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '31 万用模板-今天学到了什么？',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZGY3MzJlNGIwNjZlOTYwODJjYmVlIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '32 文章标题，只有一个作用',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZTM3YzVlNGIwNGQ3ZTJmYzk2OTMwIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '33 好标题的 2 个心法，6 个方法',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZTM4MGFlNGIwNjZlOTYwODJkMTk4IiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '34 万用模板-学到一个知识',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZjc2NDVlNGIwNTQyNTVkOWI5ODBlIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '35 万用模板-发生一件事',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZjdkOGJlNGIwNjZlOTYwODJmMDdjIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '36 万用模板-读了一本书',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjFmZjgwNzdlNGIwYmVhZWU0MjdiNTRjIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '37 万用模板-复盘自己的一天',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjIwMDg3ZTllNGIwNGQ3ZTJmYzlhNThiIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '38 万用模板-拆解赚钱案例',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjIwMDkzYzNlNGIwMmI4MjU4NDg4MzliIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  },
  {
    title: '先看这节：课程使用说明书',
    url: '/content_page/eyJ0eXBlIjoyLCJyZXNvdXJjZV90eXBlIjoxLCJyZXNvdXJjZV9pZCI6ImlfNjIwM2E0YjhlNGIwNjZlOTYwODNjMjNkIiwicHJvZHVjdF9pZCI6InBfNjFlYTNkNDhlNGIwNGQ3ZTJmYzY4OTk4IiwiYXBwX2lkIjoiYXBwcnZoanB1dWI2Mzg0In0'
  }
]