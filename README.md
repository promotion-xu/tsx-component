# tsx-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### CSS无外链模式
1. 页面渲染速度更快
2. 迁移与引用更方便
3. 没有了跨域问题
4. 没有合并的成本
   



WebSocket推送json对象格式：
```ts
{
	// 站点抓拍总人数
	"total":123456,
	// 进站口人数
	"enter":3456,
	// 出站口人数
	"leave":2344,
	// 楼层统计
	floors:{
		"B2层":12,
		"B1层":87,
		"1层":87,
		"2层":47
	}
	// 最近7小时分时统计，假设当前时间14:20，最后的14点的值会实时变动
	hourStats:{
		"8":102,
		"9":100,
		"10":102,
		"11":100,
		"12":102,
		"13":100,
		"14":102
	}
	// 站口实时统计
	exits:{
		"1号口":1001,
		"2号口":1001,
		"3号口":1001,
		"4号口":1001,
		"5号口":1001,
		"6号口":1001,
		"7号口":1001
	}
	// 实时人像推送
	urls:[
		"http://10.10.40.233:80/image_20180712_17_33010000000000000001_yluf4m.Jpeg",
		"http://10.10.40.233:80/image_20180712_17_33010000000000000001_yluf4m.Jpeg",
		"http://10.10.40.233:80/image_20180712_17_33010000000000000001_yluf4m.Jpeg",
		"http://10.10.40.233:80/image_20180712_17_33010000000000000001_yluf4m.Jpeg"
	]
}
```
#### vue + tsx 模板
