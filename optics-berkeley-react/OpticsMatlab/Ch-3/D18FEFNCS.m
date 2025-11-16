
% D18FEFNCS
% Fresnel's Integrals C(Y) and S(Y).

function D18FEFNCS;


Y = (0:0.01:5);
[t,cy]=ode45(@D18COS,Y,[0]);
[t,sy]=ode45(@D18SIN,Y,[0]);



figure(1);
subplot(3,2,1);
plot(t,cy);
axis([0 6 0 1]);                
xlabel('Y');
legend('C(Y)');

subplot(3,2,2);
plot(t,sy);
axis([0 6 0 1]);                
xlabel('Y');
legend('S(Y)');


subplot(2,1,2);
plot(t,cy,t,sy);
axis([0 5 0 0.8]);                
xlabel('Y');
legend('C(Y)','S(Y)');

function Out=D18COS(T,X)
Out=[cos((pi/2)*(T^2))];

function Out=D18SIN(T,X)
Out=[sin((pi/2)*(T^2))];

