% G2FERMAT

% FERMAT's PRINCIPLE

% t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
% tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
% ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
% There is a q and p value for minimum time

function G2FERMAT;
N = 20;
i = (0:1:N);
k = (0:1:N);
q = i;
p = k;
xq = 20;
xp = 40;
xf = 60;
yf = 60;
v1 = 14;
v2 = 21;
v3 = 52;

t = sqrt((xq)^2+(q).^2)/v1;
for r=1:length(q);
    for c=1:length(p);
        tt(r,c) = sqrt((xp-xq)^2+(p(c)-q(r)).^2)/v2;
    end;
end;
ttt = sqrt((xf-xq)^2+(yf-p).^2)/v3;

for r=1:length(q);
    for c=1:length(p);
        T(c,r) = tt(r)+tt(r,c) + ttt(c);
    end;
end;
M =T;

figure(1);
subplot(1,2,1);
contour(M);
subplot(1,2,2);
mesh(M);



