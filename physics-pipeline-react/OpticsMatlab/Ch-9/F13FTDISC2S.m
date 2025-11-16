% F13DTDISC2S
% The cos-function show "mirror" symmetry around the
% middle of the interval, at the beginning and at the end.
function F13DTDISC2S;
% Length interval is 1,2,3...
% 1.Frequencies f = 1/128, 2/128, 3/128
i = (0:1:127);
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(63/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequencies f=63/128, 64/128, 65/128
y63 = cos(2*pi*(63/128)*i);
y64 = cos(2*pi*(64/128)*i);
y65 = cos(2*pi*(65/128)*i);

subplot(3,1,2);
plot(i,y63,i,y64,i,y65);
axis([0 128 -1 1]);
xlabel('i');
legend('y63','y64','y65');

% 3.Expended graph
j = (20:1:50);
y63j = cos(2*pi*(63/128)*j);
y64j = cos(2*pi*(64/128)*j);
y65j = cos(2*pi*(65/128)*j);

subplot(3,1,3);
plot(j,y63j,j,y64j,j,y65j);
axis([20 50 -1 1]);
xlabel('j');
legend('y63j','y64j','y65j');
