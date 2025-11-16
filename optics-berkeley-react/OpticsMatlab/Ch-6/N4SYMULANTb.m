% N4SYMULANTb Page 2 
% Numerical calculation
function N4SYMULANTb;
n1 = 1;
n2 = 1.5;
n3 = 2;
% i = sqrt(-1);
% for a single interface, that is
M11= 1;
M12 = 0;
M21 = 0;
M22 = 1;

tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
% tt = 0.444;

R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))^2;
% R = 0.111;

% One sees that R+TT is not 1 and tt is not the transmitted power
% However if n3*tt is the transmitted power T, one has
T = n3*tt;
% T=0.889
% T+R = 1;
% and if n1 is not 1 we have more generally to write
T = (n3/n1)*tt;
% For antireflection coating one has eq. 6.27
nn1 = 1;
nn2 = (1.1:0.01:2);
nn3 = 1.5;
MM12 = (-i)./nn2;
MM21 = (-i).*nn2;

r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1));




% since -i cancels out we have
MM12 = 1./nn2;
MM21 = nn2;

R = ((-(-nn3*MM12*nn1+MM21))./(MM21+nn3*MM12*nn1)).^2;
figure(1);
plot(nn2,R);
axis([1 1.5 0 0.1]);                  % PLOTS LIMITS                    
xlabel('nn2');
legend('R(nn2)');
