% M8POLIN
% Linearly polarized light.
% Graph of cos( 2?x/360) on x-axis and cos(2?x/360 + ?) on y-axis
function M8POLIN;
x = (1:1:360);

% 1. Before enterting the birifringent plate X = 0;
Phi1 = 0;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi1)/360);

figure(1);
subplot(2,2,1);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,2);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% 2. At the plane X = L
Phi2 = 180;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi2)/360);

subplot(2,2,3);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,4);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% The resulting vibration is along the diagonal