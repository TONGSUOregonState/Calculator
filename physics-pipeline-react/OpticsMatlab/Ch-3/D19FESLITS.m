% D19FESLITS
% Fresnel's Integrals for the calculation of the diffraction on a slit.
% All units in mm, globally definition of parameters.
function D19FESLITS;
global Lamda X d;
Lamda =  5e-4;
X = 4000;
d = 1.5;

Y = (0:0.1:10);
nY = length(Y);
for k=1:nY;
   I(k) = (Cp(Y(k))-Cq(Y(k)))^2 + (Sp(Y(k))-Sq(Y(k)))^2 ;    
end;


figure(1);
plot(Y,I);
axis([0 7.5 0 2.5]);
xlabel('Y');
legend('I(Y)');






function Out=q(Y)
global Lamda X d;
Out = (Y + d/2).*(sqrt(2/(Lamda*X)));

function Out=p(Y)
global Lamda X d;
Out = (Y - d/2).*(sqrt(2/(Lamda*X)));


function Out=Sp(Y);
Out = quad(@sinf,0,p(Y));
function Out=Sq(Y);
Out = quad(@sinf,0,q(Y));
function Out=Cq(Y);
Out = quad(@cosf,0,q(Y));
function Out=Cp(Y);
Out = quad(@cosf,0,p(Y));

function Out=sinf(mu)
Out = sin((pi/2)*(mu.^2));
function Out=cosf(mu)
Out = cos((pi/2)*(mu.^2));