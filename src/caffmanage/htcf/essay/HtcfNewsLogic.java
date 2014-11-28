package caffmanage.htcf.essay;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import caff.core.logic.LogicCacheAbstract;
import caff.data.EntityAbstract;

import caff.data.condition.ConditionHibernateAbstract;
import caff.data.condition.page.CaffPage;
import caff.util.DbUtil;
import caff.util.oplog.CaffOpReturn;
import caffbizz.bizz.auditing.AuditState;
import caffbizz.bizz.auditing.IAuditingEntity;


@Service("iHtcfNewsLogic")
public class HtcfNewsLogic extends LogicCacheAbstract<HtcfNews> implements IHtcfNewsLogic{
	
	private static Log _logger = LogFactory.getLog("entitycache");
	@Override
	public HtcfNewsCondition getnewscond(int flag) {
		HtcfNewsCondition condition = new HtcfNewsCondition();
		condition.addflag(flag);
		condition.orderByDesc("createdDateLong");
		return condition;
	}
	
	public HtcfNewsCondition getnewsbytime(){
		HtcfNewsCondition condition = new HtcfNewsCondition();
		condition.queryAllDataWhenNoCondtion();
		condition.orderByDesc("createdDateLong");
		return condition;
	}
	
	
	@Override
	public <P> String getCacheKey(P param) {
		return EntityAbstract.getCacheKey(getEntityClass(), (Long)param);
	}

	@Override
	public <C, P> C rebuildCache(P param) {
		Object item = (Object)getEntity((Long)param);
	    if (_logger.isDebugEnabled()) {
	      _logger.debug("-------------> 重建缓存：" + item.toString());
	    }
	    return (C) item;
	}




	@Override
	public <CD extends ConditionHibernateAbstract<HtcfNews>> CaffPage<HtcfNews> getPageFromCache(
			CD paramCD) {
		String primaryKey = DbUtil.getPrimaryKey(getEntityClass());
	    return getPageFromCache(paramCD, primaryKey);
	}




	@Override
	public <CD extends ConditionHibernateAbstract<HtcfNews>> List<HtcfNews> getItemsFromCache(
			CD paramCD) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public CaffOpReturn doAuditingTX(Long arg0, AuditState arg1, String arg2,
			Date arg3, Long arg4) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public <T extends IAuditingEntity> T getAuditingItem(Long arg0) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public void sendAuditingSmsNotify(Long arg0, AuditState arg1, Date arg2,
			HttpServletRequest arg3) {
		// TODO Auto-generated method stub
		
	}









	

}
