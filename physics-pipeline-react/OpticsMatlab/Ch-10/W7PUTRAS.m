% W7PUTRAS
% Incoherent case, one dimensional.
% Object is a pulse y. Lens is cylindrical with spread function (sinx/x)^2.
% FT of spread Functoin = transfer function.

% The image is FT of ( FT of spread function (transfer function) times FT of object).

function W7PUTRAS;
% Object: Sum of step functions
k = (0:1:255);
b1 = 100;
b2 = 140;
b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0);

figure(1);
subplot(3,2,1);
plot(k,yk);
axis([0 300 0 1.5]);
xlabel('k');
legend('yk');

% FT of the Object y is Omega

Omega = fft(yk);
N = length(Omega);

subplot(3,2,2);
plot(k,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('k');
legend('real(\omega)/sqrt(N)');
% The spread function is (sinz/z)^2 because of cylindrical lens
% FT of spread function is transfer function Tau
% f# = f/2a = fn
Sk = (sin((pi*k)/(fn*Lamda*255))./((pi*k)/(fn*Lamda*255))).^2;
Sk(1)=0; % error correction, division by zero at first element
Tau = fft(Sk);
N = length(Tau);

subplot(3,2,3);
plot(k,real(Tau)/sqrt(N));
axis([0 300 -0.005 0.01]);
xlabel('k');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(k,real(Phi)/N);
axis([0 300 -0.1 0.1]);
xlabel('k');
legend('real(\phi)/N');
% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(k,yy);
axis([0 300 0 0.02]);
xlabel('k');
legend('yy');