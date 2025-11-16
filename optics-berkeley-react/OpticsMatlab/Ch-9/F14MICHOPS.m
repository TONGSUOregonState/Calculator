% F14MICHOPS

% Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
% efficinecy.Fringe pattern on displacement of mirrors.

% Amplitude and intensity pattern depending on displacement x of mirror.
% The "space coordinate" is a sequence of discreate points, all having the same
% distance.

function F14MICHOPS;
% 1. Cosine function, one frequency, amplitude.
% The space coordinate runs from 0 to 127
i = (0:1:127);
kmax = 1; % we have k=1/128 as the frequency

nx = length(i);
for ui=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(ui));            
    end;
    u1(ui) = sum;
end;


figure(1);
subplot(4,1,1);
plot(i,u1);
axis([0 140 -1 1]);
xlabel('i');
legend('u1');

% We just go through one cycle

% 2. Cosine function, one frequency, intensity.
subplot(4,1,2);
plot(i,(u1).^2);
axis([0 128 -1 1]);
xlabel('i');
legend('(u1)^2');
% 3. Cosine function, many frequencies, amplitude.
i = (0:1:127);
nx = length(i);
kmax = 20;
for u2i=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(u2i));            
    end;
    u2(u2i) = sum;
end;
% k = 1/128, 2/128.. 20/128 are the frequencies,

subplot(4,1,3);
plot(i,u2);
axis([0 140 -20 20]);
xlabel('i');
legend('u2');
% 4. Cosine function, many frequencies, intensity.


subplot(4,1,4);
plot(i,(u2.^2));
axis([0 140 0 400]);
xlabel('i');
legend('(u2)^2');