package caffmanage.htcf.essay;


import caff.core.logic.ILogic;
import caff.core.logic.cache.ILogicCache;
import caffbizz.bizz.auditing.IAuditingLogic;

public interface IHtcfNewsLogic extends ILogic<HtcfNews>,ILogicCache,IPageFromCache<HtcfNews>,IAuditingLogic{
	public HtcfNewsCondition getnewscond(int flag);
	public HtcfNewsCondition getnewsbytime();
}
