% L10WRS Radius of curvature and Beam waist.
% 1. Radius of curvature
% Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)^2) and set
% w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
% Radius of curvature R(z) = z + (zR)^2/z

function L10WRS;

zR = 100;
z = (-100:0.01:100);
R = abs(z+((zR)^2)./z);
Rm = 2*zR;

% At z = 1/2 of distance of mirrors, that is
% for for distance 200 at 100,
% the radius of curvature must be
% equal to the distance of the mirrors.

figure(1);
subplot(2,1,1);
plot(z,R);
axis([-100 100 0 1000]);                  % PLOTS LIMITS                    
xlabel('z');
legend('R(z)');

% 2. Beam waist
% Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
% If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; % and for the asymptote
yy = -y;

w = 0.1*sqrt(1+(z/zR).^2); % and for the asymptote
ww = -0.1*sqrt(1+(z/zR).^2);

subplot(2,1,2);
plot(z,w,z,ww,z,y,z,yy);
axis([-100 100 -0.2 0.3]);                  % PLOTS LIMITS                    
xlabel('z');
legend('w(z)','ww(z)','y(z)','yy(z)');
