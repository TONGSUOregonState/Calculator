% O4SELMRS
% Graph for a demonstration of the "Sellmeir" presentation of the refractive index.
function O4SELMRS;
% For fused quartz we have
c1 = 1.448;
c2 = 3.3e5;
c3 = 1.23e11;
Lamda = (4000:1:8000);
n = c1 + c2./(Lamda.^2) + c3./(Lamda.^4);

figure(1);
plot(Lamda,n);
axis([4000 8000 1.45 1.47]);                  % PLOTS LIMITS                    
xlabel('\lambda','Fontsize',12);
legend('n(\lambda)');