% W18HOSTEPS

% The object y has a complicated shape. Its FT is the hologram c. It may be
% produced in the focal plane of a lens, using parallel light.

% The illumination of the hologram with parallel light will reproduce the object,
% that is the FT(inverse) of the FT, called here cc.

% We want to study the reproduced object when the information in the hologram
% is only partly used, that is we multiply cc with a filter f.
% We show separately f and the FT of the product of f and cc.

% The width of the filter f may be changed by using various values for "a" and "b",
% corresponding to changing the size of the hologram.
function W18HOSTEPS;
% The Object
A = [33 80 80 50 20 99 160 200];
i = (0:1:255);
yi = 0;
for n=1:3
    yi = yi +(-(logical(A(n)-i)>=0));
end;
for n=4:8
    yi = yi +((logical(A(n)-i)>=0)*((-1)^n));
end;
figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The hologram
c = fft(yi);
N = length(c);
k= (0:1:N-1);
j= (0:1:N-1);

subplot(3,2,2);
plot(k,real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('real(c)/sqrt(N)');

% The FT of the hologram
% The FT of the FT(hologram)

cc = c;
yy = ifft(cc);
N = length(cc);
j = (0:1:N-1);

subplot(3,2,3);
plot(j, real(yy));
axis([0 255 -4 2]);
xlabel('j');
legend('real(yy)');

% The filter
a= 60;
b= 60;
f = (logical(a-j)>=0) + (logical(j-255+b)>=0);

subplot(3,2,4);
plot(j,f);
axis([0 300 0 2]);
xlabel('j');
legend('f');

% The product: hologram x filter
subplot(3,1,3);
plot(k,f.*real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('f*real(c)/sqrt(N)');

% The FT (inverse) of the changed hologram (hologram x filter),
% similar to the object
ccc = c.*f;
x = ifft(ccc);
N = length(ccc);

figure(2);

subplot(1,2,1);
plot(k, real(x));
axis([0 300 -4 2]);
xlabel('k');
title('The FT (inverse) of the changed hologram (hologram x filter)');

subplot(1,2,2);
% For comparison: The object.
plot(i, yi);
axis([0 300 -2 2]);
xlabel('i');
title('The Object');
