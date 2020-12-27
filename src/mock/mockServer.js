import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'
//todo 今日推荐接口
Mock.mock('/mock/recommends', { code: 200, data: recommends })
//todo  楼层接口
Mock.mock('/mock/floors', { code: 200, data: floors })
