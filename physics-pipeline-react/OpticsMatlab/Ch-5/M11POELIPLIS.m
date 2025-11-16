% M11POELIPLIS
% Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
% cos( -2????x/360) on z- axis and cos( -2????x/360 + ????) on y-axis
function M11POELIPLIS;
x = (1:1:360);
Phi1 = 0;
Phi2 = pi/4;
Phi3 = pi/2;
Phi4 = 3*pi/4;
Phi5 = pi;
Phi6 = (5*pi)/4;
Phi7 = (3*pi)/2;
Phi8 = 7*pi/4;
y1 = cos(-2*pi*(x/360));
y2 = cos(-2*pi*(x/360));
y3 = cos(-2*pi*(x/360));
y4 = cos(-2*pi*(x/360));
y5 = cos(-2*pi*(x/360));
y6 = cos(-2*pi*(x/360));
y7 = cos(-2*pi*(x/360));
y8 = cos(-2*pi*(x/360));
yy1 = cos(-2*pi*(x/360) + Phi1);
yy2 = cos(-2*pi*(x/360) + Phi2);
yy3 = cos(-2*pi*(x/360) + Phi3);
yy4 = cos(-2*pi*(x/360) + Phi4);
yy5 = cos(-2*pi*(x/360) + Phi5);
yy6 = cos(-2*pi*(x/360) + Phi6);
yy7 = cos(-2*pi*(x/360) + Phi7);
yy8 = cos(-2*pi*(x/360) + Phi8);


figure(1);
subplot(4,1,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x)');
legend('yy1(x)');

subplot(4,1,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x)');
legend('yy2(x)');

subplot(4,1,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x)');
legend('yy3(x)');

subplot(4,1,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x)');
legend('yy4(x)');

figure(2);
subplot(4,1,1);
plot(y5,yy5);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y5(x)');
legend('yy5(x)');

subplot(4,1,2);
plot(y6,yy6);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y6(x)');
legend('yy6(x)');

subplot(4,1,3);
plot(y7,yy7);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y7(x)');
legend('yy7(x)');

subplot(4,1,4);
plot(y8,yy8);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y8(x)');
legend('yy8(x)');