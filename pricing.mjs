// Fictional game budgets. A zero budget keeps all four packages.
export const BUDGET_PLANS=[1280,688800,18800,0,288800,68800,4800,128,128800,28800,1888800,888800,38800,688,8800,12800,188800,6800,58800,388,388800,2800,0,16800];
export function budgetLabel(total){return total===0?'0氪档案':total<1000?'零花钱精配档':total<10000?'小额充值档':total<100000?'五位数预算档':total<1000000?'六位数预算档':'百万预算档';}
