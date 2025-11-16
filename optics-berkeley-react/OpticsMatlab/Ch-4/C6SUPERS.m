% C6SUPERS

% (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
% Demonstration of the superposition of waves .
% The medium wavelength is ?m = 2

% 1. Summation over four waves

function C6SUPERS;

x = (-200:0.5:200);

Lamda1=1.85;
Lamda2=1.95;
Lamda3=2.05;
Lamda4=2.15;
y11=cos(2*pi*x/Lamda1);
y12=cos(2*pi*x/Lamda2);
y13=cos(2*pi*x/Lamda3);
y14=cos(2*pi*x/Lamda4);
y1=y11+y12+y13+y14;

figure(1);
subplot(2,1,1);
plot(x,y1);
axis([-200 200 -5 5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y1(x)');

% 2.Integration over the wavelength interval fro the superposition
nx = length(x);
for r=1:nx;
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r));    
end;
%y41=quad(@y41f,1.85,2.15,0.1);
%y41 = quad(y41f,1.85,2.15,0.1);


   

subplot(2,1,2);
plot(x,y41);
axis([-200 200 -0.5 0.5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


function Out = y41f(Lamda,x) 
Out = cos(2*pi*x./Lamda);