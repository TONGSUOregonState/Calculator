% W14TRANJ1S
% Coherent light.
% Fourier transformation of a periodic structure using FT of Bessel as
% transfer function
function W14TRANJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(besselj(1,(pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.1 0.05]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(\phi)/N');

% FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
