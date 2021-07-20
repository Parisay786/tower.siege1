class SlingShot{ 
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10      
        }
        this.sling = constarint.create(options);
        World.add(world.this.sling);
        this.pointB = pointB
    }
}