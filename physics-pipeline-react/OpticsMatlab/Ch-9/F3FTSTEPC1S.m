% F2FTSTEPDS
% The complex FT is used.
% Fourier transform of SINGLE SIDED step function of width 0 to d.

function F3DTSTEPC1S;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

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