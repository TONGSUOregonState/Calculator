% W15HOGRIBLOHIS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function fow low frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W15HOGRIBLOHIS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% Blocking function y

% Low frequencies may pass
a = 25;
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('\tau');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(\phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -1 2]);
xlabel('i');
legend('real(x)');
title('FT (inverse) of the unmodified FT');


