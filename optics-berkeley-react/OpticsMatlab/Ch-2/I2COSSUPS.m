% I2COSSUPS

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at a time instance and graphs are shown for six different path differences.

function I2COSSUPS;

X = (0:0.05:4);
Lamda = 1;
A = 1;
t1 = 0.1;
T = 1;
delta1 = 0;
delta2 = 0.1;
delta3 = 0.2;
delta4 = 0.3;
delta5 = 0.4;
delta6 = 0.5;

u1 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta1)/Lamda)-(t1/T)));
u2 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta2)/Lamda)-(t1/T)));
u3 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta3)/Lamda)-(t1/T)));
u4 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta4)/Lamda)-(t1/T)));
u5 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta5)/Lamda)-(t1/T)));
u6 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta6)/Lamda)-(t1/T)));

figure(1);
plot(X,u1.^2,X,u2.^2,X,u3.^2,X,u4.^2,X,u5.^2,X,u6.^2);
axis([0 4 0 4]);                  % PLOTS LIMITS                    
xlabel('x','Fontsize',12);
title('Figure 1','FontSize',12);
legend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');