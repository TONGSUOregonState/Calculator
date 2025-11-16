% G1FERMAT
% Fermat's Principle
% Graph of total travel time
% t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
% velocity v1
% t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
% velocity v2
% there is a y value for minimum time
xq=20;
xf=40;
yf=40;
y=(0:1:40);
% velocity
v1=1;
v2=2.5;
% v1 and v2 are at the Graph
% time in medium 1
t1=(1/v1)*sqrt((xq)^2+(y).^2);
% time in medium 2
t2=(1/v2)*sqrt((xf-xq)^2+(yf-y).^2);
T=t1+t2;

figure(1);
plot(y,T);
axis([0 40 35 55]);                  % PLOTS LIMITS                    
xlabel('y','Fontsize',12);
legend('T(y)');
title('Figure 1','FontSize',12);

% Changing the paramaters v1 and v2 changes the minimum time for total travel


