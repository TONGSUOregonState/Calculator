% F10FTGAUSGS
% Complex Fourier transformation of Gauss function for
% two values of a and for general Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F10FTGAUSGS;
i = (0:1:325);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1.5 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=325
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 400 0 2]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.6 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

