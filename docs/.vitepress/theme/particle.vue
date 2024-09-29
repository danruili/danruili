<template>
  <div class="particle-container">
      <canvas class="particle-canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
    data() {
    return {
      balls: [],
      ballNumber: 20,
      ballColor: '#3f6fcd',
      velocityFactor: 1,
      radiusFactor: 10,
      radiusBase: 30,
      maxVelocity: 1,
      goalForceFactor: 0.5,
      relaxationTime: 2,
      agentForceFactor: 0.5,
      agentForceDecay: 60,
      wallForceFactor: 0.1,
      wallForceDecay: 10,
      marginOverflowOneSide: 0,
      canvasHeightFactor: 0.6,
    };
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      this.marginOverflowOneSide = (this.radiusBase + this.radiusFactor) * 2;
      canvas.width = window.innerWidth + this.marginOverflowOneSide * 2;

      if (window.innerWidth > 750) {
        canvas.height = window.innerHeight * this.canvasHeightFactor;
      } else {
        canvas.height = window.innerHeight;
      }
      
      canvas.style.left = -this.marginOverflowOneSide + "px";
      this.createBalls(this.ballNumber);
      this.update(ctx);
    },
    createBalls(numberOfBalls) {
      
      for (let i = 0; i < numberOfBalls; i++) {
        const radius = this.radiusBase + Math.random() * this.radiusFactor;
        const desiredDirection = Math.sign(Math.random() - 0.5);
        const ball = {
          x: Math.random() * (this.$refs.canvas.width - radius * 2) + radius,
          y: Math.random() * (this.$refs.canvas.height - radius * 2) + radius,
          vx: desiredDirection * this.velocityFactor,
          vy: (Math.random() - 0.5),
          ax: 0,
          ay: 0,
          desiredVelocity: desiredDirection * this.velocityFactor,
          radius: radius,
          perceptionRadius: radius * 3,
          color: this.ballColor,
          draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          },
        };
        this.balls.push(ball);
      }
    },
    update() {
      const canvas = this.$refs.canvas;

      // if canvas is null, skip the update
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      ctx.globalAlpha = 0.3;
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.balls.forEach((ball, index) => {
        ball.draw(ctx);
        // iterate through all other balls to check their distance and apply forces
        this.balls.forEach((otherBall) => {
          if (ball === otherBall) return;
          const dx = otherBall.x - ball.x;
          const dy = otherBall.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < ball.perceptionRadius) {
            const force = this.agentForceFactor * Math.exp((ball.radius - distance) / this.agentForceDecay);
            ball.ax -= force * dx / distance;
            ball.ay -= force * dy / distance;
          }
        });

        // update wall force
        if (ball.y > this.$refs.canvas.height - ball.radius) {
          ball.ay -= this.wallForceFactor * (ball.y - this.$refs.canvas.height + ball.radius) / this.wallForceDecay;
        }
        if (ball.y < ball.radius) {
          ball.ay -= this.wallForceFactor * (ball.y - ball.radius) / this.wallForceDecay;
        }

        // update goal force
        ball.ax += this.goalForceFactor * (ball.desiredVelocity - ball.vx) / this.relaxationTime;
        ball.ay += this.goalForceFactor * (0 - ball.vy) / this.relaxationTime;

        // update velocity
        ball.vx += ball.ax;
        ball.vy += ball.ay;

        // clamp velocity to max velocity
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed > this.maxVelocity) {
          ball.vx = (ball.vx / speed) * this.maxVelocity;
          ball.vy = (ball.vy / speed) * this.maxVelocity;
        }

        // update position and handle wrapping
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.x > this.$refs.canvas.width - ball.radius) {
          ball.x = this.marginOverflowOneSide - ball.radius;
        }
        if (ball.x < ball.radius) {
          ball.x = this.$refs.canvas.width - this.marginOverflowOneSide + ball.radius;
        }

        ball.ax = 0;
        ball.ay = 0;
      });

      requestAnimationFrame(() => this.update(ctx));
    },
    resizeCanvas() {
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      canvas.width = window.innerWidth + this.marginOverflowOneSide * 2;
      if (window.innerWidth > 750) {
        canvas.height = window.innerHeight * this.canvasHeightFactor;
      } else {
        canvas.height = window.innerHeight;
      }
    },
  },
  mounted() {
    this.initCanvas();
    window.addEventListener('resize', this.resizeCanvas);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeCanvas);
  },
  
}
</script>

<style>
.particle-canvas {
  position: absolute;
  z-index: -1;
  height: 85vh;
  min-height: 400px;
  background-size: cover;
}
.particle-container {
  position: absolute;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  min-height: 400px;
}
@media (max-width: 750px) {
    .particle-canvas{
        height: auto;
    }
    .particle-container{
        height: auto;
    }
}
</style>
