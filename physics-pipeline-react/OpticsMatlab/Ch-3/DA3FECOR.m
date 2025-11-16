% DA3FECOR
% Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
% axis, respectively.
% The highest value f of Y is globally defined
function DA3FECOR()

f=5;
Y=(0:0.01:f);

[t,SY] = ode45(@Sf,Y,[0]);
[t,CY] = ode45(@Cf,Y,[0]);


figure(1);
plot(CY,SY);
axis([0 0.8 0 0.8]);                
xlabel('C(Y)','Fontsize',12);
legend('S(Y)');





function Out=Sf(T,X)
Out = sin((pi/2)*T^2);
function Out=Cf(T,X)
Out = cos((pi/2)*T^2);
