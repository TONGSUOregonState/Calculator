% F16APODIS
% Fourier transformation of sine-function and Appodisation

function F16APODIS;
% 1.Original function
f = 31;
k = (0:1:255);
y = cos(2*pi*f*(k/255));

figure(1);
subplot(3,2,1);
plot(k/255,y);
axis([0 1 -1 1]);
xlabel('k/255');
legend('y');

% 2.Step function
d = 255;
i = (0:1:400);
p = ((logical(i)>=0) - (logical(i-d)>=0));

subplot(3,2,2);
plot(i/255,real(p),i/255,imag(p));
axis([0 2 -0.5 1.5]);
xlabel('i/255');
legend('real(p)','imag(p)');

yp = cos(2*pi*f*(i/255)).*p;

subplot(3,2,3);
plot(i/255,yp);
axis([0 1.6 -1 1]);
xlabel('i/255');
legend('yp');

% 3.Fourier transformation of y times p, we have to use 255 points
k = (0:1:255);
x = cos(2*pi*f*(k/255)).*((logical(k)>=0) - (logical(k-d)>=0));
c = fft(x);
N = length(c) - 1;
j =(0:1:N);



subplot(3,2,4);
plot(j,real(c)/sqrt(N+1));
axis([-5 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

% 4.Triangle function
q = 1-k/255;
ay = q.*y;

subplot(3,2,5);
plot(k/255,ay);
axis([0 1 -1 1]);
xlabel('k/255');
legend('ay');

% 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,6);
plot(j, real(c)/sqrt(N+1));
axis([0 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

