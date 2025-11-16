%I1COSWS

% Cosine function depending on x, t, and a phase constant.
% Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
% cosine function.We see an equivalent dependence of the cos-function on x/?
% and t/T.
% Two sets of each three functions are shown, they give the same graphs
% when changing the dependence on x or t, using the same range, and leaving
% the other corresponding parameters the same.
% In the way the cosine functions are written, an additional phase factor may
% have its origin in the space or time part, we do not know.

function I1COSWS;
x1=(0:.1:10); Lamda=1; T=10;
A1=1; t1=1; theta1=0.5;
A2=1; t2=2; theta2=0.2;
A3=1; t3=3; theta3=0.1;
ua1=A1*cos(2*pi*((x1./Lamda)-t1/T+theta1));
ua2=A2*cos(2*pi*((x1./Lamda)-t2/T+theta2));
ua3=A3*cos(2*pi*((x1./Lamda)-t3/T+theta3));

figure(1);
subplot(2,1,1);
plot(x1,ua1,x1,ua2,x1,ua3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('x1','Fontsize',12);
legend('ua1(x1)','ua2(x1)','ua3(x1)');


t1=(0:.1:10); LamdaLamda=10; TT=1;
B1=1; x1=1; psi1=1;
B2=1; x2=2; psi2=1;
B3=1; x3=3; psi3=1;
ub1=B1*cos(2*pi*((x1/LamdaLamda)-t1./TT+psi1));
ub2=B2*cos(2*pi*((x2/LamdaLamda)-t1./TT+psi2));
ub3=B3*cos(2*pi*((x3/LamdaLamda)-t1./TT+psi3));

subplot(2,1,2);
plot(t1,ub1,t1,ub2,t1,ub3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('t1','Fontsize',12);
legend('ub1(t1)','ub2(t1)','ub3(t1)');






