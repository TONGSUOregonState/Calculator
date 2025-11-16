% F15FOLDS
% Folding of the spectrum.
% For the sampling interval 1/255, highest frequency is 128,
% the frequencies are at 65, 85, 105, all below 127.
function F15FOLDS;
% a.Sample interval i/255
i = (0:1:255);
y1 = cos(2*pi*65*(i/255)) + cos(2*pi*85*(i/255)) + cos(2*pi*105*(i/255));

figure(1);
subplot(3,2,1);
plot(i/255,y1);
axis([0 1 -2 4]);
xlabel('i/255');
legend('y1');

c = fft(y1);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,2);
plot(j,real(c)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(c)/sqrt(N+1)');
% Frequency peaks are at 65 85 105

% b.Sample interval 2i/255

% For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
% 65, 85, 105, all larger than 64 and appear folded.

y2 = cos(2*pi*65*((2*i)/255))+cos(2*pi*85*((2*i)/255)) + cos(2*pi*105*((2*i)/255));

subplot(3,2,3);
plot(2*(i/255),y2);
axis([0 2 -2 4]);
xlabel('2*(i/255)');
legend('y2');

cc = fft(y2);
N = length(cc) - 1;
j = (0:1:N);


subplot(3,2,4);
plot(j,real(cc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(cc)/sqrt(N+1)');
% Frequency peaks appear 65 at--> 125
%                        85 at--> 85
%                       105 at--> 45

% c. Sample interval 4i/255
% For the sampling interval 4/255, highest frequency 32, the frequencies are
% higher than 1 times 32 and 2 times 32.

y4 = cos(2*pi*65*((4*i)/255)) + cos(2*pi*85*((4*i)/255)) + cos(2*pi*105*((4*i)/255));

subplot(3,2,5);
plot(4*(i/255), y4);
axis([0 4 -2 4]);
xlabel('4*(i/255)');
legend('y4');

ccc = fft(y4);
N = length(ccc)-1;
j = (0:1:N);

subplot(3,2,6);
plot(j,real(ccc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(ccc)/sqrt(N+1)');

% Frequency peaks appear 65 at--> 5
%                        85 at--> 85
%                       105 at--> 90
