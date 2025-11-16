% N1RECBOX
% Modes of the rectangular box in two dimensions 
% Standing sine waves in x and y direction. Mode number and constants.
% x direction n1 and a
% y direction n2 and b
% The wave in each direction is shown and Contour and surface plots.
% The square is also shown as surface plot.
function N1RECBOX;
N = 20;
a = 40;
b = 40;
n1 = 2;
n2 = 2;

Lamda1 = 2 * a /n1;
Lamda2 = 2 * b /n2;

i =(0:1:N); 
j =(0:1:N);

x = (-40) + 2.001*i;
y = (-40) + 2.0001*j;

y1 = sin(2*pi*x/Lamda1);
y2 = sin(2*pi*y/Lamda2);

% 1. One Dimension
figure(1);
subplot(1,2,1);
plot(x,y1);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Xi');
legend('y1(x)');

subplot(1,2,2);
plot(y,y2);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Yj');
legend('y2(y)');

% 2. Amplitude, 2D
nx = length(x);
ny = length(y);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            M11(r,c)= y1(r)*y2(c);
            MM11(r,c)= (y1(r)*y2(c))^2;
        end;
end;

figure(2);
subplot(2,2,1);
              
contour(M11);
axis([0 20 0 20]);  



subplot(2,2,2);
mesh(M11);
axis([0 20 0 20 -1 1])

% 3. Intensity, 2D

subplot(2,2,3);              
contour(MM11);
axis([0 20 0 20]);  

subplot(2,2,4);
mesh(MM11);
axis([0 20 0 20 0 1])
