package caffmanage.htcf.essay;

import caff.data.condition.ConditionHibernateAbstract;

public class HtcfNewsCondition extends ConditionHibernateAbstract<HtcfNews>{
	public void addflag(int flag){
		addWhereCondition(eq("htcfnewsflag", flag));
	}

	
	
}
