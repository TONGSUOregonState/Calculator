% MA3DIFINTRO

% Fresnel's formulas as function of angle of incidence for n2<n1
% Graph of arg(zr) - arg(zrr).

% Complex zr for parallel and zrr for perpendicular case.
function MA3DIFINTRO;
Theta = (0:1:90);
n2 = 1;
n1 = 1.9;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));


figure(1);
plot(Theta,angle(rp)-angle(rs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rp(\theta))-angle(rs(\theta))');