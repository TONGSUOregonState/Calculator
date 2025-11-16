% M7FREVA. Penetration into the less dense medium at total reflection.

% Exponential factor for decrease of amplitude into the less
% dense medium with -Y for two different refractive indices:

% ?c is the critical angle

% Different refractive indices. The value "a" is used to "be off" the critical angle

function M7FREVA;
% First we set
a = 2;
n1 = 1.5;
n2 = 1;
Lamda = 0.0005;
nn1 = 3.4;
nn2 = 1;
z = asin(n2/n1);  
zz = asin(nn2/nn1);

Y = (-0.00005:-0.00005:-0.001);

Theta1c = z * 360/(2*pi)
Theta2c = zz * 360/(2*pi)

% Theta1c = 41.81;
% Theta2c = 17.105;

Theta1  = Theta1c + 2;
Theta2 =  Theta2c + a;

k2 = 2*(pi/Lamda) * n2;
A = 1;
kk2 = 2 * (pi/Lamda) * nn2;

y1 = A*exp(Y*k2*sqrt((n1*sin((2*pi/360)*Theta1)/n2)^2 - 1));
y2 = A*exp(Y*kk2*sqrt((nn1*sin((2*pi/360)*Theta2)/nn2)^2 - 1));

figure(1);
plot(Y,y1,Y,y2);
axis([-1e-3 0 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('y1(Y)','y2(Y)');

% To study different angles, make refractive indices the same for both and change "a"
% to values larger than 2.