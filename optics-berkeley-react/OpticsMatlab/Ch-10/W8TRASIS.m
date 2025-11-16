% W8TRASIS
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function the sinc function


function W8TRASIS;
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

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.03]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.2]);
xlabel('i');
legend('real(\phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.04]);
xlabel('i');
legend('yy');