% W17HOGRPERS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function. A blocking function has been chosen for blocking certain
% frequencies such that there are twice as many peaks in the image.

% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W17HOGRPERS;
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
subplot(3,1,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');
% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,1,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(\omega)/sqrt(N)');
% Blocking function y

q=5;
a=5;
Tau = 0;
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0);
end;
subplot(3,1,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('\tau');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;


% The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,yy);
axis([0 150 -1 2]);
xlabel('i');
legend('yy');

title('Product: FT (inverse) of object and Blocking Function');
% For comparison: The original object
subplot(1,2,2);
plot(i,yi);
axis([0 150 -0.5 2]);
xlabel('i');
legend('yi');
title('The Original Object');


