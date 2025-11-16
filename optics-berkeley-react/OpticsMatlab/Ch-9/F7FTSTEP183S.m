% F7FTSTEP183S
% Complex Fourier transform of step function of width 0 to d.
% 183 points are used. The FT(inverse) of the FT is also shown.

function F7FTSTEP183S;
% Original Function
i = (0:1:183);
d = 20;
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j,real(c)/sqrt(N+1),j,-imag(c)/sqrt(N+1));
axis([0 200 -2 2]);
xlabel('j');
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
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');