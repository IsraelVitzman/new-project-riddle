export class Player {
    static list = []

    constructor(name, aveTime, allTime) {

        this.name = name
        this.allTime = allTime
        this.aveTime = aveTime
    }
    add() {
        Player.list.push({ "name": this.name, "aveTime": this.aveTime, "allTime": this.allTime })
    }
    getList() {
        return Player.list
    }

}