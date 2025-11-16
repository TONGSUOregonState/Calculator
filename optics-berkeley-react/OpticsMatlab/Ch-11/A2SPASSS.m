% A2SPASSS
% Spherical aberration of a single refracting surface.
% Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
% Calculation of image point xi and corrected image point xiisph
% All length in cm.

function A2SPASSS;
% 1. Calculation of xi(xo) for negative values of xo
ro = 2;
n = 1.5;
r = 10;
xo = (-20:-1:-100);
xi = 1./(((n-1)/(n*r))+1./(n*xo));

% 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A

xiisph = n./(((n-1)/r)+1./xo+((n-1)/(n^2))*((ro^2)/2)*(((1/r-1./xo).^2).*(1/r-((n+1)./xo))));

figure(1);
subplot(4,2,1);
plot(xo,xi,xo,xiisph);
axis([-100 0 0 100]);
xlabel('xo');
legend('xi(xo)','xiisph(xo)');

subplot(4,2,2);
plot(xo,xi-xiisph);
axis([-100 0 -10 20]);
xlabel('xo');
legend('xi(xo)-xiisph(xo)');

% 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30;
rr = 10;
nn = (1.4:0.01:4);
xi = 1./((nn-1)./(nn*rr)+1./(nn*xxo));
xiisph = n./(((nn-1)/r)+1/xxo+((nn-1)./(nn.^2))*((ro^2)/2).*(((1/r-1/xxo)^2).*(1/r-((nn+1)/xxo))));

subplot(4,2,3);
plot(nn,xi);
axis([1 4 0 300]);
xlabel('nn');
legend('xi(nn)');

subplot(4,2,4);
plot(nn,xiisph);
axis([1 4 0 200]);
xlabel('nn');
legend('xiisph(nn)');

% There is no value for which LSA = 0
subplot(4,2,5);
plot(nn,xi-xiisph);
axis([1 4 0 100]);
xlabel('nn');
legend('xi(nn)-xiisph(nn)');


% 4. Calculation of xiisph(rrr) depending on the radius of curvature rrrr
nnn = 1.5;
xxxo = 10;
rrr = (1:1:20);
xi = 1./((nnn-1)./(nnn*rrr)+1./(nnn*xxxo));
xiisph = n./(((nnn-1)./rrr)+1/xxxo+((nnn-1)/(nnn.^2))*((ro^2)/2)*(((1./rrr-1/xxxo).^2).*(1./rrr-((nnn+1)/xxxo))));

subplot(4,2,6);
plot(rrr,xi);
axis([0 20 0 15]);
xlabel('rrr');
legend('xi(rrr)');

subplot(4,2,7);
plot(rrr,xiisph);
axis([0 20 0 15]);
xlabel('rrr');
legend('xiisph(rrr)');

subplot(4,2,8);
plot(rrr,xi-xiisph);
axis([0 20 -0.5 1]);
xlabel('rrr');
legend('xi(rrr)-xiisph(rrr)');