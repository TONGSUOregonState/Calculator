% C7COHTEMS

% Demonstration of the superposition of two waves when integrating over a
% wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.

function C7COHTEMS;
global Delta1 Delta2 Delta3;
x = (-200:1:200);

LamdaM = 2;
a1 = 0;
a2 = 0.5;
a3 = 1;
Delta1 = LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;



% 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
figure(1);
subplot(3,1,1);
plot(x,y41);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


% 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
% We have to use an expanded scale to see the result
subplot(3,1,2);
plot(x,y51);
axis([-200 200 -0.05 0.05]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
% superposition of two waves, for phase difference, using ?3 = ??m*a3.
% The phase difference is 1 ?m. .

subplot(3,1,3);
plot(x,y61);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)');






function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);