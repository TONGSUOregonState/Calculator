% F8FTSINC183S
% Fourier transform of sinz/z function of width 0 to d
% The FT (inverse) of the FT is also shown

function F8FTSINC183S;
% Original Function
i = (0:1:183);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 0.8 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 183
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.8 -0.5 0.5]);
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
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');