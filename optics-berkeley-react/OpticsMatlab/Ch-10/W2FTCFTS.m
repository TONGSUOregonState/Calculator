% W2FTCFTS
% Example of real fft and complex cfft on a real object function.
function W2FTCFTS;
global A;
% 1. The real FT fft
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

figure(1);
subplot(3,3,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The real Fourier Transformation
c = fft(yi);
N2 = length(c);
j = (0:1:N2-1);

subplot(3,3,2);
plot(j,real(c)/sqrt(N2));
axis([0 150 -5 5]);
xlabel('j');
legend('real(c)/sqrt(N2)');

% The inverse fourier transformation
x = ifft(c);
Nx = length(x);
k = (0:1:Nx-1);

subplot(3,3,3);
plot(k,x);
axis([0 300 -4 2]);
xlabel('k');
legend('x');

% We can not use x = fft(c) we get
% the "Error Message"
% c must be real

% 2. The complex Fourier Transformation
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

subplot(3,3,4);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The complex Fourier Transformation
cc = fft(yi);
Ncc = length(cc);
k = (0:1:Ncc-1);

subplot(3,3,5);
plot(k,real(cc)/sqrt(Ncc));
axis([0 300 -5 5]);
xlabel('k');
legend('real(cc)/sqrt(Ncc)');

% The inverse Fourier Transformation
xx = ifft(cc);
Nxx = length(xx);
k = (0:1:Nxx-1);

subplot(3,3,6);
plot(k,real(xx));
axis([0 300 -4 2]);
xlabel('k');
legend('real(xx)');

% 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/sqrt(Ncc));
Nxxx = length(xxx);
f = (0:1:Nxxx - 1);

subplot(3,3,8);
plot(f,real(xxx)/sqrt(Nxxx));
axis([0 300 -4 2]);
xlabel('f');
legend('real(xxx)/sqrt(Nxxx)');




function Out=y(i);
global A;
for k=1:length(i)
    
    sum1 = 0;
    for n=1:3
        sum1 = sum1 - (logical(A(n)-i(k))>=0);
    end;
    sum2 = 0;
    for n=4:8
        sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)^n);
    end;
    output(k) = sum1+sum2;
end;
Out = output;
