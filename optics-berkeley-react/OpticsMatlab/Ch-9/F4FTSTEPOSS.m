% F4FTSTEPOSS
% The complex FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F4FTSTEPOSS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
legend('real(x)','imag(x)');
xlabel('i');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');
