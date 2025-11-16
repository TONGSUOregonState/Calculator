% N6PLSPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition of s-polarization.
% Global definition of n1, n2, n3, d and ? above the graph

function N6PLSPS;
n1 = 1.5;
n2 = 1;
n3 = 1;
d = 18;
Lamda = 2;
Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zs1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2))./(n1*cos(2*pi*Theta/360));
ys1 = -atan(zs1);
zs3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2))./(n1*cos(2*pi*Theta/360));
ys3 = -atan(zs3);

% ys is for m=1, yys for m=2, yyys for m=3
% For these parameters the angle
% Theta of the first three possible modes is determined

ys = -ys1 -ys3 + pi;
yys = -ys1 -ys3 + pi*2;
yyys = -ys1 -ys3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('y(\theta)','ys(\theta)','yys(\theta)','yyys(\theta)');


% At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
% fulfilled.
% The functions ys, yys and yyys are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(ys),Theta,angle(yys),Theta,angle(yyys));
axis([0 100 0 0.6]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(ys(\theta))','angle(yys(\theta))','angle(yyys(\theta))');