% N7PLPPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition for p-polarization.
% global definition of n1,n2,n3, d and ? above the graph
function N7PLPPS;

n1 = 1.5;
n2 = 1;
n3 = 1;
d = 6;
Lamda = 4.3;
LamdaLamda = Lamda/n1
% LamdaLamda = 2.867

Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zp1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2)*n1)./((n2^2)*cos(2*pi*Theta/360));
yp1 = -atan(zp1);
zp3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2)*n1)./((n3^2)*cos(2*pi*Theta/360));
yp3 = -atan(zp3);

% For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + pi;
yyp = -yp1 -yp3 + pi*2;
yyyp = -yp1 -yp3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('y(\theta)','yp(\theta)','yyp(\theta)','yyyp(\theta)');

% At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
% fulfilled.
% The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(yp),Theta,angle(yyp),Theta,angle(yyyp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(yp(\theta))','angle(yyp(\theta))','angle(yyyp(\theta))');

