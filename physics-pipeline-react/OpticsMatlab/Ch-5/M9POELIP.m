% M9POELIP Circular and ellipticlly polarized light

% To demonstrate of circular or elliptically polarized light turning "left or "right".
% Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
% and 0 to 315 degrees.

% The angle ranges (x) correspond to chosen time ranges. Left and right
% polarized light is described by positive or negative ?=?/2 in one component:
% Positive ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

% Negative ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
% We write for Ez = bAsin(x). When looking in direction of the incoming light,
% "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
% polarized light (clock wise).

function M9POELIP;
x1 = (1:1:90);
x2 = (1:1:160);
x3 = (1:1:235);
x4 = (1:1:315);
b = -1;

y1 = cos(-2*pi*(x1/360));
y2 = cos(-2*pi*(x2/360));
y3 = cos(-2*pi*(x3/360));
y4 = cos(-2*pi*(x4/360));

yy1 = b*sin(-2*pi*(x1/360));
yy2 = b*sin(-2*pi*(x2/360));
yy3 = b*sin(-2*pi*(x3/360));
yy4 = b*sin(-2*pi*(x4/360));

figure(1);
subplot(2,2,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x1)');
legend('yy1(x1)');

subplot(2,2,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x2)');
legend('yy2(x2)');

subplot(2,2,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x3)');
legend('yy3(x3)');


subplot(2,2,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x4)');
legend('yy4(x4)');
