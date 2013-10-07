# Buble

A bubble tower defense game powered by HTML5.

## 游戏介绍

### 形式

泡泡龙+塔防+元素

### 规则

- 塔防：怪物由怪物门生成，向城堡进军，每波结束地图重置，每5波出现boss。
- 泡泡龙：元素魔法师可以发射出元素泡泡，三个以上相同泡泡相连可对怪物产生元素伤害。魔法师不能接触到堆叠的泡泡。

其他设定，

- 元素种类：毒绿、雷银、冰蓝、火红
- 碰撞检测：泡泡不会与怪物碰撞，泡泡爆炸的伤害范围为泡泡的覆盖范围
- 泡泡生成：魔法师无法选择元素泡泡（每个泡泡出现的概率均为1/4），但可以预先知道下三个将会生成的元素泡泡。地图中可能会存在初始随机覆盖的泡泡，它们不会自动消除，~~且一旦消除会自动随机生成新泡泡~~（细节待定）。
- 元素特效：毒绿能降低敌人移动速度，雷银能造成波动伤害，冰蓝能将敌人冰动固定，火红能造成持续伤害。
- **伤害判定：通过三个以上的相连元素泡泡对敌人造成伤害,相连的泡泡数量越多伤害越高。（细节待定）**
- 胜负判定：当城堡的生命耗尽, 或者元素魔法师接触到自己的元素泡泡则游戏失败。反之过关。

### 游戏流程

待定。

## 关于开发

我们使用[GameJs](http://gamejs.org/)与[RequireJs](http://requirejs.org/)，如果你对这个游戏有兴趣，欢迎加入开发~~