% F12FTDISC1S

% Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
% and so on to 130/128. Look for the repetition.

% Length interval is i = 1,2,3...
function F12FTDISC1S;
i = (0:1:140);

% 1.Frequencies
% f = 1/128, 2/128, 3/128
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(3/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequency 64/128
y64 = cos(2*pi*(64/128)*i);

subplot(3,1,2);
plot(i,y64);
axis([0 140 -1 1]);
xlabel('i');
legend('y64');

% 3.Frequencies
% 127/128, 128/128, 129/128, 130/128

y127 = cos(2*pi*(127/128)*i);
y128 = cos(2*pi*(128/128)*i); % will not show up on the graph
y129 = cos(2*pi*(129/128)*i); % same as 127/128 and 1/128
y130 = cos(2*pi*(130/128)*i); % same as 2/128

subplot(3,1,3);
plot(i,y127,i,y128,i,y129,i,y130);
axis([0 140 -1 1]);
xlabel('i');
legend('y127','y128','y129','y130');