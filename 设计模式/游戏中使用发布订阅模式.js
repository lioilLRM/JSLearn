// 发布-订阅模式的实现
class EventBus {
  constructor() {
    this.subscribers = {}
  }

  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = []
    }
    this.subscribers[eventType].push(callback)
  }

  publish(eventType, data) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType].forEach(callback => {
        callback(data)
      })
    }
  }
}

// 游戏对象
class Game {
  constructor() {
    this.eventBus = new EventBus()
    this.players = []
  }

  // 添加玩家
  addPlayer(player) {
    this.players.push(player)
  }

  // 移动玩家，并发布位置变化事件
  movePlayer(playerId, newPosition) {
    const player = this.players.find(player => player.id === playerId)
    if (player) {
      player.position = newPosition
      this.eventBus.publish('playerMoved', { playerId, newPosition })
    }
  }

  // 发布游戏事件
  publishGameEvent(eventName, eventData) {
    this.eventBus.publish(eventName, eventData)
  }
}

// 玩家对象
class Player {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.position = { x: 0, y: 0 }
  }

  // 订阅位置变化事件
  subscribeToPositionChanges(callback) {
    game.eventBus.subscribe('playerMoved', event => {
      console.log(`位置`, event)
      if (event.playerId === this.id) {
        callback(event.newPosition)
      }
    })
  }
}

// 创建游戏实例
const game = new Game()

// 创建玩家
const player1 = new Player(1, 'Player 1')
const player2 = new Player(2, 'Player 2')

// 添加玩家到游戏
game.addPlayer(player1)
game.addPlayer(player2)

// 玩家订阅位置变化事件
player1.subscribeToPositionChanges(newPosition => {
  console.log(`${player1.name} moved to (${newPosition.x}, ${newPosition.y})`)
})

// 移动玩家并触发位置变化事件
game.movePlayer(1, { x: 10, y: 20 })
game.movePlayer(1, { x: 30, y: 20 })

