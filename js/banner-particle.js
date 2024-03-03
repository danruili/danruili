const ball_number = 30;
const ball_color = "#fff";
// const ball_color = "#f6f6f6";
// const ball_color = "#dddddd";

const velocity_factor = 1;
const radius_factor = 20;
const radius_base = 30;

const max_velocity = 1;
const goal_force_factor = 0.5;
const relaxation_time = 2;
const agent_force_factor = 0.5;
const agent_force_decay = 60;
const wall_force_factor = 0.1;
const wall_force_decay = 10;

const margin_overflow_one_side = (radius_base + radius_factor) * 2;
const canvas_height_factor = 0.6;

document.addEventListener('DOMContentLoaded', function() {

    var canvas = document.getElementById('my-canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth + margin_overflow_one_side*2;
    if (window.innerWidth > 750){
        canvas.height = window.innerHeight * canvas_height_factor;
    }
    else {
        canvas.height = window.innerHeight;
    }
    
    canvas.style.left = -margin_overflow_one_side + "px";
  
    var balls = []; // Array to hold multiple balls
    
    function createBalls(numberOfBalls) {
        for (let i = 0; i < numberOfBalls; i++) {
        var radius = radius_base + Math.random() * radius_factor;
        var desired_direction = Math.sign(Math.random()- 0.5)
        var ball = {
            x: Math.random() * (canvas.width - radius * 2) + radius,
            y: Math.random() * (canvas.height - radius * 2) + radius,
            vx: desired_direction * velocity_factor,
            vy: (Math.random() - 0.5),
            ax: 0,
            ay: 0,
            desired_velocity: desired_direction * velocity_factor,
            radius: radius,
            perception_radius: radius*3,
            color: ball_color,
            draw: function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                // ctx.fillStyle = this.color;
                // ctx.fill();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        };
        balls.push(ball);
        }
    }

    function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function(ball) {
        ball.draw();

        // iterate through all other balls to check their distance
        balls.forEach(function(otherBall) {
            if (ball === otherBall) return;
            var dx = otherBall.x - ball.x;
            var dy = otherBall.y - ball.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < ball.perception_radius) {
                var force = agent_force_factor * Math.exp((ball.radius - distance)/agent_force_decay);
                ball.ax -= force * dx / distance;
                ball.ay -= force * dy / distance;
            }
        });

        // update wall force
        if (ball.y > canvas.height - ball.radius) {
            ball.ay -= wall_force_factor * (ball.y - canvas.height + ball.radius) / wall_force_decay;
        }
        if (ball.y < ball.radius) {
            ball.ay -= wall_force_factor * (ball.y - ball.radius) / wall_force_decay;
        }

        // update goal force
        ball.ax += goal_force_factor*(ball.desired_velocity - ball.vx) / relaxation_time;
        ball.ay += goal_force_factor*(0 - ball.vy) / relaxation_time;

        // update velocity
        ball.vx += ball.ax;
        ball.vy += ball.ay;

        // clamp velocity to max velocity
        var speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed > max_velocity) {
            ball.vx = (ball.vx / speed) * max_velocity;
            ball.vy = (ball.vy / speed) * max_velocity;
        }

        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.x > canvas.width - ball.radius) {
            ball.x = margin_overflow_one_side - ball.radius;
        }
        if (ball.x < ball.radius) {
            ball.x = canvas.width - margin_overflow_one_side + ball.radius;
        }

        ball.ax = 0;
        ball.ay = 0;
    });

    requestAnimationFrame(update);
    }

    createBalls(ball_number); // Create 100 balls
  
    update();
});

// when window is resized, resize the canvas
window.addEventListener('resize', function() {
    var canvas = document.getElementById('my-canvas');
    canvas.width = window.innerWidth + margin_overflow_one_side*2;
    if (window.innerWidth > 750){
        canvas.height = window.innerHeight * canvas_height_factor;
    }
    else
    {
        canvas.height = window.innerHeight;
    }
  });